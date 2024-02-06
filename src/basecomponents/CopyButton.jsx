import React, { useEffect, useState } from "react";
import '../css/copybutton.css';
import icon_copy from '../assets/copy.png';

const CopyButton = ({ content }) => {

  const [copystatus, setCopystatus] = useState('');
  
  const handleClick = () => {
    navigator.clipboard.writeText(content);
   
  };

  return (
      
         <img src={icon_copy} className="icon_copy" onClick={handleClick}></img>
        
  );
};

export default CopyButton;