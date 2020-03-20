export default (state, action) => {
  switch (action.type) {
    case 'LOAD_TRANSACTIONS': {
      const transactions = action.payload;
      return {
        ...state,
        transactions,
      }
    }
    default:
      return state;
  }
}