import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    menuData: [],
    menuLoading: false
}

export const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        setMenu: (state, action) => {
            state.menuData = [...action.payload];
        },
        setMenuLoading: (state, action) => {
            state.menuLoading = action.payload;
        }
    },
})

export const { setMenu, setMenuLoading } = menuSlice.actions

export default menuSlice.reducer