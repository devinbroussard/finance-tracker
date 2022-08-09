import './NewExpense.css';

import { React, useCallback } from 'react';

import ExpenseForm from './ExpenseForm';

//A form used to make new expense items
const NewExpense = ({onAddExpense}) => {
    const onSaveExpenseDataHander = useCallback((enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }

        onAddExpense(expenseData);
    }, [onAddExpense]);

    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={onSaveExpenseDataHander} />
    </div>
};

export default NewExpense;