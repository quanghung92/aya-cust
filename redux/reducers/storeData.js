import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    upComming: []

}

export const storeDataSlice = createSlice({
    name: 'storeData',
    initialState,
    reducers: {
        setUpComming: (state, actions) => {
            state.upComming = actions.payload;
        }
    },
})

// Action creators are generated for each case reducer function
export const { setUpComming } = storeDataSlice.actions

export default storeDataSlice.reducer