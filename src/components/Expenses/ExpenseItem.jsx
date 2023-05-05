import React, {useState} from 'react';
import ExpenseDate from '../Expenses/ExpenseDate';
import Card from '../UI/Card'
import './ExpenseItem.css';

const ExpenseItem = (props) => {

    const [title, setTitlr] = useState(props.title);
    const [amount, setAmount] = useState(props.amount);

    const clickHandler = () => {
        setTitlr("Updated");
        console.log(title);
    }

    const amountHandler = () => {
        setAmount("100");
    }

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'> $ {amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
            <button onClick={amountHandler}>Change Amount</button>
        </Card>
    )
}

export default ExpenseItem;