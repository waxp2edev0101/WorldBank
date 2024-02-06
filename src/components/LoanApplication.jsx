import React, { useEffect, useState } from "react";
import '../css/loan.css';
import LoanItem from "./LoanItem";
import loanData from '../../loanData';
import Header from "../basecomponents/Header";

const LoanApplication = () => {

    const [flagarry, setFlagarry ] = useState()
    return(
        <div className="loanApp-container">
            <Header title={"ঋণের আবেদন"} imageshow={true}/>
            <div className="content">
               <div className="content-item">
                    <LoanItem title={loanData.Question1} content={loanData.Answer1}></LoanItem>
               </div>
               <div className="content-item">
                    <LoanItem title={loanData.Question2} content={loanData.Answer2}></LoanItem>
               </div>
               <div className="content-item">
                    <LoanItem title={loanData.Question3} content={loanData.Answer3}></LoanItem>
               </div>
               <div className="content-item">
                    <LoanItem title={loanData.Question4} content={loanData.Answer4}></LoanItem>
               </div>
               <div className="content-item">
                    <LoanItem title={loanData.Question5} content={loanData.Answer5}></LoanItem>
               </div>
               <div className="content-item">
                    <LoanItem title={loanData.Question6} content={loanData.Answer6}></LoanItem>
               </div>
               <div className="content-item">
                    <LoanItem title={loanData.Question7} content={loanData.Answer7}></LoanItem>
               </div>
               <div className="content-item">
                    <LoanItem title={loanData.Question8} content={loanData.Answer8}></LoanItem>
               </div>
               <div className="content-item">
                    <LoanItem title={loanData.Question9} content={loanData.Answer9}></LoanItem>
               </div>
               <div className="content-item">
                    <LoanItem title={loanData.Question10} content={loanData.Answer10}></LoanItem>
               </div>
            </div>


        </div>
    )
}

export default LoanApplication;