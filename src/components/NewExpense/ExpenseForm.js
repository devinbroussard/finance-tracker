import React, { useState } from 'react';
import { useCallback } from 'react/cjs/react.production.min';
import './ExpenseForm.css';

const ExpenseForm = () => {
    //Creating states that store default values for the expense item data
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('0.00');
    const [enteredDate, setEnteredDate] = useState("2022-01-01");

    //Creating event handlers that are called when input is changed
    //The "event" property is a default one that stores the data of the event
    const titleChangeHandler = (event) => {
        //"event.target.value" returns the current value of the input after the change
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    return <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='text' min="0.01" step="0.01" onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='date' min="2022-01-01" max="2023-12-31" onChange={dateChangeHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;