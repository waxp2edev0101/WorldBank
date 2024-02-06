import React, { useEffect, useState } from "react";
import '../css/myinfo.css';
import { useNavigate } from "react-router-dom";

import Header from "../basecomponents/Header";
import Footer from '../basecomponents/Footer';
import icon_user_pic from "../assets/icon_user_heard.jpg";
import icon_certified from "../assets/user/user-certified.png"
import icon_bank from "../assets/user/user-bank.png";
import icon_vip from "../assets/user/user-vip.png";
import icon_bills from "../assets/user/icon_bills.png";
import icon_order from "../assets/user/icon_orderlist.png";
import icon_set from "../assets/user/user-set.png";
import icon_version from "../assets/user/user-version.png";

const MyInfo = () => {

  const navigate = useNavigate();

    return (
       <>
           <div className="bxb-app">
                <div className="bxb-user-box">
                    <div className="bxb-user-header">
                        <div className="user-content">
                            <div className="user-content-pic">
                                <img src={icon_user_pic} className="user_pic"/>
                            </div>
                            <div className="user-content-text">123****9</div>
                        </div>

                    </div>
                   
                    <div className="bxb-user-info">
                         <div className="user-info-li">
                             <p>0.00৳</p>   
                             <h6>ওয়ালেট ব্যালেন্স</h6>
                         </div>
                         <div className="user-info-li">
                             <input type="button" value="উত্তোলন" className="user-li-btn"></input>
                         </div>
                    </div>

                    <div className="weui-cells">
                        <div className="weui-cell-li" >
                            <div className="weui-cell" id="weui-cell" onClick={() => { navigate('/mycertification');}}>
                                <img  src={icon_certified} className="user_certified_pic"></img>
                                <p>আমার সার্টিফিকেশন</p>
                            </div>
                        </div>
                        <div className="weui-cell-li">
                            <div className="weui-cell" onClick={() => { navigate('');}}>
                                <img  src={icon_bank} className="user_certified_pic"></img>
                                <p>আমার ব্যাঙ্ক কার্ড</p>
                            </div>
                        </div>
                        <div className="weui-cell-li">
                            <div className="weui-cell"  onClick={() => { navigate('');}} >
                                <img  src={icon_vip} className="user_certified_pic"></img>
                                <p>বিশ্বব্যাংকের ক্রেডিট কার্ড</p>
                            </div>
                        </div>
                        
                       
                    </div>

                    <div className="weui-cells">
                        <div className="weui-cell-li"  onClick={() => { navigate('/cashflow');}}>
                            <div className="weui-cell">
                                <img  src={icon_bills} className="user_certified_pic"></img>
                                <p>নগদ প্রবাহ</p>
                            </div>
                        </div>
                        <div className="weui-cell-li">
                            <div className="weui-cell"  onClick={() => { navigate('/payment');}}>
                                <img  src={icon_order} className="user_certified_pic"></img>
                                <p>পরিশোধের পরিকল্পনা</p>
                            </div>
                        </div>
                       
                    </div>

                    <div className="weui-cells">
                        <div className="weui-cell-li">
                            <div className="weui-cell"  onClick={() => { navigate('');}}>
                                <img  src={icon_version} className="user_certified_pic"></img>
                                <p>APP ডাউনলোড করুন</p>
                            </div>
                        </div>
                        <div className="weui-cell-li">
                            <div className="weui-cell"  onClick={() => { navigate('/aboutus');}}>
                                <img  src={icon_version} className="user_certified_pic"></img>
                                <p>আমাদের সম্পর্কে</p>
                            </div>
                        </div>

                        <div className="weui-cell-li">
                            <div className="weui-cell"  onClick={() => { navigate('/setting');}}>
                                <img  src={icon_set} className="user_certified_pic"></img>
                                <p>সেটিংস</p>
                            </div>
                        </div>
                       
                    </div>
                </div>
           </div>
          <Footer title={3}/>
       </>

    )
}

export default MyInfo;

