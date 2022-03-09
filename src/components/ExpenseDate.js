import "./ExpenseDate.css"

function ExpenseDate({ date }) {
  //Converting the date to text:
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    //Returns a div holding the month, day, and year
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
<div className="expense-date__year">{year}</div>
            <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
