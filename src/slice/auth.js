import { createSlice } from '@reduxjs/toolkit'
import {setItem} from '../helpers/persistence-storage'

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
        signUserStart: state => {
            state.isLoading = true
        },
        signUserSuccess : (state, action) => {
            state.isLoading = false
            state.loggedIn = true
            state.user = action.payload
            setItem('token', action.payload.token)
        },
        signUserFailure: (state, action) => {
            state.isLoading = false
            state.error = action.payload
        },
        logoutUser : state => {
            state.loggedIn = false
            state.user = null
        }
    }
})

export const { signUserStart, signUserSuccess, signUserFailure, logoutUser} = authSlice.actions
export default authSlice.reducer