import { createSlice } from "@reduxjs/toolkit";
import { CartItemI } from "../../interfaces/CartItem";

interface cartInterface {
  cart: CartItemI[];
  totalItems: number;
  totalAmount: number;
  shippingFee: number;
}

const getLocalStorage = () => {
  let cart = localStorage.getItem("cart");

  if (cart) {
    return JSON.parse(cart);
  } else {
    return [];
  }
};

const initialState: cartInterface = {
  cart: getLocalStorage(),
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
    toggleAmounts: (state, action) => {
      const { id, type } = action.payload;

      const temporaryCart = state.cart.map((cartItem) => {
        if (cartItem.id === id) {
          if (type === "increase") {
            let newAmount = cartItem.amount + 1;
            if (newAmount > cartItem.max) {
              newAmount = cartItem.max;
            }
            return { ...cartItem, amount: newAmount };
          }

          if (type === "decrease") {
            let newAmount = cartItem.amount - 1;
            if (newAmount < 1) {
              newAmount = 1;
            }
            return { ...cartItem, amount: newAmount };
          }
        } else {
          return cartItem;
        }
      });

      state.cart = temporaryCart as CartItemI[];
    },
    deleteCartItem: (state, action) => {
      state.cart = state.cart.filter(
        (cartItem) => cartItem.id !== action.payload
      );
    },
    clearCart: (state) => {
      state.cart = [];
    },
    calculateTotals: (state) => {
      const { totalItems, totalAmount } = state.cart.reduce(
        (total, cartItem) => {
          const { amount, price } = cartItem;
          total.totalItems += amount;
          total.totalAmount += price * amount;

          return total;
        },
        {
          totalItems: 0,
          totalAmount: 0,
        }
      );
      state.totalItems = totalItems;
      state.totalAmount = totalAmount;
    },
  },
});

export default cartSlice.reducer;
export const {
  addToCart,
  toggleAmounts,
  deleteCartItem,
  clearCart,
  calculateTotals,
} = cartSlice.actions;
