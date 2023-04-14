import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ProductI } from "../../interfaces/Product";

interface SingleProductInterface {
  singleProductLoading: boolean;
  singleProductError: boolean;
  singleProduct: ProductI;
}

const initialState: SingleProductInterface = {
  singleProductLoading: false,
  singleProductError: false,
  singleProduct: {
    category: "",
    id: "",
    description: "",
    featured: false,
    name: "",
    price: 0,
    reviews: 0,
    stars: 0,
    stock: 0,
    images: [],
  },
};

export const getSingleProduct = createAsyncThunk(
  "products/getSingleProduct",
  async (id: string, thunkAPI) => {
    try {
      const response = await axios(
        `http://localhost:8888/.netlify/functions/single-product?id=${id}`
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
      .addCase(getSingleProduct.pending, (state) => {
        state.singleProductLoading = true;
      })
      .addCase(getSingleProduct.fulfilled, (state, action) => {
        state.singleProductLoading = false;
        state.singleProduct = action.payload;
      })
      .addCase(getSingleProduct.rejected, (state) => {
        state.singleProductLoading = false;
        state.singleProductError = true;
      });
  },
});

export default singleProductSlice.reducer;
