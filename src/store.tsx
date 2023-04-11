import { configureStore } from "@reduxjs/toolkit";
import sidebarReducer from "./features/sidebar/sidebarSlice";
import productsReducer from "./features/products/productsSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    products: productsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
