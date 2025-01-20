import { createSlice } from '@reduxjs/toolkit';

const transactionSlice = createSlice({
  name: 'transaction',
  initialState: {
    transactions: [],
    status: null,
  },
  reducers: {
    addTransaction(state, action) {
      state.transactions.push(action.payload);
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { addTransaction, setStatus } = transactionSlice.actions;
export default transactionSlice.reducer;