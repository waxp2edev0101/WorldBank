import React, { useEffect, useState } from "react";
import '../css/aboutus.css';
import Header from "../basecomponents/Header";
import icon_about_bg from '../assets/aboutus/icon_about_bg.png';
import icon_about_bank from  '../assets/aboutus/icon_about_bank.png';

const AboutUs = () => {
    return(
      <>
         <Header title={"আমাদের সম্পর্কে"} imageshow={true}/>
         <div className="bxb-aboutus-container">
            <div className="bxb-aboutus-box">
                <img src={icon_about_bank} className="about-box-img"></img>
            </div>
         </div>
      </>
    )
}

export default AboutUs;