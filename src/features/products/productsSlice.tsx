import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ProductI, ProductListI } from "../../interfaces/Product";

interface ProductsInterface {
  productsLoading: boolean;
  productsError: boolean;
  products: ProductListI[];
  featuredProducts: ProductListI[];
}

const initialState: ProductsInterface = {
  productsLoading: false,
  productsError: false,
  products: [],
  featuredProducts: [],
};

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async (_, thunkAPI) => {
    try {
      const response = await axios(
        "http://localhost:8888/.netlify/functions/products"
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.productsLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.productsLoading = false;
        state.products = action.payload;
        state.featuredProducts = action.payload.filter(
          (product: { featured: boolean }) => product.featured === true
        );
      })
      .addCase(getProducts.rejected, (state) => {
        state.productsLoading = false;
        state.productsError = true;
      });
  },
});

export default productsSlice.reducer;
