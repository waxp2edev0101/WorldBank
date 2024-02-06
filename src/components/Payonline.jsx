import React, { useEffect, useState } from "react";
import '../css/payonline.css';
import Header from "../basecomponents/Header";
import CopyButton from "../basecomponents/CopyButton";
import icon_receipt from '../assets/receipt_input.png';
import Button from "../basecomponents/Button";

const Payonline = () => {
  
    return(
        <>
          <Header title={"অনলাইন পরিশোধ"} imageshow={true}/>
           <div className="bxb-payonline-box">
                <div className="payonline-title">নগদ উত্তোলন ঋণ পরিচালনার ফি প্রদানের পদ্ধতি</div>
                <div className="mui-input-ul">
                    ব্যাংক:
                    <span>Bkash</span>
                </div>
                <div className="mui-input-ul">
                     সংখ্যা:
                    <span>01946277213</span>
                    <CopyButton content={"01946277213"}/>
                    পেমেন্ট ট্রান্সফার করতে নম্বরটি কপি করতে ক্লিক করুন
                </div>

                <div className="mui-input-ul">
                   ব্যাংক:
                    <span>Nagad</span>
                </div>
                <div className="mui-input-ul">
                     সংখ্যা:
                    <span>01617069721</span>
                    <CopyButton content={"01617069721"}/>
                    পেমেন্ট ট্রান্সফার করতে নম্বরটি কপি করতে ক্লিক করুন
                </div>

                <div className="mui-input-row">
                    <div className="mui-input-content">
                        3000TK
                    </div>
                   
                </div>

                <div className="recipe-box">
                    <img src={icon_receipt} className="icon_receipt"></img>
                </div>

             <p className="xk_2">সফল ফি ট্রান্সফারের একটি স্ক্রিনশট আপলোড করুন</p>

             <Button title={"নিশ্চিত"}/>

             <p className="xk_2">তহবিল তোলার সময় অনুগ্রহ করে 3000TK লোন ট্রান্সফার ফি প্রদান করুন।</p>

           </div>
        </>
    )
}

export default Payonline