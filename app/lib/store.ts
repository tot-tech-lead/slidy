import {configureStore} from "@reduxjs/toolkit";

import burgerReducer from "@/app/lib/features/burger/burger";
import authReducer from "@/app/lib/features/auth/auth"

export const makeStore = () => {
    return configureStore({
        reducer: {
            burger: burgerReducer,
            auth: authReducer
        }
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']