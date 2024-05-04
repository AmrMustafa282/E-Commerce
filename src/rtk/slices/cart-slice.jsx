import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  initialState: [],
  name: "Cart",
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    deleteItem: (state, action) => {
      state.products = state.filter((item) => item.id !== action.payload.id);
    },
    clear: (state, action) => {
      state.products = [];
    },
  },
});
export const { addItem, deleteItem, clear } = cartSlice.actions;
export default cartSlice.reducer;
