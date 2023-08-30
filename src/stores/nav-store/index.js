import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nav: {}
}

export const { reducer, actions } = createSlice({
    name: 'nav',
    initialState,
    reducers: {}
})