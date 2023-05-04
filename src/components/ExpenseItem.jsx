import React from 'react';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';

function ExpenseItem(props) {

    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date} />
            <ExpenseDetails LocationOfExpenditure={props.LocationOfExpenditure} amount={props.amount} title={props.title}/>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <h2>{props.LocationOfExpenditure}</h2>
                <div className='expense-item__price'> $ {props.amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;