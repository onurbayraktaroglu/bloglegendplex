import { configureStore } from "@reduxjs/toolkit";
import { reducer as navReducer } from "./nav-store";

export const store = configureStore({
    reducer: {
        nav: navReducer,
    }
})