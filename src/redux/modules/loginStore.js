
import { createSlice } from '@reduxjs/toolkit'

const loginStore = createSlice({
    name: "loginStore",
    
    initialState: {
        opacity: 0,
        imgOpacity: 1,
        topValue: "0px",
        layoutClass: "layout"
    },

    reducers: {
        setOpacity(state,action) {
            state.opacity = action.payload;
        },

        setImgOpacity(state,action) {
            state.imgOpacity = action.payload;
        },

        setTopValue(state,action) {
            state.topValue = action.payload;
        },

        setLayoutClass(state,action) {
            state.layoutClass = action.payload;
        },
    }
});

const loginReducer = loginStore.reducer
const { setOpacity,setImgOpacity,setTopValue,setLayoutClass } = loginStore.actions

export default loginReducer
export { setOpacity,setImgOpacity,setTopValue,setLayoutClass }