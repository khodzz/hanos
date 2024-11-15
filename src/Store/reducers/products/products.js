import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Асинхронное действие для получения продуктов
export const getProducts = createAsyncThunk(
  "products/getProducts",
  async ( _, rejectWithValue ) => {
    try {
      const res = await axios.get("http://localhost:8080/products");
      if (res.status !== 200) {
        throw new Error("Ошибка 404");
      }
      return res.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// Слайс продуктов
const productsSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    status: "idle",
    error: null,
    filter: {},
  },
  reducers: {}, // Можете добавить обычные редьюсеры сюда при необходимости
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = "error";
        state.error = action.payload || "Произошла неизвестная ошибка";
      })
      
      .addCase(getProducts.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      });
  },
});

export default productsSlice.reducer;
