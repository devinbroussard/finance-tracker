import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

//A form used to make new expense items
const NewExpense = () => {

    
    return <div className="new-expense">
        <ExpenseForm />
    </div>
};

export default NewExpense;