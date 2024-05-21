
/**
 * author: Hua
 * Layout: MainLayout
 */

import "./index.css"
import Cookies from 'js-cookie'
import LoginLayout from "../Login"
import Hooks from "./scripts/hooks"
import userInfo from "./scripts/users"
import version from "./scripts/version"
import DeskTop from "./modules/desktop"
import Datebox from "./modules/datebox"
import Taskbar from "./modules/taskbarx"
import SideBox from "./modules/sidlebox"
import WinPanel from "./modules/panebox"
import PanelBox from './modules/switchox'
import ChildBox from "./modules/aboubox"
import ScreenBox from "./modules/screbox"
import { useState, useEffect } from "react"
import CreateWindow from "./modules/WindowAPI"
import { SmileOutlined } from '@ant-design/icons'
import { notification, Modal, Button } from "antd"

import StartUpMusic from "../../media/startup.mp3"
import Windows11Layout from "./application/windows11"
import deskappIcon10 from "../../image/icon/home.png"

import { useSelector, useDispatch } from "react-redux"
import { windowsHook } from "../../redux/modules/hookStore"
import { setMaxStatus, setMinStatus, setScaleStatus, setOpacityStatus } from "../../redux/modules/windStore"
import { setMainStatus, setStartAlert, setThisOpened, setScreenDisplay, setDarkThemeStatus, setBatteryThemeStatus } from "../../redux/modules/mainStore"

const MainLayout = () => {

    const dispatch = useDispatch();
    const cookieValue = Cookies.get('version');
    const [windowInfo, setWindowInfo] = useState(null);
    const [minH5Status, setMinH5Status] = useState(false);
    const [minMaxStatus, setMinMaxStatus] = useState(false);
    const [screenStatus, setScreenStatus] = useState(false);
    const [windowStatus, setWindowStatus] = useState(false);
    
    const hookReducer = useSelector( state => state.hookReducer );
    const mainReducer = useSelector( state => state.mainReducer );
    const windReducer = useSelector( state => state.windReducer );
    const darkThemeChange = (status) => dispatch(setDarkThemeStatus(status));
    const [api, contextHolder] = notification.useNotification({ stack: true,bottom: "10%"});
    
    const openNotification = (placement,title,content) => {
        api.info({
            duration: 3,
            message: title,
            closeIcon: false,
            description: content,
            placement: placement,
            icon: <SmileOutlined style={{ color: '#108ee9' }} />,
        });
    };

    const switchChange = (mode,status) => {
        switch (mode) {
            case "darkTheme":
                darkThemeChange(status);
                break;
            case "batteryTheme":
                dispatch(setBatteryThemeStatus(status));
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        const darkCookie = Cookies.get('darktheme');
        const wallCookie = Cookies.get('wallpaper');
        darkCookie === 'true' ? dispatch(setDarkThemeStatus(true)) : dispatch(setDarkThemeStatus(false));
        wallCookie !== undefined && document.getElementById("root").style.setProperty(`--background`, `url(${wallCookie})`);
    },[dispatch]);

    const taskBarDom = (task) => {
        windowStatus ? (document.getElementById("windows11-" + task).style.zIndex = 4) : (document.getElementById("windows11-" + task).style.zIndex = 2);
        dispatch(windowsHook(task));
    };

    const onDeskTopScreen = (password) => {
        if (!screenStatus) {
            taskBarDom("winpanel");
            dispatch(setThisOpened(false));
            dispatch(setScreenDisplay("block"));
            setTimeout(() => setScreenStatus(!screenStatus), 100);
        } else {
            dispatch(setThisOpened(true));
            setScreenStatus(!screenStatus);
            setTimeout(() => dispatch(setScreenDisplay("none")), 800);
            screenStatus && document.getElementById("startup-music").play();
            screenStatus && setTimeout(() => openNotification("bottomRight",`${userInfo.userName} 欢迎回来！`,"年纪从来不是阻碍人进步的借口。当你学会一项新技能，或许你会发现，你扩展的不仅是眼界，更是自己人生的边界。"),500);
            autoStartWindow();
            setTimeout(() => {
                if (cookieValue !== version.version) {
                    Cookies.set('version',version.version);
                    openNotification("bottomRight",version.verslog);
                }
            },3000);
        }
    };

    /**
     * @param { * } info
     * @name initApplication
     * @description 初始Application窗口 
     */
    const initApplication = (info) => {
        setMinH5Status(false);
        setMinMaxStatus(false);
        dispatch(windowsHook("allhook"));
    }

    /**
     * @param { * } info
     * @name openApplication
     * @description 打开Application窗口 
     */
    const openApplication = (info) => {
        setTimeout(() => dispatch(setOpacityStatus(1)),50);
        dispatch(setScaleStatus(true));
        setWindowStatus(true);
    }

    /**
     * @param { * } info
     * @name toggleApplication
     * @description 切换Application窗口 
     */
    const toggleApplication = (info) => {
        onApplicationClose();
        setTimeout(() => {
            if (info.maxDefault && info.ish5) {
                setWindowInfo({...windowInfo,ish5: false});
                dispatch(setMaxStatus(true));
                openApplication();
                dispatch(setScaleStatus(!windReducer.windowScale));
                setTimeout(() => dispatch(setScaleStatus(false)),10);
                setTimeout(() => setWindowInfo(info),500);
            } else {
                dispatch(setMaxStatus(info.maxDefault));
                openApplication();
                setTimeout(() => dispatch(setScaleStatus(false)),10);
                setWindowInfo(info);
            }
        },500);
    }

    /**
     * @param { * } info
     * @name onApplicationClose
     * @description 关闭Application窗口 
     */
    const onApplicationClose = (task) => {
        if (windowStatus) {
            windowInfo.ish5 && setWindowInfo({...windowInfo,ish5: false});
            initApplication();
            setTimeout(() => {
                dispatch(setScaleStatus(true));
                dispatch(setOpacityStatus(0));
                setTimeout(() => {
                    dispatch(setMinStatus(false));
                    dispatch(setMaxStatus(false));
                    setWindowInfo(null);
                    setWindowStatus(!windowStatus);
                },200);
            },50);
        }
    }

    /**
     * @param { * } info
     * @name onApplicationClick
     * @description ApplicationAPI 
     */
    const onApplicationClick = (info) => {
        initApplication();
        if (!windowStatus) {
            if (info.maxDefault && info.ish5) {
                setWindowInfo({...windowInfo,ish5: false});
                dispatch(setMaxStatus(true));
                openApplication();
                dispatch(setScaleStatus(!windReducer.windowScale));
                setTimeout(() => dispatch(setScaleStatus(false)),10);
                setTimeout(() => setWindowInfo(info),500);
            } else {
                dispatch(setMaxStatus(info.maxDefault));
                openApplication();
                setTimeout(() => dispatch(setScaleStatus(false)),10);
                setWindowInfo(info);
            }
        } else {
            if (!windReducer.minMode) {
                toggleApplication(info);
            } else {
                info.id === windowInfo.id ? onWindowHeadMoudle("min") : toggleApplication(info);
            }
        }
    }

    const clearLayoutFloat = () => {
        document.querySelector(".windows11-window").style.top = "unset"; 
        document.querySelector(".windows11-window").style.left = "unset";
    }

    const onWindowHeadMoudle = (mode) => {
        clearLayoutFloat();
        if (mode === "max") {
            if (windowInfo.ish5) {
                setWindowInfo({...windowInfo,ish5: false});
                dispatch(setMaxStatus(!windReducer.maxMode));
                setTimeout(() => setWindowInfo({...windowInfo,ish5: true}),500);
            } else {
                dispatch(setMaxStatus(!windReducer.maxMode));
            }
        } else 
        if (mode === "min") {
            if (!windReducer.minMode) {
                windowInfo.ish5 && setMinH5Status(true);
                windowInfo.ish5 && setWindowInfo({...windowInfo,ish5: false});
                dispatch(setOpacityStatus(0));
                dispatch(setScaleStatus(true));
                windReducer.maxMode && setMinMaxStatus(true);
                windReducer.maxMode && dispatch(setMaxStatus(false));
                setTimeout(() => dispatch(setMinStatus(!windReducer.minMode)),500);
            } else {
                dispatch(setMinStatus(!windReducer.minMode));
                setTimeout(() => {
                    dispatch(setOpacityStatus(1));
                    dispatch(setScaleStatus(false));
                },100);
                minH5Status && setMinH5Status(false);
                minMaxStatus && setMinMaxStatus(false);
                minMaxStatus && dispatch(setMaxStatus(true));
                minH5Status && setTimeout(() => setWindowInfo({...windowInfo,ish5: true}),500);
            }
        }
    };

    const windowsLogin = () => {
        setScreenStatus(true);
        dispatch(setScreenDisplay(true));
        setTimeout(() => dispatch(setMainStatus(true)),200);
    };

    const StartUpMedia = ({ music }) => {
        return (
            <audio src={StartUpMusic} id="startup-music"/>
        )
    }
    const StartScreen = () => console.log("%cWindows11 Ready! Power By Hua", "color: lightblue; font-size: x-large");
    const autoStartWindow = () => onApplicationClick({ id: 100, ish5: false, width: "900px", height: "550px", maxDefault: false, icon: deskappIcon10, name: "关于Windows11", template: <Windows11Layout/> });

    const StartAlertModel = ({ opend }) => {
        return (
            <Modal title="关于本项目" open={mainReducer.startAlert} closeIcon={false} centered footer={[
                <Button key="submit" type="primary" onClick={() => dispatch(setStartAlert(false))}>好的，我明白了</Button>,
            ]}>
                <p>Windows11 - React 是一个开源项目，旨在使用 React、CSS 和 JavaScript 等标准 Web 技术在 Web 上复制 Windows 11 桌面体验</p>
                <p>创新体验，引领未来，欢迎来到Windows 11的全新网页版。在这里，我们为您打造了一款前所未有的网络浏览体验。</p>
                <p>通过我们独特的用户界面，您将享受到简洁、直观、高效的操作体验。全新的设计理念，使得我们在提供强大功能的同时，保持了操作的便捷性和直观性。</p>
            </Modal>
        )
    }

    const desktopInfo = {
        windowStatus: windowStatus,
        maxMode: windReducer.maxMode,
        onApplication: onApplicationClick,
        thisOpened: mainReducer.thisOpened
    }

    const loginlayoutInfo = {
        onLogin: windowsLogin,
        display: mainReducer.mainStatus ? "none" : "block"
    }

    const datelayoutInfo = {
        onGetMsg: taskBarDom,
        rights: hookReducer.datebox ? Hooks.Datebox.start : Hooks.Datebox.final
    }

    const screenlayoutInfo = {
        StartScreen: StartScreen,
        onGetDeskTop: onDeskTopScreen,
        display: mainReducer.screenDisplay,
        top: screenStatus ? Hooks.ScreenBox.start : Hooks.ScreenBox.final
    }

    const panellayoutInfo = {
        onGetMsg: taskBarDom,
        onSwitch: switchChange,
        bottom: hookReducer.panelbox ? Hooks.PanelBox.start : Hooks.PanelBox.final
    }

    const childlayoutInfo = {
        onGetMsg: taskBarDom,
        text: Hooks.ChildBox.texte,
        bottom: hookReducer.childbox ? Hooks.ChildBox.start : Hooks.ChildBox.final
    }

    const sidebarlayoutInfo = {
        onGetMsg: taskBarDom,
        width: Hooks.SideBox.width,
        lefts: hookReducer.sidebox ? Hooks.SideBox.start : Hooks.SideBox.final
    }

    const tasklayoutInfo = {
        active: windowStatus,
        onGetMsg: taskBarDom,
        about: hookReducer.childbox,
        minMode: windReducer.minMode,
        maxMode: windReducer.maxMode
    }

    const winpanellayoutInfo = {
        onGetMsg: taskBarDom,
        onGetDeskTop: onDeskTopScreen,
        onApplication: onApplicationClick,
        bottom: hookReducer.winpanel ? Hooks.WinPanel.start : Hooks.PanelBox.final
    }

    const createWindowInfo = {
        minMode: windReducer.minMode,
        maxMode: windReducer.maxMode,
        onHeadClick: onWindowHeadMoudle,
        onApplication: onApplicationClose,
        opacity: windReducer.windowOpacity,
        scale: windReducer.windowScale ? 0.75 : 1.00
    }

    return (
        <>
            {!mainReducer.mainStatus && <LoginLayout config={loginlayoutInfo} />}
            <div id="frameelement-main" key="frameelement" className={`dark-theme-${mainReducer.darkThemeStatus} ${mainReducer.batteryThemeStatus &&  "batteryTheme"}`} style={{ opacity: mainReducer.mainStatus ? 1 : 0 }}>
                {
                    windowStatus ? <Taskbar config={tasklayoutInfo} onWindowHeadMoudle={onWindowHeadMoudle} id={windowInfo.id} name={windowInfo.name} icon={windowInfo.icon} />
                    : <Taskbar config={tasklayoutInfo} />
                }
                <StartUpMedia src={StartUpMusic} />
                <StartAlertModel opened={mainReducer.startAlert} />
                <DeskTop config={desktopInfo} />
                <Datebox config={datelayoutInfo} />
                <ScreenBox config={screenlayoutInfo} />
                <SideBox config={sidebarlayoutInfo} />
                <PanelBox config={panellayoutInfo} />
                <ChildBox config={childlayoutInfo} />
                <WinPanel config={winpanellayoutInfo} />
                {contextHolder}
                {windowStatus && <CreateWindow config={createWindowInfo} id={windowInfo.id} ish5={windowInfo.ish5} name={windowInfo.name} icon={windowInfo.icon} h5url={windowInfo.h5url} width={windowInfo.width} height={windowInfo.height} template={windowInfo.template} />}
            </div>
        </>
    )
}

export default MainLayout