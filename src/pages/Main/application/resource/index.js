
import "./index.css"
import { message } from 'antd'
import { useEffect, useState } from "react"

import docsIcon from "../../../../image/icon/windows/docs.png"
import picsIcon from "../../../../image/icon/windows/pics.png"
import videoIcon from "../../../../image/icon/windows/video.png"
import musicsIcon from "../../../../image/icon/windows/music.png"
import desktopIcon from "../../../../image/icon/windows/desk.png"
import downloaIcon from "../../../../image/icon/windows/down.png"
import thispcIcon from "../../../../image/icon/windows/thispc.png"

import discIcon from "../../../../image/icon/windows/disc-sm.png"
import diskIcon from "../../../../image/icon/windows/disk-sm.png"
import resourceIcon from "../../../../image/icon/windows/folder-sm.png"

const ResourceLayout = () => {
    const [screen, setScreen] = useState(true);
    setTimeout(() => {setScreen(false)},800);
    // eslint-disable-next-line no-unused-vars
    const [deviceValue, setDeviceValue] = useState({
        C:"0%",D:"0%",E:"0%",F:"0%",G:"0%"
    });
    // eslint-disable-next-line no-unused-vars
    const [messageApi, contextHolder] = message.useMessage();
    const isDeveloper = () => {
        messageApi.open({
            type: "warning",
            style: {zIndex: 9999},
            content: "当前功能正在开发中！",
        });
    }

    useEffect(() => {
        if (!screen) {
            setTimeout(() => {
                document.querySelectorAll(".progress")[0].style.width = "50%";
                document.querySelectorAll(".progress")[1].style.width = "30%";
                document.querySelectorAll(".progress")[2].style.width = "30%";
                document.querySelectorAll(".progress")[3].style.width = "30%";
                document.querySelectorAll(".progress")[4].style.width = "30%";
            },100);
        }
    },[screen]);

    const ResourceMenu = () => {
        return (
            <div className="resource-menu-box">
                <ul className="menu-pinned-box menu-box">
                    <li className="menu-box-item" onClick={isDeveloper}>
                        <img className="menu-box-item-icon" src={picsIcon} alt="图库" />
                        <span className="menu-box-item-text" style={{ fontSize: 15 }}>图库</span>
                    </li>
                </ul>

                <ul className="menu-pinned-box menu-box">
                    <li className="menu-box-item" onClick={isDeveloper}>
                        <img className="menu-box-item-icon" src={desktopIcon} alt="桌面" />
                        <span className="menu-box-item-text" style={{ fontSize: 15 }}>桌面</span>
                    </li>

                    <li className="menu-box-item" onClick={isDeveloper}>
                        <img className="menu-box-item-icon" src={downloaIcon} alt="下载" />
                        <span className="menu-box-item-text" style={{ fontSize: 15 }}>下载</span>
                    </li>

                    <li className="menu-box-item" onClick={isDeveloper}>
                        <img className="menu-box-item-icon" src={docsIcon} alt="文档" />
                        <span className="menu-box-item-text" style={{ fontSize: 15 }}>文档</span>
                    </li>

                    <li className="menu-box-item" onClick={isDeveloper}>
                        <img className="menu-box-item-icon" src={picsIcon} alt="图片" />
                        <span className="menu-box-item-text" style={{ fontSize: 15 }}>图片</span>
                    </li>

                    <li className="menu-box-item" onClick={isDeveloper}>
                        <img className="menu-box-item-icon" src={musicsIcon} alt="音乐" />
                        <span className="menu-box-item-text" style={{ fontSize: 15 }}>音乐</span>
                    </li>

                    <li className="menu-box-item" onClick={isDeveloper}>
                        <img className="menu-box-item-icon" src={videoIcon} alt="视频" />
                        <span className="menu-box-item-text" style={{ fontSize: 15 }}>视频</span>
                    </li>
                </ul>

                <ul className="menu-pinned-box menu-box">
                    <li className="menu-box-item" onClick={isDeveloper}>
                        <img className="menu-box-item-icon" src={thispcIcon} alt="此电脑" />
                        <span className="menu-box-item-text" style={{ fontSize: 15 }}>此电脑</span>
                    </li>
                </ul>
            </div>
        )
    }

    const ResourceContent = () => {
        return (
            <div className="resource-content-box">
                <ul className="device-list">
                    <li className="device-list-item" tabIndex={0} onDoubleClick={isDeveloper}>
                        <div className="item-icon-box">
                            <img className="item-icon" src={discIcon} alt="本地磁盘 (C:)"/>
                        </div>
                        <div className="item-content-box">
                            <span className="content-name" style={{ fontSize: "15px" }}>本地磁盘 (C:)</span>
                            <div className="progress-box">
                                <div className="progress" style={{ width: deviceValue['C'] }}></div>
                            </div>
                            <span className="content-text">128.0 GB可用，共 256 GB</span>
                        </div>
                    </li>

                    <li className="device-list-item" tabIndex={0} onDoubleClick={isDeveloper}>
                        <div className="item-icon-box">
                            <img className="item-icon" src={diskIcon} alt="本地磁盘 (D:)"/>
                        </div>
                        <div className="item-content-box">
                            <span className="content-name" style={{ fontSize: "15px" }}>本地磁盘 (D:)</span>
                            <div className="progress-box">
                                <div className="progress" style={{ width: deviceValue['D'] }}></div>
                            </div>
                            <span className="content-text">96.0 GB可用，共 128 GB</span>
                        </div>
                    </li>

                    <li className="device-list-item" tabIndex={0} onDoubleClick={isDeveloper}>
                        <div className="item-icon-box">
                            <img className="item-icon" src={diskIcon} alt="本地磁盘 (E:)"/>
                        </div>
                        <div className="item-content-box">
                            <span className="content-name" style={{ fontSize: "15px" }}>本地磁盘 (E:)</span>
                            <div className="progress-box">
                                <div className="progress" style={{ width: deviceValue['E'] }}></div>
                            </div>
                            <span className="content-text">96.0 GB可用，共 128 GB</span>
                        </div>
                    </li>

                    <li className="device-list-item" tabIndex={0} onDoubleClick={isDeveloper}>
                        <div className="item-icon-box">
                            <img className="item-icon" src={diskIcon} alt="本地磁盘 (F:)"/>
                        </div>
                        <div className="item-content-box">
                            <span className="content-name" style={{ fontSize: "15px" }}>本地磁盘 (F:)</span>
                            <div className="progress-box">
                                <div className="progress" style={{ width: deviceValue['F'] }}></div>
                            </div>
                            <span className="content-text">96.0 GB可用，共 128 GB</span>
                        </div>
                    </li>

                    <li className="device-list-item" tabIndex={0} onDoubleClick={isDeveloper}>
                        <div className="item-icon-box">
                            <img className="item-icon" src={diskIcon} alt="本地磁盘 (G:)"/>
                        </div>
                        <div className="item-content-box">
                            <span className="content-name" style={{ fontSize: "15px" }}>本地磁盘 (G:)</span>
                            <div className="progress-box">
                                <div className="progress" style={{ width: deviceValue['G'] }}></div>
                            </div>
                            <span className="content-text">96.0 GB可用，共 128 GB</span>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
    
    return (
        <>
            <div id="window-layout-resource-screen" style={{ opacity: screen ? 1 : 0, zIndex: screen ? 2 : -1 }}>
                <img className="application-icon" src={resourceIcon} alt="资源管理器"/>
            </div>
            <div id="window-layout-resource-screen" style={{ opacity: screen ? 0 : 1 }} onContextMenu={(event) => event.preventDefault()}>
                {contextHolder}
                <div className="resource-main">
                    <ResourceMenu/>
                    <ResourceContent/>
                </div>
            </div>
        </>
    )
}

export default ResourceLayout