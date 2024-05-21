
import { createSlice } from '@reduxjs/toolkit'

const sadeStore = createSlice({
    name: "sadeStore",
    
    initialState: {
        opacity: 0,
        screenLayout: 0,
        loginBottom: "-100%"
    },

    reducers: {
        setOpacity(state,action) {
            state.opacity = action.payload;
        },

        setLoginBottom(state,action) {
            state.loginBottom = action.payload;
        },

        setScreenLayout(state,action) {
            state.screenLayout = action.payload;
        }
    }
});

const sadeReducer = sadeStore.reducer
const { setOpacity,setLoginBottom,setScreenLayout } = sadeStore.actions

export default sadeReducer
export { setOpacity,setLoginBottom,setScreenLayout }