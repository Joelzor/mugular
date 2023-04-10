import { createSlice } from "@reduxjs/toolkit";

interface SidebarInterface {
  isSidebarOpen: boolean;
}

const initialState: SidebarInterface = {
  isSidebarOpen: false,
};

const sidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    openSidebar: (state) => {
      state.isSidebarOpen = true;
    },
    closeSidebar: (state) => {
      state.isSidebarOpen = false;
    },
  },
});

export default sidebarSlice.reducer;
export const { openSidebar, closeSidebar } = sidebarSlice.actions;
