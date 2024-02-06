import React, { useEffect, useState } from "react";
import '../css/setting.css';
import Header from "../basecomponents/Header";
import Button from "../basecomponents/Button";
import { useNavigate } from "react-router-dom";

const Setting = () => {

    const navigate = useNavigate();
    return (
        <>
            <Header title= {"সেটিংস"} imageshow={true}/>
              <div className="bxb-setting-box">
                    <div className="change-pass-box" onClick={ () => { navigate('/resetpass')}}>
                        <div className="padding-10">
                           <p>পাসওয়ার্ড পরিবর্তন করুন</p>
                        </div>
                       
                    </div>
                    <Button title={"সাইন আউট"} click={() => {navigate('/login')}} ></Button>
                </div>

                
              
        </>
    )
}

export default Setting;