import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const getProducts = createAsyncThunk(
    'get/getProducts',
    async (arg , {rejectWhithValue}) => {
        try{
            const res = await axios(`http://localhost:8080/products`)
            if (res.status !== 200 ){
                throw new Error('Error 404')
            }
            return res.data
        } catch (err) {
            return rejectWhithValue(err.massege)
        }
    }
)

const products = createSlice({
    name: "products",
    initialState: {
        data: [],
        status: "idle",
        error: null,
        filter: {}
    },
    reducer: {},
    extraReducers: (builder) => {
        builder 
            .addCase(getProducts.pending, (state,action)=> {
                state.status = 'loading'
                state.err = null
            })
            .addCase(getProducts.rejected,(state,action)=> {
                state.status = 'error'
                state.error = action.payload
            })
            .addCase(getProducts.fulfilled, (state, action)=> {
                state.status = 'success'
                state.data = action.payload
            })
    }
})


export default products.reducer