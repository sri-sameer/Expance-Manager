import { useContext } from "react"
import {PieChart, Pie, Tooltip, Cell, Legend} from "recharts"
import { expanceContext } from "../store/store.jsx"



// const Data = [{
//     name: "Food",
//     value: 400,
// },
// {
//    name: "Travel",
//    value: 300,
// },]

const RecentTransection = () => {
  const {expenses} = useContext(expanceContext)
  
  const chartData = expenses.map(item => ({
  ...item,
  amount: Number(item.amount),
}));

const COLORS = [
  "#0088FE", // Blue
  "#00C49F", // Green
  "#FFBB28", // Yellow
  "#FF8042", // Orange
  "#A28CFF", // Purple
  "#FF6384", // Pink
  "#36A2EB", // Sky Blue
  "#4BC0C0", // Teal
  "#9966FF", // Violet
  "#FF9F40", // Amber
  "#2ECC71", // Emerald
  "#E74C3C", // Red
  "#3498DB", // Light Blue
  "#9B59B6", // Deep Purple
  "#1ABC9C", // Aqua
  "#F1C40F", // Gold
  "#34495E", // Dark Gray
  "#E67E22", // Pumpkin
  "#16A085", // Sea Green
  "#D35400", // Dark Orange
];
return (
      <div className="transectioncard">
        <h6>Expenese by category</h6>
         <PieChart width={250} height={250} >
            <Pie
                data={chartData}
                dataKey= "amount"
                nameKey="category"
                cx="50%"
                cy="50%"
                outerRadius={80}
                innerRadius={10}
               
            >
            

           {expenses.map((entry,index) => (
             <Cell
             key={index}
              fill={COLORS[index % COLORS.length]}
             
             />
                
             
           ))}
             </Pie>
            <Tooltip/>
            <Legend/>
         </PieChart>
         
    </div>
  
)
}

export default RecentTransection;