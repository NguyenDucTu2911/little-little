import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../../firebase/config";
import { error } from "console";

export interface PayCustomer {
    Name: string,
    price: number | string,
    id: string,
    email: string,
    quantity: string,
    date: Date | string
    package: string
    phone: string
    card: string
    Namecard: string
    Datecard: Date | string
    cvv: string

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