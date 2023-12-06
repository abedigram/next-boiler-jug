import { configureStore } from '@reduxjs/toolkit'
import {counterSlice} from "@/app/(app)/counter/counterSlice";

export const makeStore = () => {
    return configureStore({
        reducer: {
            counter: counterSlice.reducer
        }
    })
}

/** ts specific exports */
// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']