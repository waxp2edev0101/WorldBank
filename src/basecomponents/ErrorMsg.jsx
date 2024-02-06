import React, { useEffect, useState } from "react";
import '../css/errormsg.css';

const ErrorMsg = (props) => {
    return (
        <>
           <div className="errdeo">
                 {props.title}
            </div> 
        </>
    )
}

export default ErrorMsg;