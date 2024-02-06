import React, { useEffect, useState } from "react";
import '../css/mycertification.css';
import Header from "../basecomponents/Header";
import icon_name from '../assets/certification/icon_name.png';
import icon_card from '../assets/certification/icon_card.png';
import icon_home_address from '../assets/certification/icon_address_home.png';
import icon_work_address from '../assets/certification/icon_address_work.png';
import icon_salary from '../assets/certification/icon_month_income.png';
import icon_amount from '../assets/certification/icon_expected_loan_amount.png';
import icon_purpose from '../assets/certification/icon_loan_purpose.png';
import sfz_zm from '../assets/certification/sfz_zm.jpg';
import sfz_fm from '../assets/certification/sfz_fm.jpg';
import sfz_hb from '../assets/certification/sfz_hb.jpg';

const MyCertification = () => {
    return (
       <>
          <Header title={"আমার সার্টিফিকেশন"} imageshow={true}/>
          <div className="bxb-certification-box">
              <div className="bxb-certification-card">
                   <div className="certification-card-first-bg">
                        <div className="card-txt-left">
                            <p>200,0000 কোটা পর্যন্ত</p>
                            <p className="bxb-m10-top">দ্রুত পর্যালোচনা, লাইটনিং ঋণ</p>
                        </div>

                        <div className="card-txt-right">
                             <div className="card-txt-right-content">
                                <h6><span>0</span></h6>
                                <p>বর্তমান কোটা</p>
                             </div>

                             <div id="svgView" className="svgView">
                               <svg version="1.1" width="2.2rem" height="2.2rem">
                                    <path d="M180.0035713374682,180.0035713374682A99,99,0,1,1,180.0035713374682,39.9964286625318" fill="none" stroke="#FFF" strokeWidth="5" strokeLinecap="round" transform="rotate(0, 0, 0)">
                                        </path>
                                    <path d="M180.0035713374682,180.0035713374682A99,99,0,0,1,176.62823883746756,183.22347840288236" fill="none" stroke="#ffe400" strokeWidth="5" strokeLinecap="round" transform="rotate(0, 0, 0)">
                                        </path>
                                </svg>
                             </div>
                        </div>
                   </div>

                   <div className="certification-card-second-bg"></div>
                   <div className="certification-card-third-bg"></div>

                </div>

              <div className="bxb-bg-fff bxb-m15-top">
                  <div className= "bxb-tit-num01">
                      <span></span>
                      <h6 className="bxb-tit-txt">মৌলিক প্রমাণীকরণ (প্রয়োজনীয়) </h6>
                  </div>
                  <div className="bxb-authentication-input">
                        <div className="authentication-label">
                            <img src={icon_name} className="authentication-pic"></img>
                            <h6 className="bxb-tit-txt">নাম</h6>
                        </div>
                        <input type="text" className="authentication-label-input" placeholder="আপনার নাম লিখুন"></input>
                  </div>

                  <div className="bxb-authentication-input">
                        <div className="authentication-label">
                            <img src={icon_card} className="authentication-pic"></img>
                            <h6 className="bxb-tit-txt">আইডি নাম্বার</h6>
                        </div>
                        <input type="text" className="authentication-label-input" placeholder="অনুগ্রহ করে শনাক্তকরণ নম্বর লিখুন"></input>
                  </div>

                  <div className="bxb-authentication-input">
                        <div className="authentication-label">
                            <img src={icon_home_address} className="authentication-pic"></img>
                            <h6 className="bxb-tit-txt"> ফ্যামিলি অ্যাড</h6>
                        </div>
                        <input type="text" className="authentication-label-input" placeholder="অনুগ্রহ করে বাড়ির ঠিকানা লিখুন"></input>
                  </div>

                  <div className="bxb-authentication-input">
                        <div className="authentication-label">
                            <img src={icon_work_address} className="authentication-pic"></img>
                            <h6 className="bxb-tit-txt">কাজের ঠিকানা</h6>
                        </div>
                        <input type="text" className="authentication-label-input" placeholder="অনুগ্রহ করে কাজের ঠিকানা লিখুন "></input>
                  </div>

                  <div className="bxb-authentication-input">
                        <div className="authentication-label">
                            <img src={icon_salary} className="authentication-pic"></img>
                            <h6 className="bxb-tit-txt"> বেতন</h6>
                        </div>
                        <input type="text" className="authentication-label-input" placeholder="অনুগ্রহ করে মাসিক আয় উল্লেখ করুন"></input>
                  </div>

                  <div className="bxb-authentication-input">
                        <div className="authentication-label">
                            <img src={icon_amount} className="authentication-pic"></img>
                            <h6 className="bxb-tit-txt"> প্রত্যাশিত পরিমান</h6>
                        </div>
                        <input type="text" className="authentication-label-input" placeholder="অনুগ্রহ করে প্রত্যাশিত ঋণের পরিমাণ লিখুন"></input>
                  </div>

                  <div className="bxb-authentication-input">
                        <div className="authentication-label">
                            <img src={icon_purpose} className="authentication-pic"></img>
                            <h6 className="bxb-tit-txt">উদ্দেশ্য</h6>
                        </div>
                        <input type="text" className="authentication-label-input" placeholder="অনুগ্রহ করে ঋণের উদ্দেশ্য লিখুন"></input>
                  </div>


                   <div className="identity-card">
                       <p className="identity-card-txt">পরিচয়পত্র </p>
                       <p className="identity-card-txt">আইডি কার্ডের সামনে এবং পিছনে সনাক্তকরণ শুরু করতে ক্লিক করুন</p>
                       <div className="identity-card-dialog">
                            <div className="identity-card-model">
                                <img src={sfz_fm} className="identity-card-model-pic"></img>
                                <p className="identity-card-model-txt">আইডি কার্ড সামনের দিক </p>
                            </div>

                            <div className="identity-card-model">
                                <img src={sfz_zm} className="identity-card-model-pic"></img>
                                <p className="identity-card-model-txt">আইডি কার্ডের বিপরীত দিক </p>
                            </div>
                       </div>
                   </div>

                   <div className="identity-card2">
                       <p className="identity-card-txt">মুখ স্বীকৃতি</p>
                       <p className="identity-card-txt">আইডি কার্ড হাতে নিয়ে ছবি আপলোড শুরু করতে ক্লিক করুন</p>
                       <div className="identity-card-dialog">
                            <div className="identity-card-model">
                                <img src={sfz_fm} className="identity-card-model-pic"></img>
                            </div>
                       </div>
                   </div>
                </div>

            <div className="bxb-certification-note">
                <p>1. দ্রুত পর্যালোচনা সহজতর করার জন্য প্রকৃত তথ্য পূরণ করুন</p>
                <p>2. আপনার জমা দেওয়া সমস্ত তথ্য কঠোরভাবে গোপন রাখা হবে</p>
                <p>3. অতিরিক্ত সার্টিফিকেশন তথ্য গৃহীত করার পরে, অনুমোদনের পরিমাণ বাড়ানো যেতে পারে</p>
            </div>
             <div className="certification-btn-label">
                <input type="button" value='সার্টিফিকেশন জমা দিন' className="certification-btn"></input>
             </div>
            

          </div>
       </>
    )

}

export default MyCertification;