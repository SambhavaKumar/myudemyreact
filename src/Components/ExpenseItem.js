import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from './ExpenseDate';


function ExpenseItem({date,title,amount }) {
  // const expenseDate=new Date(2022,1,20);
  // const expenseTitle='Car Insurance';
  // const expenseAmount=256.63;

  

  return (
    <div className="expense-item">
      <ExpenseDate date={date}/>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__Price">${amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
