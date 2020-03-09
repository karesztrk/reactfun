import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

export function AddTransactionComponent() {
  const { addTransaction } = useContext(GlobalContext);
  const [ text, setText ] = useState('');
  const [ amount, setAmount ] = useState(0);

  const onTextChange = (e) => setText(e.target.value);
  const onAmountChange = (e) => setAmount(e.target.value);

  const onAddClick = () => {
    const id = Math.floor(Math.random() * 1000000);
    const transactionAmount = Number(amount);
    addTransaction({
      id,
      text,
      amount: transactionAmount,
    });
    setText('');
    setAmount(0);
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <div className="form-control">
        <label htmlFor="text">Text</label>
        <input type="text" id="text" value={text} onChange={onTextChange} placeholder="Enter text..."/>
      </div>
      <div className="form-control">
        <label htmlFor="amount"
        >Amount <br/>
          (negative - expense, positive - income)</label
        >
        <input type="number" id="amount" value={amount} onChange={onAmountChange} placeholder="Enter amount..."/>
      </div>
      <button className="btn" onClick={onAddClick}>Add transaction</button>
    </>
  )
}