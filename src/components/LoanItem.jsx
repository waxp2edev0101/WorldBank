import React, { useEffect, useState } from "react";
import '../css/loanItem.css'

const LoanItem = (props) => {
   
    const [flag, setFlag] = useState(false);

    return (
        <div className="loan-container" >
            <div className="title" onClick={() => {setFlag(!flag)}}>
                <h2 className="title-txt">{props.title}</h2>
            </div>
            {flag? <div className="content1">
                <p className="content-txt">{props.content}</p>
            </div> : <></>}
             

        </div>
    )
}

export default LoanItem;