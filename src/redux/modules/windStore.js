
import { createSlice } from '@reduxjs/toolkit'

const windStore = createSlice({
    name: "windStore",
    
    initialState: {
        maxMode: false,
        minMode: false,
        windowOpacity: 0,
        windowScale: false,
        windowStatus: false
    },

    reducers: {
        setMaxStatus(state,action) {
            state.maxMode = action.payload;
        },

        setMinStatus(state,action) {
            state.minMode = action.payload;
        },

        setScaleStatus(state,action) {
            state.windowScale = action.payload;
        },

        setWindowStatus(state,action) {
            state.windowStatus = action.payload;
        },

        setOpacityStatus(state,action) {
            state.windowOpacity = action.payload;
        }
    }
});

const windReducer = windStore.reducer
const { setMaxStatus,setMinStatus,setScaleStatus,setOpacityStatus,setWindowStatus } = windStore.actions

export default windReducer
export { setMaxStatus,setMinStatus,setScaleStatus,setOpacityStatus,setWindowStatus }