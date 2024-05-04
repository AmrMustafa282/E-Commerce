import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  initialState: [],
  name: "cart",
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    deleteItem: (state, action) => {
      state = state.filter((item) => item.id !== action.payload.id);
    },
    clear: (state, action) => {
      state = [];
    },
  },
});
export const { addItem, deleteItem, clear } = cartSlice.actions;
export default cartSlice.reducer;
