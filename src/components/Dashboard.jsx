import styles from "./DashBoard.module.css"
import SummaryCard from "./SummaryCard";
import RecentTransection from "./RecentTransection";
import CategaryExpance from "./CategaryExpance";
import { MdAccountBalance } from "react-icons/md";
import { FaMoneyCheck } from "react-icons/fa6";
import { BsCalendar2Month } from "react-icons/bs";
import { RiFileTransferFill } from "react-icons/ri";
import {Link} from "react-router-dom"
import { useContext, useState } from "react";
import { expanceContext } from "../store/store";
import TotalBalance from "./TotalBalance";
import FooterPart from "./Footer";

const Dashboard = () => {

 const [showBalance ,setShowBalance] = useState()

 const {expenses ,balance } = useContext(expanceContext)

console.log(expenses);


{console.log(balance)}
let firstExpence = 0;
const totalExpences =() => {
  for(let i=0; i<expenses.length; i++){
      firstExpence  += Number(expenses[i].amount)
  }
  return firstExpence;
}

 let rupee =0
const availableBalance = () => {
   return Number(balance - firstExpence);
}


  return (
    <>
  <div className="Dashboard">
  <span className="d-flex"><h3>Dashboard</h3>  <Link to="form" className="ms-auto"><button type="button" className="btn btn-primary ms-auto buttonDash">+ Add Expense</button></Link></span>
  <h6>Welcome back, Here's your expense overview .</h6>
  </div>

<center className={styles.summaryContainer}>
  <SummaryCard
  icon={<MdAccountBalance />}
   tittle={"Total Balance"}
   amount={`₹ ${balance}`}
   actionButton={<button onClick={() => setShowBalance(true)}  className="btn btn-success ms-auto">Update</button>}
   change={"+12.5% from last month"}
  />
  <SummaryCard
  icon={<FaMoneyCheck />}
   tittle={"Total Expense"}
   amount={`₹${totalExpences()}`}
   
   change={"-8.3% from last month"}
  />

{console.log(expenses)}
  <SummaryCard
  icon={<BsCalendar2Month />}
   tittle={"Available balance"}
   amount={`₹ ${availableBalance()}`}
   
   change={"-15.5% from last month"}
  />

  <SummaryCard
  icon={<RiFileTransferFill />}
   tittle={"Total Transection"}
   amount={expenses.length}
   change={"+4 from last month"}
/>

</center>

<center className={styles.secondCard}>
<CategaryExpance/>
 <RecentTransection/>
  
  
</center>

 <center>
 {showBalance && <TotalBalance setShowBalance={setShowBalance}></TotalBalance >}
</center>
 
 <div>
  <FooterPart></FooterPart>
 </div>

 </>
  )
}


export default Dashboard;