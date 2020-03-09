import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export function IncomeExpensesComponent() {
  const { transactions } = useContext(GlobalContext);
  const expense = (transactions
    .map((t) => t.amount)
    .filter((amount) => amount < 0)
    .reduce((acc, amount) => (acc+=amount), 0) * -1).toFixed(2);

  const income = transactions
    .map((t) => t.amount)
    .filter((amount) => amount > 0)
    .reduce((acc, amount) => (acc+=amount), 0).toFixed(2);
  return (
    <>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">{income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">{expense}</p>
        </div>
      </div>
    </>
  )
}