
import { createSlice } from '@reduxjs/toolkit'

const hookStore = createSlice({
    name: "hookStore",
    
    initialState: {
        sidebox: false,
        datebox: false,
        panelbox: false,
        childbox: false,
        winpanel: false,
    },

    reducers: {
        windowsHook(state,action) {
            switch(action.payload) {
                case "allhook":
                    state.datebox = false;
                    state.sidebox = false;
                    state.panelbox = false;
                    state.childbox = false;
                    state.winpanel = false;
                    break;
                case "sidebox":
                    state.datebox = false;
                    state.panelbox = false;
                    state.childbox = false;
                    state.winpanel = false;
                    state.sidebox = !state.sidebox;
                    break;
                case "datebox":
                    state.sidebox = false;
                    state.panelbox = false;
                    state.childbox = false;
                    state.winpanel = false;
                    state.datebox = !state.datebox;
                    break;
                case "panelbox":
                    state.datebox = false;
                    state.sidebox = false;
                    state.childbox = false;
                    state.winpanel = false;
                    state.panelbox = !state.panelbox;
                    break;
                case "childbox":
                    state.datebox = false;
                    state.panelbox = false;
                    state.sidebox = false;
                    state.winpanel = false;
                    state.childbox = !state.childbox;
                    break;
                case "winpanel":
                    state.datebox = false;
                    state.panelbox = false;
                    state.childbox = false;
                    state.sidebox = false;
                    state.winpanel = !state.winpanel;
                    break;
                default:
                    break;  
            }
        }
    }
});

const hookReducer = hookStore.reducer
const { windowsHook } = hookStore.actions

export { windowsHook }
export default hookReducer
