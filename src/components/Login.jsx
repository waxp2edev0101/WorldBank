import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import '../css/login.css'
import GoogleSvg from "../assets/icons8-google.svg";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import icon_area from "../assets/icon_area.png";
import icon_see from '../assets/icon_see.png';
import icon_lock from "../assets/icon_lock.png"

import Modaldialog from "./Modaldialog";
import ErrorMsg from "../basecomponents/ErrorMsg";
import icon_loading from "../assets/icon_loading.gif";

const Login = () => {

  const navigate = useNavigate();
  const [ showPassword, setShowPassword ] = useState(false);
  const [flag, setFlag ] = useState(false);
  const [verify, setVerify] = useState("https://bd.theworldbank.online/index.php?m=Common&a=verify");
  const [isloading, setIsloading] = useState(true);

  const [phonenumber, setPhonenumber] = useState("");
  const [password, setPassword] = useState("");
  const [verifycode, setVerifyCode] = useState("");
  const [checkstatus, setCheckstatus ] = useState(true);
  const [ errorflag, setErrorflag] = useState(false);
  const [errorcontent, setErrorContent] = useState('');


  useEffect(() => {
    const simulateLoading = setTimeout(() => {
      setIsloading(false);
    }, 1000); 

    return () => clearTimeout(simulateLoading);
  }, []);

  const close=() => {
    setFlag(false);
  }

  const onChange_phone = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
       setPhonenumber(e.target.value);
  }
  }

   useEffect (() => {
    setTimeout(()=> { setErrorflag(false) ; setErrorContent("")}, 1000)
   }, [errorcontent])
  

  const handle_register_btn = (e) => {
       e.preventDefault();
       if ( phonenumber.trim().length == 0 )
            {
              setErrorflag(true);
              setErrorContent("ফোন নম্বর লিখুন");
            }
      else if ( password.length  <  6)
              {
                setErrorflag(true);
                setErrorContent("123অনুগ্রহ করে ছবিতে উল্লেখিত  6-সংখ্যা যাচাইকরণ কোড লিখুন");
              }
     else  if (verifycode.trim().length == 0)
              {
                setErrorflag(true);
                setErrorContent("অনুগ্রহ করে ছবিতে উল্লেখিত  4-সংখ্যা যাচাইকরণ কোড লিখুন");
              }
      else if (checkstatus == false)
              {
                setErrorflag(true);
                setErrorContent("You need to agree to the agreement to register");
              }
      else {

        navigate("/bank") ;
      }

  }


  return (
    
    <div className="login-main">
      { isloading ? ( <div className="loading">
          <img src={icon_loading} className="icon_loading"></img>
      </div>) : (<></>)}
     
      {flag ? <Modaldialog close={close}/> : <></>} 

      {errorflag ? <ErrorMsg title={errorcontent}/> : <></> }
      <div className="bxb-app">
          <div className="logo"> 
	          	WELCOME TO WORLD BANK
		      </div>

          <form>
              <div className="data-dailog">

              <div className="input-data" id="phone number">
                    <div className="input-title"> ফোন নম্বর </div>
                    <div className="input-div">
                        <span className="input-country">
                            <img src={icon_area}  id="bg-pic"></img> +880
                        </span>

                        <input type="tel" placeholder="ফোন নম্বর লিখুন" className="input-pro1" onChange={onChange_phone} value={phonenumber}></input>
                    </div>
                </div>
                <div className="input-data" id="password">
                    <div className="input-title">পাসওয়ার্ড </div>
                    <div className="input-div">
                         <input type={showPassword ? "text" : "password"} placeholder="দয়া করে পাসওয়ার্ড লিখুন" className="input-pro" value={password} onChange={(e) => { setPassword(e.target.value)}}/>
                         <span className="input-country-see">
                             <img src={showPassword ?icon_see: icon_lock }  className="icon_lock" onClick={() => {setShowPassword(!showPassword)}}></img>
                        </span>
                    </div>
                </div>

                <div className="input-data" id="verification">
                    <div className="input-title"> ভেরিফিকেশন গোডে</div>
                    <div className="input-div">
                         <input type="text" placeholder="ছবি যাচাইকরণ কোড লিখুন" className="input-pro" value={verifycode} onChange={(e) => {setVerifyCode(e.target.value)}}></input>
                    </div>

                    {/* <img src={verify} onClick={() => {setVerify("https://bd.theworldbank.online/index.php?m=Common&a=verify")}}></img> */}
                </div>
              </div>
                
                <div className="check-box" id="check">
                   <input type="checkbox" checked={checkstatus} onChange={()=>{setCheckstatus(!checkstatus)}} value="Agree"></input>
                   <p className="agree-btn">একমত</p>
                   {/* <a className="agree-txt" href=""> 《WorldBank User Registration Agreement》</a> */}
                    <div className="agree-txt" onClick={()=>{setFlag(true)}}>《WorldBankবিশ্বব্যাংক ব্যবহারকারী নিবন্ধন চুক্তি》</div>

                </div> 
                 <div className="btn-dialog">
                      <input type="button" className="register-btn" value="নিবন্ধন" onClick={ handle_register_btn}></input>
                 </div>
               
                 <div className="btn-dialog">
                      <input type="button" className="enter-btn" value="প্রবেশ করুন"></input>
                 </div> 
          </form>
          
      </div>
         
    </div>
  );
};

export default Login;
