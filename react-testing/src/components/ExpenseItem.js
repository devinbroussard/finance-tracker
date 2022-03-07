import "./ExpenseItem.css";

//Takes in a title, amount, and date using props
function ExpenseItem({title, amount, date}/*Deconstructing props*/) {
  return (
    <div className="expense-item">
      <div>
        <div>date.toLocalString()</div>
        <div>Year</div>
        <div>Date</div>
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
