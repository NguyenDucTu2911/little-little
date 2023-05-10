import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../../firebase/config";
import { error } from "console";

export interface PayCustomer {
    Name: string,
    price: number | string,
    id: string,
    email: string,
    quantity: number,
    date: Date | string
    package: string
    phone: number
    card: number
    Namecard: string
    Datecard: Date
    cvv: Number

}


interface DataState {
    loading: boolean;
    error: null;
    data: PayCustomer[];
}

const initialState: DataState = {
    loading: false,
    error: null,
    data: []
}


export const addPay = createAsyncThunk("pay/addPay", async (newData: PayCustomer) => {
    await db.collection("ticker").add(newData)
    return { ...newData } as PayCustomer
})

export const fetchPay = createAsyncThunk("pay/fetchPay", async () => {

})



const paySlice = createSlice({
    name: "pay",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addPay.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addPay.fulfilled, (state, action) => {
                state.loading = false;
                state.data = [action.payload];
            })
    }
})

export default paySlice.reducer;