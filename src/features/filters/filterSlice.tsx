import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ProductI } from "../../interfaces/Product";

interface FiltersInterface {
  allProducts: ProductI[];
  filteredProducts: ProductI[];
  grid: boolean;
  sort: string;
  filters: {
    text: string;
    category: string;
    color: string;
    min_price: number;
    max_price: number;
    price: number;
    shipping: boolean;
  };
}

const initialState: FiltersInterface = {
  allProducts: [],
  filteredProducts: [],
  grid: true,
  sort: "price-lowest",
  filters: {
    text: "",
    category: "all",
    color: "all",
    min_price: 0,
    max_price: 0,
    price: 0,
    shipping: false,
  },
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
    sortItems: (state) => {
      console.log("sorting items");
      let tempProducts = [...state.filteredProducts];

      if (state.sort === "price-lowest") {
        tempProducts = tempProducts.sort((a, b) => a.price - b.price);
      }

      if (state.sort === "price-highest") {
        tempProducts = tempProducts.sort((a, b) => b.price - a.price);
      }

      if (state.sort === "name-a") {
        tempProducts = tempProducts.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      }

      if (state.sort === "name-z") {
        tempProducts = tempProducts.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      }

      state.filteredProducts = tempProducts;
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
export const { setSort, setGridView, setListView, sortItems } =
  filterSlice.actions;
