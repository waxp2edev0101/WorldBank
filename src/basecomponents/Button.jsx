import React, { useEffect, useState } from "react";
import '../css/button.css';

const Button = (props) => {

    const {click} = props;
    
    const handleclick = () => {
        click();
    }
   
    return(
        <>
           <div className="container-button">
                <input type="button" value={props.title} className='button' onClick={handleclick}></input>
           </div>
        </>
    )
}

export default Button;