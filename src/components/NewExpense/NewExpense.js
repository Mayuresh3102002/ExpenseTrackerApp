import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing, setEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData);
    setEditing(false);
  };

  const EditingExpenses = () => {
    setEditing(true);
  };
  const stopEditing = () => {
    setEditing(false);
  };

  return (
    <div className='new-expense'>
      {!isEditing && <button onClick={EditingExpenses}>Add New Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditing} />}
    </div>
  );
};

export default NewExpense;