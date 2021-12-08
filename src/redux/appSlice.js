import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "app",
  initialState: {
    cart: {
      products: [],
      total: 0,
    },
    activeSection: "main",
    user: {},
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    toMain: (state) => {
      state.activeSection = "main";
    },
    toDrinks: (state) => {
      state.activeSection = "drinks";
    },
    toPastries: (state) => {
      state.activeSection = "pastries";
    },
    toSandwiches: (state) => {
      state.activeSection = "sandwiches";
    },
    toCheckout: (state) => {
      state.activeSection = "checkout";
    },
    addToCart: (state, action) => {
      state.cart.products.push(action.payload);
      state.cart.total += action.payload.price;
    },
  },
});

export const {
  toDrinks,
  toMain,
  toPastries,
  toSandwiches,
  addToCart,
  toCheckout,
  setUser,
} = slice.actions;

export default slice.reducer;
