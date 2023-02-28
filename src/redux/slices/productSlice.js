import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../api/axios";
export const getProducts = createAsyncThunk(
  "productList/getProducts",
  async () => {
    const response = await axios.get("/products/get");
    return response.data;
  }
);

export const addProduct = createAsyncThunk(
  "productList/addProduct",
  async (product) => {
    const response = await axios.post("/products/add", product);
    return response.data;
  }
);

export const deleteProducts = createAsyncThunk(
  "productList/deleteProducts",
  async (ids) => {
    const response = await axios.post(`/products/delete`, ids);
    return response.status;
  }
);
const productSlice = createSlice({
  name: "productList",
  initialState: {
    products: [],
    status: "idle", //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addProduct.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(deleteProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(deleteProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const selectProductState = (state) => state.productList.products;
export const selectStatusState = (state) => state.productList.status;
export const selectErrorState = (state) => state.productList.error;

export default productSlice.reducer;
