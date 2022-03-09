import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

function Expenses({expenses}) {
  return (
    <div>
      {expenses.map((item, index) => (
        <ExpenseItem
        title={expenses[index].title}
        amount={expenses[index].amount}
        date={expenses[index].date}
        />
      ))}

    </div>
  );
}

export default Expenses;
