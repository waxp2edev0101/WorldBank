import React, { useEffect, useState } from "react";
import '../css/header.css';
import icon_back from '../assets/icon-back.png';
const Header = (props) => {
   
    return (
        <div className="container-header ">
            {props.imageshow == true ?<img src={icon_back} className='icon-back' onClick={() => {window.history.back();}}></img>: <></>} 
            <h1 className="container-header-title">{props.title}</h1>
        </div>
    )
}

export default Header;
