import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../../firebase/config";

export interface Contact {
    id: string | number;
    Name: string;
    Phone: string;
    email: string;
    address: string;
    message: string;
}

interface DataState {
    loading: boolean;
    error: string | null;
    data: Contact[];
}

const initialState: DataState = {
    loading: false,
    error: null,
    data: [],
};

//create contact firebase
export const createAsync = createAsyncThunk('data/create', async (newData: Contact) => {
    const data = await db.collection('users').add(newData);
    return { ...newData } as Contact;
});


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.data.push(action.payload);
            })
    },
});

export default userSlice.reducer;

