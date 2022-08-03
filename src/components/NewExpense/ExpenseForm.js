import './ExpenseForm.css';

import React, { useCallback, useState } from 'react';

const ExpenseForm = () => {
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '0.00',
        enteredDate: '2022-01-01'
    });

    // Handles updating entered input states
    const inputChangeHandler = useCallback((key, event) => {
        // If userInput does not contain the given key, return
        if (!(key in userInput)) return;

        setUserInput({
            ...userInput,
            
            [key]: event.target.value
        });

        console.log(userInput[key]);
    }, [userInput]);

    // Called when the form is submitted
    const submitHandler = (event) => {
        // Stops the page from being refreshed after a submit
        event.preventDefault();

        const expenseData = {
            ...userInput,
            date: new Date(userInput.enteredDate)
        };

        console.log(expenseData);
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' onChange={(event) => inputChangeHandler('enteredTitle', event)} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='text' min="0.01" step="0.01" onChange={(event) => inputChangeHandler('enteredAmount', event)} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' min="2022-01-01" max="2023-12-31" onChange={(event) => inputChangeHandler('enteredDate', event)} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;