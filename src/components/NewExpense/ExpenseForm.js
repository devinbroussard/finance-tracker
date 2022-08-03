import './ExpenseForm.css';

import React, { useCallback, useState } from 'react';

const ExpenseForm = () => {
    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
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
    const submitHandler = useCallback((event) => {
        // Stops the page from being refreshed after a submit
        event.preventDefault();

        const expenseData = {
            ...userInput,
            date: new Date(userInput.enteredDate)
        };
        
        // Resetting the user input
        setUserInput({
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: ''
        })

        console.log(expenseData);
    }, [userInput]);

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={userInput.enteredTitle} onChange={(event) => inputChangeHandler('enteredTitle', event)} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' placeholder='0.00' min="0.00" step="0.01" value={userInput.enteredAmount} onChange={(event) => inputChangeHandler('enteredAmount', event)} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' value={userInput.enteredDate} onChange={(event) => inputChangeHandler('enteredDate', event)} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;