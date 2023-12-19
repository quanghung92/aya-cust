import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    clientInfo: {}
}

export const clientInfoSlice = createSlice({
    name: 'clientInfo',
    initialState,
    reducers: {
        setClientInfo: (state, actions) => {
            state.clientInfo = actions.payload;
        }

    },
})

// Action creators are generated for each case reducer function
export const { setClientInfo } = clientInfoSlice.actions

export default clientInfoSlice.reducer