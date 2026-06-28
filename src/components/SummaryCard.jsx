
import styles from "./SummaryCard.module.css"

const SummaryCard = ({tittle, amount, change, icon, actionButton}) => {
  return (
    <>
    <div className="ExpanceCard">
     <div className={styles.summaryheader}>
      <div className={styles.summaryicon}>{icon}</div>
      <div>
       <h5>{tittle}</h5>
       <h3>{amount}</h3>
      </div>
      <div className="ms-auto balance">{actionButton}</div>
    </div>
    <h6>{change}</h6>
  </div>
    </>
  )
}

export default SummaryCard;