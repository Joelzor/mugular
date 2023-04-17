import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./features/sidebar/sidebarSlice";
import productsReducer from "./features/products/productsSlice";
import singleProductReducer from "./features/products/singleProductSlice";
import filterReducer from "./features/filters/filterSlice";
import cartReducer from "./features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    products: productsReducer,
    singleProduct: singleProductReducer,
    filters: filterReducer,
    cart: cartReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
