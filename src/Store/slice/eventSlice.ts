import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { db } from "../../firebase/config";
import { RootState } from "../store";

export interface events {
    id: string | number;
    name: string;
    price: number;
    description: string;
    dateStart: Date;
    dateEnd: Date;
    image: string;
    content: string
}

interface DataState {
    loading: boolean;
    error: string | null;
    data: events[];
}

const initialState: DataState = {
    loading: false,
    error: null,
    data: [],
};

export const fetchAsync = createAsyncThunk('event/fetch', async () => {
    const data = await db.collection('events').get();
    return data.docs.map((doc) => ({ id: doc.id, ...doc.data() } as events));
});

export const fetchOne = createAsyncThunk('event/fetchOne', async (id: string) => {
    const eventDoc = await db.collection('events').doc(id).get();
    const event = eventDoc.data() as events;
    return { ...event, id: eventDoc.id };
})

const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAsync.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message ?? 'Something went wrong';
            })
            .addCase(fetchOne.fulfilled, (state, action) => {
                state.loading = false;
                state.data = [action.payload];
            })
    },
});

export default eventSlice.reducer;

