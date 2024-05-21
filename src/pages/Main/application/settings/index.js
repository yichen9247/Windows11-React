
import "./index.css"
import { useId, useState } from "react"
import UserInfo from "../../scripts/users"
import { Input, message, Alert } from 'antd'
import settings from "../../scripts/settings"
import HomeWindowsInfo from "./Home/HomeInfo"
import ThemeSetting from "./Personal/ThemeSet"
import AppSettingList from "./Apps/SettingList"
import GameSettingList from "./Game/SettingList"
import HomeBlueteethInfo from "./Home/Blueteeth"
import HomeRecommonSetting from "./Home/Recommon"
import LanguageTimeInfo from "./Language/TimeInfo"
import UpdateSettingList from "./Update/SettingList"
import SystemSettingList from "./System/SettingList"
import NetWorKSettingList from "./Network/SettingList"
import AccountSettingList from "./Account/SettingList"
import PrivacySettingList from "./Privacy/SettingList"
import BlueteethDeviceList from "./Blueteeth/DeviceList"
import LanguageSettingList from "./Language/SettingList"
import PersonalSettingList from "./Personal/SettingList"
import AuxiliarySettingList from "./Auxiliary/SettingList"
import settingsIcon from "../../../../image/icon/settings.png"
import userAvatar from "../../../../image/background-avatar.jpg"

const UserBox = () => {
    return(
        <div className="user-box">
            <img className="user-avatar" src={userAvatar} alt="个人信息"/>
            <div className="user-info">
                <span className="user-name">{UserInfo.userNick}</span>
                <span className="user-email">{UserInfo.userEmail}</span>
            </div>
        </div>
    )
}

const SearchBox = () => {
    const { Search } = Input;
    return (
        <div className="search-box">
            <Search placeholder="查找设置" style={{width: "100%"}} className="not-allowTheme" />
        </div>
    )
}

const SettingList = ({ activeItem, setActiveItem }) => {

    const tabins = useId();
    
    return (
        <ul className="setting-list">
            {settings.map(item => (
                <li id={`setting-menu-${item.id}`} data-id={tabins} key={item.id} className={`list-item ${activeItem === item.id && "item-active"}`} onClick={() => setActiveItem(item.id)}>
                    <div className="item-progress"></div>
                    <img className="item-icon" src={item.icon} alt={item.name}/>
                    <span className="item-name">{item.name}</span>
                </li>
            ))}
        </ul>
    )
}

const SeetingSidex = ({ activeItem, setActiveItem }) => {
    return (
        <div className="setting-menubox">
            <UserBox/>
            <SearchBox/>
            <SettingList activeItem={activeItem} setActiveItem={setActiveItem} />
        </div>
    )
}

const PagesTitleBox = ({ name }) => {
    return (
        <div className="title-box">
            <span className="title-text">{name}</span>
        </div>
    )
}

const SettingCenterNotice = () => {
    return (
        <Alert closable type="warning" message="全局提示"
            style={{
                top: "10px",
                width: "98%",
                marginBottom: "30px",
                borderColor: "#999999",
                background: "var(--currentColor)"
            }}
            description="Windows设置中心目前正在施工中，这里的部分功能暂不可用，敬请期待哦！"
        />
    )
}

const LayoutHome = ({ isDeveloper }) => {
    return (
        <div className="layout-content">
            <HomeWindowsInfo/>
            <SettingCenterNotice/>
            <HomeRecommonSetting isDeveloper={isDeveloper} />
            <HomeBlueteethInfo isDeveloper={isDeveloper} />
        </div>
    )
}

const LayoutSystem = ({ isDeveloper }) => {
    return (
        <div className="layout-content">
            <HomeWindowsInfo/>
            <SettingCenterNotice/>
            <SystemSettingList isDeveloper={isDeveloper} />
        </div>
    )
}

const LayoutBlueteeth = ({ isDeveloper }) => {
    return (
        <div className="layout-content">
            <SettingCenterNotice/>
            <BlueteethDeviceList isDeveloper={isDeveloper} />
        </div>
    )
}

const LayoutNetwork = ({ isDeveloper }) => {
    return (
        <div className="layout-content">
            <SettingCenterNotice/>
            <NetWorKSettingList isDeveloper={isDeveloper} />
        </div>
    )
}

const LayoutPersonal = ({ isDeveloper,id }) => {
    return (
        <div className="layout-content">
            {/* <SettingCenterNotice/> */}
            <ThemeSetting id={id} />
            <PersonalSettingList isDeveloper={isDeveloper} />
        </div>
    )
}

const LayoutApps = ({ isDeveloper }) => {
    return (
        <div className="layout-content">
            <SettingCenterNotice/>
            <AppSettingList isDeveloper={isDeveloper} />
        </div>
    )
}

const LayoutGame = ({ isDeveloper }) => {
    return (
        <div className="layout-content">
            <GameSettingList isDeveloper={isDeveloper} />
        </div>
    )
}

const LayoutLanguage = ({ isDeveloper }) => {
    return (
        <div className="layout-content">
            <LanguageTimeInfo/>
            <SettingCenterNotice/>
            <LanguageSettingList isDeveloper={isDeveloper} />
        </div>
    )
}

const LayoutAccount = ({ isDeveloper }) => {
    return (
        <div className="layout-content">
            <SettingCenterNotice/>
            <AccountSettingList isDeveloper={isDeveloper} />
        </div>
    )
}

const LayoutAuxiliary = ({ isDeveloper }) => {
    return (
        <div className="layout-content">
            <SettingCenterNotice/>
            <AuxiliarySettingList isDeveloper={isDeveloper} />
        </div>
    )
}

const LayoutPrivacy = ({ isDeveloper }) => {
    return (
        <div className="layout-content">
            <SettingCenterNotice/>
            <PrivacySettingList isDeveloper={isDeveloper} />
        </div>
    )
}

const LayoutUpdate = ({ isDeveloper }) => {
    return (
        <div className="layout-content">
            <SettingCenterNotice/>
            <UpdateSettingList isDeveloper={isDeveloper} />
        </div>
    )
}

const ContentLayout = ({ activeItem, isDeveloper }) => {

    const tabins = useId();

    return (
        <div className="seeting-content-box">
            {settings.map(item => (
                <div data-id={tabins} key={item.id} id={`seeting-content-${item.id}`} className="seeting-content" style={{ position: activeItem === 1 ? "relative" : "absolute",marginTop: activeItem === item.id ? 0 : "100%", transition: activeItem === item.id && "0.5s" }}>
                    <PagesTitleBox name={item.name} />
                    { item.id === 1 && <LayoutHome isDeveloper={isDeveloper}/> }
                    { item.id === 2 && <LayoutSystem isDeveloper={isDeveloper} /> }
                    { item.id === 3 && <LayoutBlueteeth isDeveloper={isDeveloper} /> }
                    { item.id === 4 && <LayoutNetwork isDeveloper={isDeveloper} /> }
                    { item.id === 5 && <LayoutPersonal isDeveloper={isDeveloper} id={activeItem} /> }
                    { item.id === 6 && <LayoutApps isDeveloper={isDeveloper} /> }
                    { item.id === 7 && <LayoutAccount isDeveloper={isDeveloper} /> }
                    { item.id === 8 && <LayoutLanguage isDeveloper={isDeveloper} /> }
                    { item.id === 9 && <LayoutGame isDeveloper={isDeveloper} /> }
                    { item.id === 10 && <LayoutAuxiliary isDeveloper={isDeveloper} /> }
                    { item.id === 11 && <LayoutPrivacy isDeveloper={isDeveloper} /> }
                    { item.id === 12 && <LayoutUpdate isDeveloper={isDeveloper} /> }
                </div>
            ))}
        </div>
    )
}

const SettingLayout = () => {
    const [screen, setScreen] = useState(true);
    const [activeItem,setActiveItem] = useState(1);
    const [messageApi, contextHolder] = message.useMessage();
    const isDeveloper = () => {
        messageApi.open({
            type: "warning",
            style: {zIndex: 9999},
            content: "当前功能正在开发中！",
        });
    }
    setTimeout(() => setScreen(false),800);
    
    return (
        <>
            <div id="window-layout-setting-screen" style={{ opacity: screen ? 1 : 0, zIndex: screen ? 2 : -1 }}>
                <img className="application-icon" src={settingsIcon} alt="设置"/>
            </div>
            <div id="window-layout-setting" style={{ opacity: screen ? 0 : 1 }} onContextMenu={(event) => event.preventDefault()}>
                {contextHolder}
                <SeetingSidex activeItem={activeItem} setActiveItem={setActiveItem} />
                <ContentLayout activeItem={activeItem} isDeveloper={isDeveloper} />
            </div>
        </>
    )
}

export default SettingLayout