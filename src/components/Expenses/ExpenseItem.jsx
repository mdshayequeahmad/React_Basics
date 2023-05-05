import React from 'react';
import ExpenseDate from '../Expenses/ExpenseDate';
import Card from '../UI/Card'
import './ExpenseItem.css';

const ExpenseItem = (props) => {

    const clickHandler = () => {
        console.log("button is clicked!");
    }

    const deleteHandler = (e) => {
        e.preventDefault();
        addEventListener("click", () => {
            console.log("Delete button is clicked");
          });
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'> $ {props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
            <button onClick={deleteHandler}>Delete Expense</button>
        </Card>
    )
}

export default ExpenseItem;