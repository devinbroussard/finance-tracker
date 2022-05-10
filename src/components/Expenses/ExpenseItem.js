import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import "./ExpenseItem.css";
import { useCallback } from 'react/cjs/react.production.min';

//Takes in a title, amount, and date using props
const ExpenseItem = ({ initialTitle, amount, date } /*Deconstructing props*/) => {
  /*Setting the default state of this component.
  The "useState" function returns an array that has the state itself, and a function to change the state.
  When states are changed, it tells react to call this function again.*/
  const [title, setTitle] = useState(initialTitle);

  /*It is a convention for event functions to have "handler" at the end
  useCallback uses the same instance of the function with each rerender, increasing performance*/
  const clickedHandler = useCallback(() => {
    setTitle('Updated!');
  }, [title]);

  /**
   * useMemo(): Similar to useCallback, but updates the dependencies automatically
   */

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
