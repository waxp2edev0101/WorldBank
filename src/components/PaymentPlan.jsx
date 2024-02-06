import React, { useEffect, useState } from "react";
import '../css/cashflow.css';
import { useNavigate } from "react-router-dom";

import icon_cash_flow from '../assets/cash_flow.png'
import Header from "../basecomponents/Header";

const PaymentPlan = () => {

    const navigate = useNavigate();
    return (
        <>
            <Header title={"পরিশোধের পরিকল্পনা"} imageshow={true}/>
            <div className="bxb-cashflow-box">
                <div className="cashflow-box-pic">
                    <div className="mydiv">
                      <img src={icon_cash_flow} className="icon_cash_pic"></img>
                    </div>
                    
                </div>
                <div className="cashflow-box-info">
                     কোন ঋণ পরিশোধের প্রয়োজন নেই!
                     <br></br>এই সপ্তাহে আপনার কোন বিল নেই।.
                </div>

                <div className="cashflow-btn-div">
                    <input type="button" value="ঋণ করার জন্য" className='cashflow-btn' onClick={() => { navigate('/bank');}}></input>
                </div>
               
            </div>
        </>
      
    )
}

export default PaymentPlan;