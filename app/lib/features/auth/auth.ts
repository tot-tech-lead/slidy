import {PayloadAction, createSlice, ReducerType} from '@reduxjs/toolkit'

import {RootState} from "@/app/lib/store";

interface AuthState {
    isLogin: boolean,
    data: {
        name?: string,
        surname?: string,
        patronymic?: string,
        email?: string,
        phoneNumber?: string,
        country?: string,
        dateOfBirth?: string,
        username?: string,
        profession?: string,
        role?: string
    }
}

const initialState: AuthState = {
    isLogin: false,
    data: {}
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<object>) => {
            state.data = action.payload
        },
        logIn: state => {
            state.isLogin = true
        },
        logOut: state => {
            state.isLogin = false
        }
    },
})

export const {setData, logIn, logOut} = authSlice.actions

export const selectAuth = (state: RootState) => state.auth

export default authSlice.reducer
