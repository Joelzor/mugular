import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface SingleProductInterface {
  singleProductLoading: boolean;
  singleProductError: boolean;
  singleProduct: {};
}

const initialState: SingleProductInterface = {
  singleProductLoading: false,
  singleProductError: false,
  singleProduct: {},
};

export const getProducts = createAsyncThunk(
  "products/getSingleProduct",
  async (id, thunkAPI) => {
    try {
      const response = await axios(
        `http://localhost:8888/.netlify/functions/single-product${id}`
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const singleProductSlice = createSlice({
  name: "single product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.singleProductLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.singleProductLoading = false;
        state.singleProduct = action.payload;
      })
      .addCase(getProducts.rejected, (state) => {
        state.singleProductLoading = false;
        state.singleProductError = true;
      });
  },
});

export default singleProductSlice.reducer;
