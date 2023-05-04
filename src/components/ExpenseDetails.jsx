import React from 'react'

function ExpenseDetails(props) {
  return (
    <div>
      <div> $ {props.amount}</div>
      <div>{props.LocationOfExpenditure}</div>
      <div>{props.title}</div>
    </div>
  )
}

export default ExpenseDetails;