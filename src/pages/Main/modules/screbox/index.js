/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-useless-concat */

import "./index.css"
import { message } from "antd"
import dateTool from "../../scripts/dates"
import userInfo from "../../scripts/users"
import { useSelector,useDispatch } from "react-redux"
import { useState, useEffect, createRef } from "react"
import avatar from "../../../../image/background-avatar.jpg"
import { setOpacity, setLoginBottom, setScreenLayout } from "../../../../redux/modules/sadeStore"

const ScreenBox = ({ config }) => {

    const dispatch = useDispatch();
    const password = createRef(null);
    const sadeReducer = useSelector( state => state.sadeReducer );
    
    const [timeText, setTime] = useState("00:00");
    const [dateText, setDate] = useState("00月00日 星期日");
    const [messageApi, contextHolder] = message.useMessage();

    const initState = () => {
        dispatch(setOpacity(0));
        dispatch(setLoginBottom(0));
        dispatch(setScreenLayout("-100%"));
        document.querySelector(".login-input").value = "";
    }

    setInterval(() => {
        var date = new dateTool().Date();
        setTime(date.Hours + ":" + date.Min);
        setDate(date.Mouth + "月" + date.Date + "日" + " " + date.Week);
    }, 1000);

    useEffect(() => {
        if (sadeReducer.screenLayout === "-100%") {
            setTimeout(() => document.getElementById("login-input").focus(), 550);
        } else {
            document.addEventListener("keydown", (event) => {
                if (event.key === "Enter") {
                    if (document.getElementById("windows11-screen").style.marginTop === "0px") {
                        dispatch(setLoginBottom(0));
                        dispatch(setScreenLayout("-100%"));
                        setTimeout(() => document.querySelector(".login-input").focus(),500);
                    }
                }
            });
        }
    },[config.top,dispatch,sadeReducer.screenLayout]);

    const loginWindows = (passwordText) => {
        if (document.getElementById("windows11-screen").style.marginTop === "0px") {
            dispatch(setOpacity(1));
            setTimeout(() => {
                if (passwordText !== userInfo.userPassword) {
                    messageApi.open({
                        type: "error",
                        style: {zIndex: 9999},
                        content: "Password verification failed!",
                    });
                    dispatch(setOpacity(0));
                } else {
                    config.onGetDeskTop(passwordText);
                    setTimeout(() => {
                        initState();
                        config.StartScreen();
                        dispatch(setScreenLayout(0));
                        dispatch(setLoginBottom("-100%"));
                    },700);
                    setTimeout(() => {
                        document.getElementById("startup-music").play();
                        document.getElementById("startup-music").volume = 0.65;
                    },800);
                }
            },2000);
        }
    }

    return (
        <>
            <div id="windows11-screen" style={{ marginTop: config.top,display: config.display }} tabIndex={0} onContextMenu={(event) => event.preventDefault()}>
                <div className="screen-content">
                    <div className="screen-box" style={{ marginTop: sadeReducer.screenLayout }}
                        onClick={(event) => {
                            dispatch(setLoginBottom(0));
                            dispatch(setScreenLayout("-100%"));
                            setTimeout(() => document.querySelector(".login-input").focus(),500);
                        }}
                    >
                        <div className="time-box">
                            <span className="screen-time">{timeText}</span>
                            <p className="screen-date">{dateText}</p>
                        </div>
                    </div>

                    <div className="login-box" style={{ bottom: sadeReducer.loginBottom }}>
                        <div className="box-content">
                            <img className="user-avatar" src={avatar} />
                            <span className="user-name">{userInfo.userName}</span>
                            {contextHolder}
                            <div className="button-sheet">
                                <input id="login-input" ref={password} className="login-input" autoComplete="true" placeholder="INPUT YOUR PIN：12345678" type="password" onKeyDown={(event) => {
                                    if (event.key === "Enter") {
                                        let passwordText = password.current.value;
                                        loginWindows(passwordText);
                                    }
                                }} />
                                <button className="button" onClick={() => {
                                    let passwordText = password.current.value;
                                    loginWindows(passwordText);
                                }}>
                                    <svg t="1701572105234" className="icon not-allowTheme" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4393" width="16" height="16"><path d="M273.61724 221.002416 273.61724 221.002416c-8.848529-8.861832-15.504112-18.832927-19.917632-29.913287-4.437056-11.067057-6.655584-22.471804-6.655584-34.175357 0-11.715833 2.218528-23.269983 6.655584-34.662451s11.06808-21.511943 19.917632-30.374798c17.749246-17.723663 38.937824-26.585495 63.641459-26.585495 24.653493 0 45.892213 8.861832 63.591317 26.585495l352.232227 355.086228c8.874111 7.603165 15.205307 17.249873 18.995633 28.966729 3.813862 11.704576 5.384637 23.8942 4.735861 36.544311-0.597611 12.663414-3.464915 25.152866-8.525164 37.491892-5.060249 12.364609-12.014638 22.959921-20.889773 31.80845L400.850016 931.163615c-17.723663 18.371416-38.937824 27.545356-63.591317 27.545356-24.704658 0-45.893236-9.17394-63.641459-27.545356-8.848529-8.849552-15.504112-18.821671-19.917632-29.888727-4.437056-11.06808-6.655584-22.48613-6.655584-34.17638 0-11.715833 2.218528-23.282263 6.655584-34.649148 4.41352-11.392468 11.06808-21.537526 19.917632-30.41266l286.74677-290.511513L273.61724 221.002416 273.61724 221.002416zM273.61724 221.002416" fill="#ffffff" p-id="4394"></path></svg>
                                </button>
                            </div>
                        </div>
                        <svg className="progressRing not-allowTheme" style={{ position: "fixed" ,bottom: "200px", transition: "1s", opacity: sadeReducer.opacity }} height="62" width="62" viewBox="0 0 16 16"><circle cx="8px" cy="8px" r="7px"></circle></svg>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ScreenBox