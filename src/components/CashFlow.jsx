import React, { useEffect, useState } from "react";
import '../css/cashflow.css';
import { useNavigate } from "react-router-dom";

import icon_cash_flow from '../assets/cash_flow.png'
import Header from "../basecomponents/Header";

const CashFlow = () => {

    const navigate = useNavigate();
    return (
        <>
            <Header title={"নগদ প্রবাহ"} imageshow={true}/>
            <div className="bxb-cashflow-box">
                <div className="cashflow-box-pic">
                    <div className="mydiv">
                      <img src={icon_cash_flow} className="icon_cash_pic"></img>
                    </div>
                    
                </div>
                <div className="cashflow-box-info">
                    আপনার নগদ প্রবাহ কিছুটা খালি
                </div>

                <div className="cashflow-btn-div">
                    <input type="button" value="ঋণ করার জন্য" className='cashflow-btn' onClick={ () => { navigate('/bank')}}></input>
                </div>
               

            </div>
        </>
      
    )
}

export default CashFlow;