import React from 'react'
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

export default function ExpensesList(props) {


    // let expensesContant=<p>No data found in this year</p>
    if (props.items.length===0) {
        return <h2 className='expenses-list__fallback'>Found No Expenses</h2>
    }

  return (
    <div>
      <ul  className='expenses-list'>
        { props.items.map((expense) => < ExpenseItem
        key={expense.id}
        title={expense.title} 
         amount={expense.amount} 
          date={expense.date} />)}

      </ul>
    </div>
  )
}
