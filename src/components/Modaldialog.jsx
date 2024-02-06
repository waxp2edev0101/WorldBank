import React, { useEffect, useState } from "react";
import agreeData from "../../agreement";
import '../css/Modal.css'

const Modaldialog = (props) => {

  const {close} = props;

  const closeBtnClick = ()=> {
    close();
  }

    return (
        <div className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        《User Registration Agreement》 
                    </div>
                    <div className="modal-body">
                       <div className="modal-body-content">
                           <strong>{agreeData.subtitle}</strong> 
                           <p>{agreeData.title1}</p>
                           <p>{agreeData.title2}</p>
                           <p>{agreeData.title2des}</p>
                           <p>{agreeData.title2ct1} </p>
                           <p>{agreeData.title2ct2}</p>
                           <p>{agreeData.title2ct3}</p>
                           <p>{agreeData.title3}</p>
                           <p>{agreeData.title3des}</p>
                           <p>{agreeData.title4}</p>
                           <p>{agreeData.title4des}</p>
                           <p>{agreeData.title5}</p>
                           <p>{agreeData.title5des}</p>
                       </div>
                  
                    </div>
                    <div className="modal-footer" onClick={closeBtnClick}>Close
                    </div>
                </div>
        </div>
    )
}

export default Modaldialog;

