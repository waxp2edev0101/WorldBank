import React, { useEffect, useState } from "react";
import '../css/service.css';
import Header from "../basecomponents/Header";
import Footer from '../basecomponents/Footer';
import icon_telegram from '../assets/telegram.png';
import icon_app from '../assets/WhatsApp.png';
import icon_service_bg from '../assets/icon_customer_bg.png'


const Service = () => {
    return (
        <>
          <Header title={"গ্রাহক সেবা"} imageshow={false}/>

          <div className="bxb-help-box">
             <div className="bxb-help-info">
            ঋণ গ্রাহকের সংখ্যা বেশি হওয়ায় আমাদের গ্রাহক সেবা বর্তমানে ব্যস্ত। আপনি যদি গ্রাহক পরিষেবা থেকে দ্রুত প্রতিক্রিয়া না পান, অনুগ্রহ করে আবার গ্রাহক পরিষেবা বোতামে ক্লিক করুন৷ আপনার প্রশ্নগুলির সাথে আপনাকে সহায়তা করার জন্য একজন নতুন গ্রাহক পরিষেবা প্রতিনিধি উপলব্ধ থাকবে৷
             </div>
             <div className="bxb-help-card">
                 <img className='whatapp' src={icon_app}></img>
                 <img className="telegram" src={icon_telegram}></img>
             </div>
          </div>  

          <Footer title={2}/>
        </>
    )
}

export default Service;