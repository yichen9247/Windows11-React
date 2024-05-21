
import UserInfo from "../../../scripts/users"

const HomeWindowsInfo = () => {
    return (
        <div className="windows-info">
            <div className="home-screen">
                <div className="desktop-screen"/>
            </div>
            <div className="desktop-content">
                <span className="desktop-name">{UserInfo.userNick}</span>
                <span className="desktop-code">{UserInfo.userCode}</span>
            </div>
        </div>
    )
}

export default HomeWindowsInfo