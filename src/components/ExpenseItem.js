import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

//Takes in a title, amount, and date using props
function ExpenseItem({ title, amount, date } /*Deconstructing props*/) {
  return (
    <div className="expense-item">
      <ExpenseDate date={date} /*Passing data from the date prop to the ExpenseDate component*/ />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
