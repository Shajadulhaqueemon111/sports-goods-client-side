/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define types for the product and cart state
interface Product {
  _id: string;
  name: string;
  description: string;
  price: string; // Keep as string
  image: string;
  category: string;
  brand: string;
  stock_quantity: string; // Keep as string
}

interface CartState {
  products: Product[];
  selectedItems: number;
  totalPrice: number;
  tax: number;
  taxRate: number;
  grandTotal: number;
}

// Initial state with proper typing
const initialState: CartState = {
  products: [],
  selectedItems: 0,
  totalPrice: 0,
  tax: 0,
  taxRate: 0.1,
  grandTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const isExist = state.products.find(
        (product) => product._id === action.payload._id
      );

      if (!isExist) {
        state.products.push({ ...action.payload, stock_quantity: "1" });
      }

      state.selectedItems = selectSelectedItems(state);
      state.totalPrice = selectTotalPrice(state);
      state.tax = selectTax(state);
      state.grandTotal = selectGrandTotal(state);
    },

    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; type: "increment" | "decrement" }>
    ) => {
      state.products = state.products.map((product) => {
        if (product._id === action.payload.id) {
          let newQuantity = parseInt(product.stock_quantity); // Parse to int for calculations
          if (action.payload.type === "increment") {
            newQuantity += 1;
          } else if (action.payload.type === "decrement" && newQuantity > 1) {
            newQuantity -= 1;
          }
          return { ...product, stock_quantity: newQuantity.toString() }; // Convert back to string
        }
        return product;
      });

      // Filter out products with quantity <= 0
      state.products = state.products.filter(
        (product) => parseInt(product.stock_quantity) > 0
      );

      state.selectedItems = selectSelectedItems(state);
      state.totalPrice = selectTotalPrice(state);
      state.tax = selectTax(state);
      state.grandTotal = selectGrandTotal(state);
    },

    removeFromCart: (state, action: PayloadAction<{ id: string }>) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload.id
      );

      state.selectedItems = selectSelectedItems(state);
      state.totalPrice = selectTotalPrice(state);
      state.tax = selectTax(state);
      state.grandTotal = selectGrandTotal(state);
    },

    clearCart: (state) => {
      state.products = [];
      state.selectedItems = 0;
      state.totalPrice = 0;
      state.tax = 0;
      state.grandTotal = 0;
    },
  },
});

// Update selectors to use CartState instead of any
export const selectSelectedItems = (state: CartState): number =>
  state.products.reduce(
    (total, product) => total + parseInt(product.stock_quantity),
    0
  );

export const selectTotalPrice = (state: CartState): number =>
  state.products.reduce(
    (total, product) =>
      total + parseFloat(product.price) * parseInt(product.stock_quantity),
    0
  );

export const selectTax = (state: CartState): number =>
  selectTotalPrice(state) * state.taxRate;

export const selectGrandTotal = (state: CartState): number =>
  selectTotalPrice(state) + selectTax(state);

export const { addToCart, updateQuantity, removeFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
