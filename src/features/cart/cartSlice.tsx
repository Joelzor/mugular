import { createSlice } from "@reduxjs/toolkit";
import { CartItemI } from "../../interfaces/CartItem";

interface cartInterface {
  cart: CartItemI[];
  totalItems: number;
  totalAmount: number;
  shippingFee: number;
}

const initialState: cartInterface = {
  cart: [],
  totalItems: 0,
  totalAmount: 0,
  shippingFee: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, amount, product } = action.payload;

      const found = state.cart.find((product) => product.id === id);

      if (found) {
        const temporaryCart = state.cart.map((product) => {
          if (product.id === id) {
            let newAmount = product.amount + amount;
            if (newAmount > product.max) {
              newAmount = product.max;
            }
            return { ...product, amount: newAmount };
          } else {
            return product;
          }
        });

        state.cart = temporaryCart;
      } else {
        const newCartItem: CartItemI = {
          id,
          name: product.name,
          amount,
          image: product.images[0].url,
          price: product.price,
          max: product.stock,
        };

        state.cart = [...state.cart, newCartItem];
      }
    },
  },
});

export default cartSlice.reducer;
export const { addToCart } = cartSlice.actions;
