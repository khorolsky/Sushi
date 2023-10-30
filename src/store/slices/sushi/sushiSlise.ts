import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios";
import { ISushiSliceState, Sushi } from "./types";

const initialState: ISushiSliceState = {
    items: [],
    status: 'loading',
}


export const fetchSushi = createAsyncThunk<Sushi[], Record<string, string>>('pizza/fetchSushiStatus', async (params) => {
    const {
        sortBy,
        order,
        category,
        search,
        currentPage
    } = params;
    const { data } = await axios.get<Sushi[]>(`https://6529381055b137ddc83e6722.mockapi.io/pizzza?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`);
    return data;
});


const sushiSlice = createSlice({
    name: 'sushi',
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<Sushi[]>) {
            state.items = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSushi.pending, (state) => {
                state.status = 'loading';
                state.items = [];
            })
            .addCase(fetchSushi.fulfilled, (state, action) => {
                state.items = action.payload;
                state.status = 'success';
            })
            .addCase(fetchSushi.rejected, (state) => {
                state.status = 'error';
                state.items = [];
            });
    }

})



export default sushiSlice.reducer;

export const { setItems } = sushiSlice.actions;

