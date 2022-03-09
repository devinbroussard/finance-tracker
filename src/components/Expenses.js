import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

function Expenses({ expenseData }) {
  return (
    <div>
      <ExpenseItem
        title={expenseData[0].title}
        amount={expenseData[0].amount}
        date={expenseData[0].date}
      />
    </div>
  );
}

export default Expenses;
