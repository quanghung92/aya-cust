import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userReducer'
import clientInfo from './reducers/clientInfo'
import menu from './reducers/menu'
import storeData from './reducers/storeData'


const store = configureStore({
    reducer: {
        userReducer,
        clientInfo,
        menu,
        storeData
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
})

export default store