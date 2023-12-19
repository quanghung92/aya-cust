import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userData: {
    },
    token: null,
    userLoading: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, actions) => {
            state.userData = actions.payload;
        },
        setUserLoading: (state, actions) => {
            state.userLoading = actions.payload;
        },
        setTokenUser: (state, actions) => {
            state.token = actions.payload;
        },

    },
})

// Action creators are generated for each case reducer function
export const { setUser, setUserLoading, setTokenUser } = userSlice.actions

export default userSlice.reducer