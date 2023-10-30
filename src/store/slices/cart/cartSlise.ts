import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../store";
import { calcTotalPrice } from "../../../utils/calcTotalPrice";
import { getCartFromLS } from "../../../utils/getCartFromLS";
import { CartItem, ICartSliseState } from "./types";



const initialState: ICartSliseState = getCartFromLS();


const cartSlise = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action: PayloadAction<CartItem>) {
            const findItem = state.items.find((obj) => obj.id === action.payload.id);

            if (findItem) {
                findItem.count++;
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1,
                });
            }
            state.totalPrice = calcTotalPrice(state.items);
        },
        removeItem(state, action) {
            state.items = state.items.filter((obj) => obj.id !== action.payload);
            state.totalPrice = calcTotalPrice(state.items);
        },
        clearItems(state) {
            state.items = []
            state.totalPrice = 0
        },
        minusItem(state, action) {
            const findItem = state.items.find((obj) => obj.id === action.payload);
            if (findItem) {
                findItem.count--;
            }
            state.totalPrice = calcTotalPrice(state.items);
        }
    }
})

export const selectCart = (select: RootState) => select.cart;

export default cartSlise.reducer;

export const { addItem, removeItem, clearItems, minusItem } = cartSlise.actions;

