import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    loggedIn: false,
    user: null,
    error: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        // LOGIN
        loginUserStart: state => {
            state.isLoading = true
        },
        loginUserSucces: state => { },
        loginUserFailure: state => { },
    
        // REGISTER
        registerUserStart: state => {
            state.isLoading = true
        },
        registerUserSucces: state => { 
            state.isLoading = false
            state.loggedIn = true
        },
        registerUserFailure: state => {
            state.isLoading = false
            state.error = 'error'
         }
    }
})

export const { loginUserStart, registerUserStart, registerUserSucces,  registerUserFailure} = authSlice.actions
export default authSlice.reducer