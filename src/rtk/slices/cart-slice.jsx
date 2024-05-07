import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";
export const cartSlice = createSlice({
  initialState: [],
  name: "Cart",
  reducers: {
    addItem: (state, action) => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Product added to cart",
        showConfirmButton: false,
        timer: 1500,
      });
      state.push(action.payload);
    },
    deleteItem: (state, action) => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Product has been deleted",
        showConfirmButton: false,
        timer: 1500,
      });
      return state.filter((item) => item.id !== action.payload);
    },

    clear: (state, action) => {
      if (state.length) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Cart successfully cleared",
          showConfirmButton: false,
          timer: 1500,
        });
        return [];
      }
    },
  },
});
export const { addItem, deleteItem, clear } = cartSlice.actions;
export default cartSlice.reducer;
