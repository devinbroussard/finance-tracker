import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

function Expenses({expenses}) {
  return (
    <div className='expenses'>
      {expenses.map((item) => (
        <ExpenseItem
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}

    </div>
  );
}

export default Expenses;
