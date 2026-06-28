import { useContext } from "react";
import styles from "./CategaryExpance.module.css";
import { FaCreativeCommonsNc } from "react-icons/fa";
import { expanceContext } from "../store/store";



const CategaryExpance = () => {

 const {expenses, deletePost} = useContext(expanceContext)
  return(
    <div className="secondtransectioncard">
      <h5>Recent transection</h5> <hr />
      {expenses.map((item, index) => (
        <div className={styles.transectionItem} key={index}>
          <div className={styles.leftSection}>
          <div className={styles.transectionIcon}>
            <FaCreativeCommonsNc  />
          </div>
           <h5>{item.Id}</h5>
          <div className={styles.title}>
           
            <h5>{item.title}</h5>
            <p>{item.category}</p>
          </div> <hr />
          <h6>{item.date}</h6>
        </div>

          <h5 className="ms-auto">₹{item.amount}</h5>
          <button onClick={() => deletePost(item.Id)} className={`btn btn-danger ${styles.space}`}>X</button>
        </div>
        
        
      ))}
    </div>
  );
};

export default CategaryExpance;

