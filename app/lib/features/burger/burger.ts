import {createSlice, ReducerType} from '@reduxjs/toolkit'

import {RootState} from "@/app/lib/store";


interface BurgerState {
    isShown: boolean
}

const initialState: BurgerState = {
    isShown: false,
}

export const burgerSlice = createSlice({
    name: 'burger',
    initialState,
    reducers: {
        show: state => {
            state.isShown = true
        },
        hide: state => {
            state.isShown = false
        },
    },
})

export const { show, hide } = burgerSlice.actions

export const selectBurger = (state: RootState) => state.burger.isShown

export default burgerSlice.reducer<ReducerType>
