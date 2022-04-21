import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card'
import './Expenses.css';

const Expenses = ({expenses}) => {
  return (
    <Card className='expenses'>
      {expenses.map((item) => (
        <ExpenseItem
          initialTitle={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
