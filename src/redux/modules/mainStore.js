
import Cookies from 'js-cookie'
import { createSlice } from '@reduxjs/toolkit'
import ThemeTool from "../../pages/Main/themes"
import darkBackground from "../../image/wallpaper/dark/img0.jpg"
import lighBackground from "../../image/wallpaper/default/background-02.jpg"
const darkTheme = ThemeTool.darkTheme,lightTheme = ThemeTool.lightTheme;

window.addEventListener('resize',(event) => {  
    console.log('窗口大小已经改变，新的视口大小为：' + window.innerWidth + 'x' + window.innerHeight);  
});

const mainStore = createSlice({
    name: "mainStore",

    initialState: {
        hookFocus: null,
        mainStatus: false,
        startAlert: false,
        thisOpened: false,
        screenDisplay: "none",
        darkThemeStatus: false,
        batteryThemeStatus: false
    },

    reducers: {
        setHookFocus(state,action) {
            state.hookFocus = action.payload;
        },

        setMainStatus(state,action) {
            state.mainStatus = action.payload;
        },

        setStartAlert(state,action) {
            state.startAlert = action.payload;
        },

        setThisOpened(state,action) {
            state.thisOpened = action.payload;
        },

        setScreenDisplay(state,action) {
            state.screenDisplay = action.payload;
        },

        setDarkThemeStatus(state,action) {
            if (action.payload) {
                Cookies.set('darktheme',true);
                for(let i in darkTheme) {
                    document.getElementById("frameelement-main").style.setProperty(`--${darkTheme[i].name}`, darkTheme[i].color);
                }
                document.getElementById("root").style.setProperty(`--background`, `url(${darkBackground})`);
            } else {
                Cookies.set('darktheme',false);
                for(let i in lightTheme) {
                    document.getElementById("frameelement-main").style.setProperty(`--${lightTheme[i].name}`, lightTheme[i].color);
                }
                document.getElementById("root").style.setProperty(`--background`, `url(${lighBackground})`);
            }
            state.darkThemeStatus = action.payload;
        },

        setBatteryThemeStatus(state,action) {
            state.batteryThemeStatus = action.payload;
            Cookies.set('batterytheme',action.payload);
        }
    }
});

const mainReducer = mainStore.reducer
const { setHookFocus,setMainStatus,setStartAlert,setThisOpened,setScreenDisplay,setDarkThemeStatus,setBatteryThemeStatus } = mainStore.actions

export default mainReducer
export { setHookFocus,setMainStatus,setStartAlert,setThisOpened,setScreenDisplay,setDarkThemeStatus,setBatteryThemeStatus }