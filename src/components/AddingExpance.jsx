
import { useContext, useRef } from "react";
import styles from "./AddingExpance.module.css";
import { expanceContext } from "../store/store";
import { useNavigate } from "react-router-dom";





const AddingExpance = () => {


  const {addPost} =useContext(expanceContext)
  const navigate = useNavigate()

  const titleElement = useRef();
  const amountElement = useRef();
  const categoryElement = useRef();
  const paymentMethodElement = useRef();
  const dateElement = useRef();
  const IdElement = useRef();

const HandleSubmit = (e) => {
e.preventDefault

const title = titleElement.current.value;
const amount = amountElement.current.value;
const category = categoryElement.current.value;
const paymentMethod = paymentMethodElement.current.value;
const date = dateElement.current.value;
const Id = IdElement.current.value;

titleElement.current.value = "";
amountElement.current.value = "";
categoryElement.current.value = "";
paymentMethodElement.current.value = "";
dateElement.current.value = "";
IdElement.current.value= "";


  const expense = {
    title,
    amount,
    category,
    paymentMethod,
    date,
    Id
  };

  addPost(expense);
 navigate("/")


}

const handleCancel = ()  =>{

  titleElement.current.value = "";
amountElement.current.value = "";
categoryElement.current.value = "";
paymentMethodElement.current.value = "";
dateElement.current.value = "";
IdElement.current.value= "";
}




  return (
    <>
   
      <div className={styles.addingexpance}>
        <h2>Add Expence</h2>
        <h6>Expences &gt; AddExpance</h6>
      </div>
      <div className={styles.container}>
        <div className={styles.expancepart}>
          <div className={styles.selectors}>
            <div className="mb-3">
              <label htmlFor="formFile" className="form-label fw-bold">
                Amount
              </label>
              <input
              
                ref={amountElement}
                className="form-control form-control border border-normal"
                type="text"
                id="formFile"
                placeholder="0.00"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="formFileMultiple" className="form-label fw-bold">
                Date
              </label>
              <input
             
               ref={dateElement}
                className="form-control form-control border border-normal"
                type="date"
                id="formFileMultiple"
                multiple
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="formFile" className="form-label fw-bold">
              Category
            </label>
            <select
           
             ref={categoryElement}
              className="form-select form-control border border-normal"
              id="formFileDisabled"
            >
              <option value="">Select Category</option>
              <option value="Food">Food</option>
              <option value="Travel">Travel</option>
              <option value="Shopping">Shopping</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="formFileSm" className="form-label fw-bold">
              payment-method
            </label>
            <select
            
             ref={paymentMethodElement}
              placeholder="payment"
              className="form-control form-control-sm form-control border border-normal"
              id="formFileSm"
              type="select"
            >
               <option value="">Select payment method</option>
              <option value="paytm">paytm</option>
              <option value="upi">UPI</option>
              <option value="papa">papa</option>
              <option value="bhaiy">bhaiya/didi</option>
            </select>
          </div>
          <div>
            <label htmlFor="formFileLg"  className="form-label fw-bold">
              Title
            </label>
            <input
           
             ref={titleElement}
              className="form-control form-control-lg form-control border border-normal"
              id="formFileLg"
              type="text"
              placeholder="Something"
            />
          </div>
          <div>
            <label htmlFor="formFileLg" className="form-label fw-bold">
              ID(unique No.)
            </label>
            <input
             ref={IdElement}
              placeholder="No. of expance"
              className="form-control form-control-lg form-control border border-normal"
              id="formFileLg"
              type="text"
            />
          </div>
        </div>

       
      </div>
      <div className={styles.buttonpart}>
        
         <button onClick={handleCancel} className="btn btn-secondary me-2">cancel</button>
        <button onClick={HandleSubmit} className="btn btn-primary">SaveExpense</button>
       
       
      </div>
  
    </>
  );
};

export default AddingExpance;
