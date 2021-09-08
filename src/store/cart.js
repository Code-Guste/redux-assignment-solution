import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  show: false,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggle: (state) => {
      state.show = !state.show;
    },
  },
});
export const { toggle } = cartSlice.actions;
export default cartSlice.reducer;
