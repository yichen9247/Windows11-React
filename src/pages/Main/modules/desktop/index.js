/* eslint-disable react-hooks/exhaustive-deps */

import "./index.css"

import { useEffect, useId, useState } from "react"
import { message, FloatButton } from 'antd'
import application from "../../scripts/application"
import SettingLayout from "../../application/settings"
import OnMouseRightClick from "../../scripts/mouseclick"
import settings from "../../../../image/icon/settings.png"
import { CustomerServiceOutlined } from '@ant-design/icons'

const DeskTop = ({ config }) => {

    const desktop = useId();
    const [refresh, setRefresh] = useState(false);
    const [rightMenu, setRightMenu] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const selectDiv = document.querySelector(".desktop-select");
    let firstPositionX,firstPositionY,lastPositionX,lastPositionY;

    const selectFuntion = () => {
        document.getElementById("windows11-desktop").addEventListener("mousedown",(e1) =>  {
            if (config.thisOpened) {
                if (!document.querySelector(".desktop-apps").contains(e1.target) && !document.querySelector(".desktop-float").contains(e1.target)) {
                    selectDiv.style.display = "block";
        
                    selectDiv.style.width = 0 + "px";
                    selectDiv.style.height = 0 + "px";
                    
                    firstPositionX = e1.clientX;
                    firstPositionY = e1.clientY;
                    
                    selectDiv.style.transition = "none";
                    
                    selectDiv.style.top = firstPositionY + "px";
                    selectDiv.style.left = firstPositionX + "px";
                    
                    document.addEventListener("mousemove",(e2) =>  {
                        lastPositionX = e2.clientX;
                        lastPositionY = e2.clientY;
                    
                        if ((firstPositionX - lastPositionX) < 0) {
                            selectDiv.style.width = Math.round(lastPositionX - firstPositionX) + "px";
                        } else {
                            selectDiv.style.left = lastPositionX + "px";
                            selectDiv.style.width = Math.round(firstPositionX - lastPositionX) + "px";
                        }
                    
                        if ((firstPositionY - lastPositionY) < 0) {
                            selectDiv.style.height = Math.round(lastPositionY - firstPositionY) + "px";
                        } else {
                            selectDiv.style.top = lastPositionY + "px";
                            selectDiv.style.height = Math.round(firstPositionY - lastPositionY) + "px";
                        }
                    });
                
                    document.addEventListener("mouseup",() =>  selectDiv.style.display = "none");
                }
            }
        });
    }

    useEffect(() => {
        if (config.thisOpened) {
            selectFuntion();
        }

        return (
            document.removeEventListener('mousedown',() => {})
        )
    },[refresh,rightMenu,messageApi,config.thisOpened,config.windowStatus]);

    const RightClick = (event) => {
        event.preventDefault();
        let positionTop = 0;
        let positionLeft = 0;
        let positionX = event.pageX;
        let positionY = event.pageY;
        let menu = document.querySelector(".mouse-menu");
        if (!rightMenu) {
            menu.style.zIndex = 4;
            positionTop = positionY;
            positionLeft = positionX;
            menu.focus();
            menu.onblur = () => {
                setRightMenu(false);
            }
            setRightMenu(!rightMenu);
            menu.style.top = positionTop + 'px';
            menu.style.left = positionLeft + 'px';
        }
    }

    const openSettingWindow = () => {
        config.onApplication({
            id: "setting",
            ish5: false,
            name: "设置",
            icon: settings,
            h5url: "https://baidu.com/",
            width: "1100px",
            height: "680px",
            template: <SettingLayout/>
        });
    }

    const openDesktopRefresh = () => {
        if (!refresh) {
            setRefresh(true);
            setRightMenu(false);
            setTimeout(() => setRefresh(false),200);
        }
    }
    const onRightMenuBlur = () => setRightMenu(false);

    const isDeveloper = () => {
        messageApi.open({
            type: "warning",
            style: {zIndex: 9999},
            content: "当前功能正在开发中！",
        });
        setRightMenu(!rightMenu);
    }

    window.addEventListener('keydown',(event) => {
        if (event.keyCode === 116 /*F5被按下(刷新)*/) {
            event.preventDefault();
            if (!refresh) {
                setRefresh(true);
                setTimeout(() => setRefresh(false),200);
            }
        }
    });

    return (
        <>
            <div id="windows11-desktop" onContextMenu={(event) => RightClick(event)} >
                {contextHolder}
                <span className="desktop-select"></span>
                <OnMouseRightClick opacity={ rightMenu ? 1 : 0 } isDeveloper={isDeveloper} openSettingWindow={openSettingWindow} openDesktopRefresh={openDesktopRefresh} onRightMenuBlur={onRightMenuBlur} />
                <div className="desktop-apps">

                    {!refresh && application.map(item => (
                        <div data-id={desktop} key={item.id} className="deskapp" onDoubleClick={() => config.onApplication({
                            id: item.id,
                            ish5: item.ish5,
                            name: item.name,
                            icon: item.icon,
                            h5url: item.h5url,
                            width: item.width,
                            height: item.height,
                            template: item.template,
                            maxDefault: item.maxDefault
                        })}>
                            <div className="deskapp-content" data-name={item.name}>
                                <img className="deskapp-icon" src={item.icon} alt={item.name} draggable="false"/>
                                <span className="desapp-name">{item.name}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <FloatButton shape="square" type="primary" className="desktop-float"
                    style={{
                        zIndex: 0,
                        right: "35px",
                        transition: "0.5s",
                        bottom: config.maxMode ? "calc(10% - 2.5rem)" : "10%",
                    }}
                    onClick={() => {
                        messageApi.open({
                            type: "warning",
                            style: {zIndex: 9999},
                            content: "当前功能正在开发中！",
                        });
                    }}
                    icon={<CustomerServiceOutlined />}
                />
            </div>
        </>
    )
}

export default DeskTop