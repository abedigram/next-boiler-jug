import {configureStore} from '@reduxjs/toolkit'
import {postsSlice} from "@/app/(app)/posts/postsSlice";

export const makeStore = () => {
    return configureStore({
        reducer: {
            posts: postsSlice.reducer
        }
    })
}

/** ts specific exports */
// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']