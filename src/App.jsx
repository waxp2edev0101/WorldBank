
import { ReactDOM } from "react"
import {BrowserRouter as Router, Routes, Route} from  "react-router-dom"
import Login from "./components/Login";
import Bank from "./components/Bank";
import DebtCredit from "./components/DebtCredit";
import LoanApplication from "./components/LoanApplication"
import Service from "./components/Service";
import MyInfo from "./components/MyInfo";
import MyCertification from "./components/MyCertification";
import CashFlow from "./components/CashFlow"
import PaymentPlan from "./components/PaymentPlan";
import AboutUs from './components/AboutUs';
import Setting from './components/Setting';
import ResetPassword from "./components/ResetPassword";
import Payonline from './components/Payonline';

function App() {

  // <Login />
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bank" element={<Bank />} />
        <Route path="/loan" element={<LoanApplication />} />
        <Route path="/debt" element={<DebtCredit/>} />
        <Route path="/service" element={<Service/>} />
        <Route path="/mypage" element={<MyInfo/>}/>
        <Route path='/mycertification' element= {<MyCertification/>} />
        <Route path='/cashflow' element = {<CashFlow/>} />
        <Route path='/payment' element = {<PaymentPlan/>} />
        <Route path='/aboutus' element = {<AboutUs/>} />
        <Route path='/setting' element = {<Setting/>} />
        <Route path='/resetpass' element = {<ResetPassword/>} />
        <Route path='/payonline' element = {<Payonline/>} />
      </Routes> 
    </Router>

  )
}

export default App;
