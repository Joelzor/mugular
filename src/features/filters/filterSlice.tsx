import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  allProducts: [],
  filteredProducts: [],
  grid: true,
  sort: "price-lowest",
};

export const transferProducts = createAsyncThunk(
  "filters/transferProducts",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();

      return state.products.products;
    } catch (error) {
      console.log(error);
    }
  }
);

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setGridView: (state) => {
      state.grid = true;
    },
    setListView: (state) => {
      state.grid = false;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(transferProducts.fulfilled, (state, action) => {
      state.allProducts = action.payload;
      state.filteredProducts = action.payload;
    });
  },
});

export default filterSlice.reducer;
export const { setSort, setGridView, setListView } = filterSlice.actions;
