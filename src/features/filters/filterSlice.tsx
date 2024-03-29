import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ProductListI, ProductI } from "../../interfaces/Product";
import { RootState } from "../../store";

interface FiltersInterface {
  allProducts: ProductListI[];
  filteredProducts: ProductListI[];
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
  grid: false,
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

      // @ts-ignore
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
    updateFilters: (state, action) => {
      const { name, value } = action.payload;
      // @ts-ignore
      // only ignoring for now until I learn more TS
      state.filters[name] = value;
    },
    filterProducts: (state) => {
      const {
        allProducts,
        filters: { text, category, price, shipping },
      } = state;

      let tempProducts = [...allProducts];

      if (text) {
        tempProducts = tempProducts.filter((product) => {
          return product.name.toLowerCase().includes(text.toLowerCase());
        });
      }

      if (category !== "all") {
        tempProducts = tempProducts.filter((product) => {
          return product.category === category;
        });
      }

      tempProducts = tempProducts.filter((product) => {
        return product.price <= price;
      });

      if (shipping) {
        tempProducts = tempProducts.filter((product) => {
          return product.shipping === true;
        });
      }

      state.filteredProducts = tempProducts;
    },
    clearFilters: (state) => {
      state.filters.text = "";
      state.filters.category = "all";
      state.filters.price = state.filters.max_price;
      state.filters.shipping = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(transferProducts.fulfilled, (state, action) => {
      state.allProducts = action.payload;
      state.filteredProducts = action.payload;

      const prices = action.payload.map(
        (product: ProductListI) => product.price
      );
      state.filters.max_price = Math.max(...prices);
      state.filters.price = Math.max(...prices);
    });
  },
});

export default filterSlice.reducer;
export const {
  setSort,
  setGridView,
  setListView,
  sortItems,
  updateFilters,
  filterProducts,
  clearFilters,
} = filterSlice.actions;
