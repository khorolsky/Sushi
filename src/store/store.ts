import { configureStore } from "@reduxjs/toolkit";
import sushiSlise from "./slices/sushi/sushiSlise";
import cartSlise from "./slices/cart/cartSlise";
import filterSlise from "./slices/filter/filterSlise";


export const store = configureStore({
    reducer: {
        filter: filterSlise,
        cart: cartSlise,
        sushi: sushiSlise,
    }
})

export type RootState = ReturnType<typeof store.getState>
