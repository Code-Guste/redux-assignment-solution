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
      total: 12,
    },
    {
      id: 2,
      title: "Hoodie",
      price: 20,
      description: "Stylish unisex hoodie",
      quantity: 1,
      total: 20,
    },
    {
      id: 3,
      title: "Jeans",
      price: 25,
      description: "Cropped women jeans",
      quantity: 1,
      total: 25,
    },
  ],
  addedItems: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggle: (state) => {
      state.show = !state.show;
    },
    addToCart: (state, action) => {
      const addedItem = state.productList.find(
        (item) => item.id === action.payload
      );
      const existingItem = state.addedItems.find(
        (item) => item.id === action.payload
      );

      if (existingItem) {
        existingItem.quantity++;
        existingItem.total += existingItem.price;
      } else {
        state.addedItems.push(addedItem);
      }
    },

    removeFromCart: (state, action) => {
      const existingItem = state.addedItems.find(
        (item) => item.id === action.payload
      );
      if (existingItem.quantity === 1) {
        state.addedItems = state.addedItems.filter(
          (item) => item.id !== action.payload
        );
      } else {
        existingItem.quantity--;
        existingItem.total -= existingItem.price;
      }
    },
  },
});
export const { toggle, addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
