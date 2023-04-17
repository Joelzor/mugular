import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalItems: 0,
  totalAmount: 0,
  shippingFee: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export default cartSlice.reducer;
