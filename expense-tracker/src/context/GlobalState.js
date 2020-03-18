import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

const initialState = {
  transactions: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const deleteTransaction = () => {
    dispatch({
      type: 'DELETE_TRANSACTION',
    });
  };

  const addTransaction = () => {
    dispatch({
      type: 'ADD_TRANSACTION'
    });
  };

  const loadTransactions = (transactions) => {
    dispatch({
      type: 'LOAD_TRANSACTIONS',
      payload: transactions,
    });
  };

  return (
    <GlobalContext.Provider value={{
      transactions: state.transactions,
      deleteTransaction,
      addTransaction,
      loadTransactions,
    }}>
      {children}
    </GlobalContext.Provider>
  )
};