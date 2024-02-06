import React, { useEffect, useState } from "react";
import '../css/resetpassword.css';


import Header from "../basecomponents/Header";
import Button from "../basecomponents/Button";

const ResetPassword = () => {
   
    return(
         <>
            <Header title={"পাসওয়ার্ড রিসেট করুন"} imageshow={true}/>
             <div className="bxb-resetpass-box">
                 <div className="resetpass-form">
                    <div className="form-cell">
                        <div className='form-cell-li'>
                             <div className='form-cell-li-hd'>
                                    ফোন নম্বর
                             </div>
                             <div className='form-cell-li-bd'>
                                 <input type="text" placeholder="ফোন নম্বর" className='cell-li-element'></input>
                             </div>
                        </div>

                        <div className='form-cell-li'>
                             <div className='form-cell-li-hd'>
                                     ক্যাপচা
                             </div>
                             <div className='form-cell-li-bd'>
                                 <input type="text" placeholder="ক্যাপচা" className='cell-li-element'></input>
                             </div>
                        </div>

                        <div className='form-cell-li'>
                             <div className='form-cell-li-hd'>
                                    এসএমএস যাচাইকরণ কোড
                             </div>
                             <div className='form-cell-li-bd'>
                                 <input type="text" placeholder="এসএমএস যাচাইকরণ কোড" className='cell-li-element'></input>
                             </div>
                             <input type="button" className="verify-code-btn" value='Get Verification Code'></input>

                        </div>

                        <div className='form-cell-li'>
                             <div className='form-cell-li-hd'>
                                নতুন পাসওয়ার্ড সেট করুন
                             </div>
                             <div className='form-cell-li-bd'>
                                 <input type="password" placeholder="নতুন পাসওয়ার্ড সেট করুন" className='cell-li-element'></input>
                             </div>
                        </div>
                    </div>
                 </div>

                 <Button title={"জমা দিন"}/>

             </div>
         </>

    )

}

export default ResetPassword;