import React, { useEffect, useState } from "react";
import '../css/Bank.css';

import bankimg from '../assets/ban03.jpg';
import icon_ad from '../assets/icon_ad.png';
import Footer from '../basecomponents/Footer'
import { useNavigate }  from "react-router-dom";

const Bank = () => {

const navigate = useNavigate();

const [moneyvalue, setMoneyvalue] = useState(200000);

const handeSliebar = (e) => {
      setMoneyvalue(e.target.value);
      
}


useEffect (() => {
    document.getElementById("loanmonth-li-12").style.background= "linear-gradient(90deg, #55B2F4 0%, #3F83F1 100%)";
    document.getElementById("loanmonth-li-12").style.color= "white";}, [])

const handleloanmonth12 = () => {
    document.getElementById("loanmonth-li-12").style.background= "linear-gradient(90deg, #55B2F4 0%, #3F83F1 100%)";
    document.getElementById("loanmonth-li-12").style.color= "white";
    document.getElementById("loanmonth-li-36").style.color= "#55B2F4";
    document.getElementById("loanmonth-li-60").style.color= "#55B2F4";
    document.getElementById("loanmonth-li-36").style.background = "none";  
    document.getElementById("loanmonth-li-60").style.background = "none";  
}

const handleloanmonth36 = () => {
    document.getElementById("loanmonth-li-36").style.background = "linear-gradient(90deg, #55B2F4 0%, #3F83F1 100%)"; 
    document.getElementById("loanmonth-li-36").style.color= "white";
    document.getElementById("loanmonth-li-12").style.color= "#55B2F4";
    document.getElementById("loanmonth-li-60").style.color= "#55B2F4";
    document.getElementById("loanmonth-li-12").style.background = "none";  
    document.getElementById("loanmonth-li-60").style.background = "none"; 
}

const handleloanmonth60 = () => {
    document.getElementById("loanmonth-li-60").style.background = "linear-gradient(90deg, #55B2F4 0%, #3F83F1 100%)"; 
    document.getElementById("loanmonth-li-60").style.color= "white";
    document.getElementById("loanmonth-li-36").style.color= "#55B2F4";
    document.getElementById("loanmonth-li-12").style.color= "#55B2F4";
    document.getElementById("loanmonth-li-12").style.background = "none";  
    document.getElementById("loanmonth-li-36").style.background = "none"; 
}

    return (
        <div className="container">
            <div className="header">
                <img src={bankimg} id="bank_pic" ></img>
            </div>
            <div className="content">
                <div className="content-new">
                     <div className="content-header">
                        <div className="icon-ad">
                            <img src={icon_ad}  id="icon_ad"></img>
                        </div>
                        <div className="content-header-title">
                            
                            <div className="scroll"  onClick={() => {navigate("/loan");}}>
                                <div className="scrollable-div">
                                    <ul className="list">
                                        <li> আবেদনকারীদের কি কি যোগ্যতা পূরণ করতে হবে?</li>
                                        <li> কেন ব্যাঙ্ক কার্ড সংযুক্তিকরণ ব্যর্থ হয়?</li>
                                        <li> আমি যদি সময়মতো টাকা পরিশোধ না করি তাহলে কি হবে?</li>
                                    </ul>
                                </div>
                            </div>
                            
                           
                        </div>
                        
                     </div>

                     <div className="content-main">
                         <h5 className="content-main-text">ঋণের পরিমাণ</h5>
                         <h5 className="money-value-text">{moneyvalue}</h5> 

                           <div className="slidecontainer">
                               <input type="range" min={100000} max={2000000} className="slider" id="slider" value={moneyvalue} onChange={handeSliebar}></input>
                            </div>

                          <div className="slide-value">
                              <p className="slide-value-txt"> 100000 </p>
                              <p className="slide-value-txt"> 2000000 </p>
                          </div>
                          <h5 className="content-main-text">ঋণের মাস</h5>
                          
                          <div className="loanmonth">
                                <div className="loanmonth-li" id="loanmonth-li-12" onClick={handleloanmonth12}><p className="loan-txt">12</p></div>
                                <div className="loanmonth-li" id="loanmonth-li-36" onClick={handleloanmonth36}><p className="loan-txt">36</p></div>
                                <div className="loanmonth-li" id="loanmonth-li-60" onClick={handleloanmonth60}><p className="loan-txt">60</p></div>
                          </div>
                          <div className="content-request">
                            <input type="button" value="অবিলম্বে আবেদন করুন" className="request-btn"></input>
                            <p className="btn-info">দ্রুত ঋণ গ্রহনের জন্য আপনার সকল তথ্য পূরণ করুন</p>
                          </div>
                         
                     </div>
                     <div className="scroll-list">
                                <ul className="scrolling-list" >
                                    <li><p> <em>132000</em> টাকা তোলার জন্য <em>*******931</em> কে অভিনন্দন</p></li>
                                    <li><p> <em>542000</em> টাকা তোলার জন্য <em>*******819</em> কে অভিনন্দন</p></li>
                                    <li><p> <em>1242000</em> টাকা তোলার জন্য <em>******245</em> কে অভিনন্দন</p></li>
                                    <li><p> <em>1572000</em> টাকা তোলার জন্য <em>******156</em> কে অভিনন্দন</p></li>
                                    <li><p> <em>1702000</em> টাকা তোলার জন্য <em>********279</em> কে অভিনন্দন</p></li>
                                    <li><p> <em>492000</em> টাকা তোলার জন্য <em>********664</em> কে অভিনন্দন</p></li>
                                    <li><p> <em>1652000</em> টাকা তোলার জন্য <em>*******653</em> কে অভিনন্দন</p></li>
                                    <li><p> <em>1872000</em> টাকা তোলার জন্য <em>******104</em> কে অভিনন্দন</p></li>
                                    <li><p> <em>632000</em> টাকা তোলার জন্য <em>******751</em> কে অভিনন্দন</p></li>
                                    <li><p> <em>1022000</em> টাকা তোলার জন্য <em>********155</em> কে অভিনন্দন</p></li>
                                    <li><p> <em>242000</em> টাকা তোলার জন্য <em>*******639</em> কে অভিনন্দন</p></li>
                                    <li><p> <em>572000</em> টাকা তোলার জন্য <em>*******618</em> কে অভিনন্দন</p></li>
                                    <li><p> <em>842000</em> টাকা তোলার জন্য <em>********190</em> কে অভিনন্দন</p></li>
                                    <li><p> <em>632000</em> টাকা তোলার জন্য <em>******087</em> কে অভিনন্দন</p></li>
                                    <li><p> <em>1942000</em> টাকা তোলার জন্য <em>********023</em> কে অভিনন্দন</p></li>
                                    <li><p> <em>482000</em> টাকা তোলার জন্য <em>*******449</em> কে অভিনন্দন</p></li>
                                    <li><p> <em>1552000</em> টাকা তোলার জন্য <em>*******282</em> কে অভিনন্দন</p></li>
                                    <li><p> <em>1812000</em> টাকা তোলার জন্য <em>********582</em> কে অভিনন্দন</p></li>
                                    <li><p> <em>922000</em> টাকা তোলার জন্য <em>********547</em> কে অভিনন্দন</p></li>


                                    <li><p> <em>132000</em> টাকা তোলার জন্য <em>*******931</em> কে অভিনন্দন</p></li>
                                    <li><p> <em>542000</em> টাকা তোলার জন্য <em>*******819</em> কে অভিনন্দন</p></li>
                                    <li><p> <em>1242000</em> টাকা তোলার জন্য <em>******245</em> কে অভিনন্দন</p></li>
                                    <li><p> <em>1572000</em> টাকা তোলার জন্য <em>******156</em> কে অভিনন্দন</p></li>
                                    <li><p> <em>1702000</em> টাকা তোলার জন্য <em>********279</em> কে অভিনন্দন</p></li>
                                    <li><p> <em>492000</em> টাকা তোলার জন্য <em>********664</em> কে অভিনন্দন</p></li>
                                    <li><p> <em>1652000</em> টাকা তোলার জন্য <em>*******653</em> কে অভিনন্দন</p></li>
                                    <li><p> <em>1872000</em> টাকা তোলার জন্য <em>******104</em> কে অভিনন্দন</p></li>
                                    <li><p> <em>632000</em> টাকা তোলার জন্য <em>******751</em> কে অভিনন্দন</p></li>
                                    <li><p> <em>1022000</em> টাকা তোলার জন্য <em>********155</em> কে অভিনন্দন</p></li>
                                    <li><p> <em>242000</em> টাকা তোলার জন্য <em>*******639</em> কে অভিনন্দন</p></li>
                                    <li><p> <em>572000</em> টাকা তোলার জন্য <em>*******618</em> কে অভিনন্দন</p></li>
                                    <li><p> <em>842000</em> টাকা তোলার জন্য <em>********190</em> কে অভিনন্দন</p></li>
                                    <li><p> <em>632000</em> টাকা তোলার জন্য <em>******087</em> কে অভিনন্দন</p></li>
                                    <li><p> <em>1942000</em> টাকা তোলার জন্য <em>********023</em> কে অভিনন্দন</p></li>
                                    <li><p> <em>482000</em> টাকা তোলার জন্য <em>*******449</em> কে অভিনন্দন</p></li>
                                    <li><p> <em>1552000</em> টাকা তোলার জন্য <em>*******282</em> কে অভিনন্দন</p></li>
                                    <li><p> <em>1812000</em> টাকা তোলার জন্য <em>********582</em> কে অভিনন্দন</p></li>
                                    <li><p> <em>922000</em> টাকা তোলার জন্য <em>********547</em> কে অভিনন্দন</p></li>
                                </ul>
                        </div>
                       
                </div>
            </div>
           
            <Footer title={0}/>
        </div>
    )
}

export default Bank;