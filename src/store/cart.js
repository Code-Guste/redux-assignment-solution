import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  show: false,
  productList: [
    {
      id: 1,
      title: "T-shirt",
      price: 12,
      description: "Oversized t-shirt",
      quantity: 1,
    },
    {
      id: 2,
      title: "Hoodie",
      price: 20,
      description: "Stylish unisex hoodie",
      quantity: 1,
    },
    {
      id: 3,
      title: "Jeans",
      price: 25,
      description: "Cropped women jeans",
      quantity: 1,
    },
  ],
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
