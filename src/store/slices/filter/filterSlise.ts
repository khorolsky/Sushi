import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../store";
import { IFilterSliseState, Sort, SortPropertyEnum } from "./types";

const initialState: IFilterSliseState = {
    searchValue: '',
    categoryId: 0,
    currentPage: 1,
    sort: {
        name: 'полулярности',
        sortProperty: SortPropertyEnum.PRICE_DESC,
    },
}

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategoryId(state, action: PayloadAction<number>) {
            state.categoryId = action.payload;
        },
        setCurrentPage(state, action: PayloadAction<number>) {
            state.currentPage = action.payload;
        },
        setSort(state, action: PayloadAction<Sort>) {
            state.sort = action.payload;
        },
        setSearchValue(state, action: PayloadAction<string>) {
            state.searchValue = action.payload;
        }
    }
})

export const selectFilter = (state: RootState) => state.filter;

export default filterSlice.reducer;

export const { setCategoryId, setCurrentPage, setSort, setSearchValue } = filterSlice.actions;

