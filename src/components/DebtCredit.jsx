import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/debt.css';

import Header from "../basecomponents/Header";
import Footer from '../basecomponents/Footer';
import icon_vip_bg from '../assets/icon_vip_bg.png';
import icon_vip_card from '../assets/icon_vip_card.png'

const DebtCredit = () => {
 
    const navigate = useNavigate();
     return (
        <>
        <Header title= {"বিশ্বব্যাংক কার্ড"} imageshow={false}/>

            <div className="debt-main">
                 <div className="debt-main-bg">
                    <div className="bg-vip-box">
                        <div className="card-box"> 
                            <div className="card-box-num">
                                    <div className="con" >
                                        1026&nbsp;&nbsp;&nbsp;&nbsp;4776&nbsp;&nbsp;&nbsp;&nbsp;7372&nbsp;&nbsp;&nbsp;&nbsp;4438&nbsp;&nbsp;&nbsp;&nbsp;								</div>
                                    </div>
                                    <div className="con2">
                                        <div className="con2-row1">
                                            <div className="con2-row1-column1">
                                                <div className="con2-row1-column1-row">
                                                        VALID
                                                </div>
                                                <div className="con2-row1-column1-row">
                                                        FROM
                                                </div>

                                            </div>

                                            <div className="con2-row1-column1">
                                                <div className="con2-row1-column1-row">
                                                    MONTH/YEAR  
                                                </div>
                                                <div className="con2-row1-column2-row2">
                                                   01/70
                                                </div>

                                            </div>
                                        </div>

                                        <div className="con2-row1">
                                            <div className="con2-row1-column1">
                                                <div className="con2-row1-column1-row">
                                                        VALID
                                                </div>
                                                <div className="con2-row1-column1-row">
                                                        FROM
                                                </div>

                                            </div>

                                            <div className="con2-row1-column1">
                                                <div className="con2-row1-column1-row">
                                                    MONTH/YEAR  
                                                </div>
                                                <div className="con2-row1-column2-row2">
                                                   01/75
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                            </div>
                    </div>

                    <div className="bxb-from-btn">
                         <input type="button" className="debt-btn" value="ঋণ পরিশোধ" onClick={() => { navigate('/payonline')}}></input>
                    </div>

                 </div>
                 
                    <div className="loan-list">
                        <div className="total-loan-list">
                            <h6 className="loan-font"> 0.00৳</h6>
                            <p>মোট ঋণের পরিমাণ</p>
                        </div>
                        <div className="line"></div>
                        <div className="total-loan-list">
                            <h6 className="loan-font"> 0.00৳</h6>
                            <p>ওয়ালেট ব্যালেন্স</p>
                        </div>
                    </div>

                    <div className="vip-list-des">
                        <p>
                        বিশ্বব্যাংক ক্রেডিট কার্ড হল একটি ঋণ ব্যবসা যা বিশ্বব্যাংক দ্বারা চালু করা হয়েছে বিশ্বব্যাপী ব্যবহারকারীদের আরও ভালোভাবে সেবা দেওয়ার জন্য। আপনি যদি সফলভাবে একটি ঋণ পান এবং বিশ্বব্যাংকের ক্রেডিট কার্ডের জন্য আবেদন করেন, তাহলে আপনি নিম্নলিখিত সুবিধাগুলি পেতে পারেন:
                        </p>
                    </div>

                    <div className="vip-list-bxb">
                         <div className="vip-list-bxb-row">
                                <div className="vip-list-bxb-row-part1">
                                    <h6 className="loan-font">নগদ উত্তোলনের বিশেষাধিকার</h6>
                                    <p>বিশ্বব্যাংকের ক্রেডিট কার্ড ব্যবহারকারীরা দ্রুত বিশ্বব্যাপী নগদ উত্তোলন পরিষেবা উপভোগ করেন</p>
                                </div>
                                <div className="vip-list-bxb-row-part1">
                                    <h6 className="loan-font">অগ্রাধিকার ঋণ</h6>
                                    <p>ঋণ দেওয়ার ক্ষেত্রে বিশ্বব্যাংকের ক্রেডিট কার্ড ব্যবহারকারীদের অগ্রাধিকার রয়েছে</p>
                                </div>
                         </div>

                         <div className="vip-list-bxb-row">
                                <div className="vip-list-bxb-row-part1">
                                    <h6 className="loan-font">গতি বাড়ান</h6>
                                    <p>বিশ্বব্যাংকের ক্রেডিট কার্ড ব্যবহারকারীরা দ্রুত উত্তোলন উপভোগ করতে পারেন এবং আরও ধার নিতে পারেন</p>
                                </div>
                                <div className="vip-list-bxb-row-part1">
                                    <h6 className="loan-font">দুশ্চিন্তামুক্ত ঋণ পরিশোধ</h6>
                                    <p>বিশ্বব্যাংকের ক্রেডিট কার্ড ব্যবহারকারীরা ঋণ পরিশোধে অগ্রাধিকার দিতে পারে এবং যে কোনো সময় ঋণ নেওয়া এবং পরিশোধ করার কোনো চাপ নেই</p>
                                </div>
                         </div>

                 </div>

            </div> 

        <Footer title={1}/>

    </> 

     )
}

export default DebtCredit;