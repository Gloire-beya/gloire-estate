import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    error: null,
    loading: false
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true
        },

        signSuccess: (state, action) => {
            state.currentUser = action.payload
            state.loading = false
            state.error = null
        },

        signFailure: (state, action) => {
            state.error = action.payload
            state.loading = false
        },

        updateUserStart: (state) => {
            state.loading = true
        },

        updateUserSuccess: (state, action) => {
            state.currentUser = action.payload
            state.loading = false
            state.error = null
        },

        updateUserFailure: (state, action) => {
            state.error = action.payload
            state.loading = false
        },

        deleteUserStart: (state) => {
            state.loading = true
        },

        deleteUserSuccess: (state) => {
            state.currentUser = null
            state.loading = false
            state.error = null
        },

        deleteUserFailure: (state, actiom) => {
            state.error = actiom.payload
            state.loading = false
        },

        signOutUserStart: (state) => {
            state.loading = true;
        },

        signOutUserSuccess: (state) => {
            state.currentUser = null;
            state.loading = false;
            state.error = null;
        },

        signOutUserFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        }
    }
})

export const {
    signInStart,
    signSuccess,
    signFailure,
    updateUserFailure,
    updateUserStart,
    updateUserSuccess,
    deleteUserFailure,
    deleteUserStart,
    deleteUserSuccess,
    signOutUserFailure,
    signOutUserSuccess,
    signOutUserStart
} = userSlice.actions

export default userSlice.reducer