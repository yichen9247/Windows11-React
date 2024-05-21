
import Cookies from 'js-cookie'
import { createSlice } from '@reduxjs/toolkit'

const dominColorValue = Cookies.get('dominColor');
const seconColorValue = Cookies.get('seconColor');

(dominColorValue !== undefined) && (document.body.style.setProperty(`--dominColor`, dominColorValue));
(seconColorValue !== undefined) && (document.body.style.setProperty(`--seconColor`, seconColorValue));

const colorStore = createSlice({
    name: "colorStore",
    
    initialState: {
        dominColor: (dominColorValue === undefined) ? "#ad6eca" : dominColorValue,
        seconColor: (seconColorValue === undefined) ? "#3b91d8" : seconColorValue,
    },

    reducers: {
        setDominColor(state,action) {
            state.dominColor = action.payload;
            Cookies.set('dominColor',action.payload);
            document.body.style.setProperty(`--dominColor`, action.payload);
        },

        setSeconColor(state,action) {
            state.seconColor = action.payload;
            Cookies.set('seconColor',action.payload);
            document.body.style.setProperty(`--seconColor`, action.payload);
        },

        resetDominColor(state) {
            state.dominColor = "#ad6eca";
            Cookies.remove('dominColor');
            document.body.style.setProperty(`--dominColor`, "#ad6eca");
        },

        resetSeconColor(state) {
            Cookies.remove('seconColor');
            state.seconColor = "#3b91d8";
            document.body.style.setProperty(`--seconColor`, "#3b91d8");
        }
    }
});

const colorReducer = colorStore.reducer
const { setDominColor, setSeconColor, resetDominColor, resetSeconColor } = colorStore.actions

export default colorReducer
export { setDominColor, setSeconColor, resetDominColor, resetSeconColor }