import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import "./ExpenseItem.css";

//Takes in a title, amount, and date using props
const ExpenseItem = ({ title, amount, date } /*Deconstructing props*/) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} /*Passing data from the date prop to the ExpenseDate component*/ />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
