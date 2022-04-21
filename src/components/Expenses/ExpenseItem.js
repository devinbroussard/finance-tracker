import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import "./ExpenseItem.css";

//Takes in a title, amount, and date using props
const ExpenseItem = ({ title, amount, date } /*Deconstructing props*/) => {
  /*Setting the default state of this component.
  The "useState" function returns an array that has the state itself, and a function to change the state.
  When states are changed, it tells react to call this function again.*/
  const [defaultState, setTitle] = useState(title);

  /*It is a convention for event function to have "handler" at the end*/
  const clickedHandler = () => {
    console.log('Clicked")')
    title = 'Updated';
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} /*Passing data from the date prop to the ExpenseDate component*/ />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      {/*"on" props are event listeners that execute code whenever the event occurs*/}
      <button onClick={clickedHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
