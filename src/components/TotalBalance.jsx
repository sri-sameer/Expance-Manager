import { useContext, useState } from "react";
import styles from "./TotalBalance.module.css";
import { expanceContext } from "../store/store";

const TotalBalance = ({ setShowBalance }) => {

  const { updateBalance } = useContext(expanceContext);

  const [newBalance, setNewBalance] = useState("");

  const handleSubmit = () => {
    updateBalance(Number(newBalance));
    setShowBalance(false);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.container}>

        <div className={styles.button}>
          <h3>Your Budget</h3>

          <button
            onClick={() => setShowBalance(false)}
            className="btn btn-danger ms-auto"
          >
            X
          </button>
        </div>

        <input
          type="number"
          placeholder="Enter Balance"
          value={newBalance}
          onChange={(e) => setNewBalance(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className={`btn btn-primary ${styles.main}`}
        >
          Save
        </button>

      </div>
    </div>
  );
};

export default TotalBalance;