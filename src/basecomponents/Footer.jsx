import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/footer.css';

import icon_debt from '../assets/icon_debt.png';
import icon_service from '../assets/icon_service.png';
import icon_my from '../assets/icon_my.png';
import icon_home from '../assets/icon_home_nomal_bd.png';
import icon_home_selected from '../assets/icon_home.png';
import icon_service_selected from "../assets/icon_customer_selected.png";
import icon_my_selected from '../assets/icon_user_selected.png';
import icon_debt_selected from '../assets/icon_card_selected.png';



const Footer = (props) => {

    let arry = [false,false,false,false]
     switch (props.title)
     {
        case 0:
            arry = [true, false, false, false];
            break;
        case 1:
            arry = [false, true, false, false];
            break;
        case 2:
            arry = [false, false, true, false];
            break;
        case 3:
            arry = [false, false, false, true];
            break;
        default:
            break;
     }
    
     const [flag, setFlag] = useState(arry);
     const navigate = useNavigate();

    return(
        <div className="footer">
                    
        <div className="footer-item">
            <img src={flag[0] ?icon_home_selected : icon_home} className="footer-icon" onClick={() => { setFlag([true, false, false, false]) ; navigate('/bank');}}></img>
            <h6 className="footer-content">হোম </h6>
        </div>

        <div className="footer-item">
            <img src={flag[1] ?icon_debt_selected : icon_debt} className="footer-icon" onClick={() => { setFlag([false, true, false, false]) ; navigate('/debt');}}></img>
            <h6 className="footer-content">ঋণ পরিশোধ </h6>
        </div>

        <div className="footer-item">
            <img src={flag[2] ?icon_service_selected : icon_service} className="footer-icon" onClick={() => { setFlag([false, false, true, false])  ; navigate('/service');}}></img>
            <h6 className="footer-content">গ্রাহক সেবা </h6>
        </div>

        <div className="footer-item">
            <img src={flag[3] ?icon_my_selected : icon_my} className="footer-icon" onClick={() => { setFlag([false, false, false, true])  ; navigate('/mypage');}}></img>
            <h6 className="footer-content">আমার </h6>
        </div>
        <div id="test"></div>
    </div>
    )
   

}

export default Footer;
