
import "./index.css";
import { Tooltip, message } from "antd"
import "../../../../theme/iconTheme.scss"
import { useState, useMemo, useId } from "react"
import application from "../../scripts/application"
import SettingLayout from "../../application/settings"
import ResourceLayout from "../../application/resource"
import settings from "../../../../image/icon/settings.png"
import PanelApplication from "../../scripts/panel/application"

const WinPanel = ({ config }) => {
    
    // eslint-disable-next-line no-unused-vars
    const [arrow, setArrow] = useState('Show');
    const mergedArrow = useMemo(() => {
        if (arrow === 'Hide') {
            return false;
        }

        if (arrow === 'Show') {
            return true;
        }
        return {
            pointAtCenter: true,
        };
    }, [arrow]);

    const [messageApi, contextHolder] = message.useMessage();
    const isDeveloper = () => {
        messageApi.open({
            type: "warning",
            style: {zIndex: 9999},
            content: "当前功能正在开发中！",
        });
    }

    const PanelSearch = () => {
        return (
            <div className="winpanel-search">
                <div className="icon-box">
                    <svg t="1688097016233" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2442" width="16" height="16"><path d="M674.8 196.2C538.6 60.1 315.2 64 184 208.1 65.4 338.3 68.5 543.6 190.7 670.4 312.7 797 508.1 807.6 642.8 703l211.8 211.6c16.6 16.5 43.4 16.5 59.9 0 16.6-16.5 16.6-43.3 0-59.9L702.7 643.1c103.5-132.8 94.4-324.8-27.9-446.9z m-31.9 386.1c-102.6 143-313 143-415.6 0-62.1-86.6-62.1-206.6 0-293.2 102.6-143 313-143 415.6 0 62.1 86.6 62.1 206.5 0 293.2z" fill="#333333" p-id="2443"></path></svg>
                </div>
                <input id="winpanel-search-content" className="winpanel-search-content windows11-input" type="text" placeholder="搜索应用、设置和文档"/>
            </div>
        )
    }

    const PanelContent = () => {

        const appId = useId();

        return (
            <>
                <div className="winpanel-content">
                    <div className="content-head">
                        <span className="content-text">已经固定</span>
                        <button className="content-button">
                            <span className="button-text not-allowTheme" style={{ marginRight: "5px" }} onClick={isDeveloper}>所有应用</span>
                            <svg t="1700983403861" className="icon not-allowTheme" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4054" width="15" height="15"><path d="M658.56 557.392L322.536 221.384l45.248-45.256 336.016 336.008z" p-id="4055" fill="#ffffff"></path><path d="M704.088 512.2L364.12 852.16l-45.256-45.248 339.976-339.976z" p-id="4056" fill="#ffffff"></path></svg>
                        </button>
                    </div>

                    <div className="content-pinned">
                        {application.map(item => (
                            <div data-id={appId} className="pinned-item" key={item.id} onClick={() => {
                                config.onGetMsg("winpanel");
                                config.onApplication({
                                    id: item.id,
                                    ish5: item.ish5,
                                    name: item.name,
                                    icon: item.icon,
                                    h5url: item.h5url,
                                    width: item.width,
                                    height: item.height,
                                    template: item.template,
                                    maxDefault: item.maxDefault
                                });
                            }}>
                                <div className="item-content">
                                    <img className="item-icon" src={item.icon} alt={item.alt}/>
                                    <span className="item-name">{item.name}</span>
                                </div>
                            </div>
                        ))}

                        {PanelApplication.map(item => (
                            <div data-id={appId} className="pinned-item" key={item.id} onClick={() => {
                                config.onGetMsg("winpanel");
                                config.onApplication({
                                    id: item.id,
                                    ish5: item.ish5,
                                    name: item.name,
                                    icon: item.icon,
                                    h5url: item.h5url,
                                    width: item.width,
                                    height: item.height,
                                    template: item.template,
                                    maxDefault: item.maxDefault
                                });
                            }}>
                                <div className="item-content">
                                    <img className="item-icon" src={item.icon} alt={item.alt}/>
                                    <span className="item-name">{item.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="content-head" style={{ marginTop: "35px" }}>
                        <span className="content-text">推荐项目</span>
                        <button className="content-button">
                            <span className="button-text not-allowTheme" style={{ marginRight: "5px" }} onClick={isDeveloper}>所有应用</span>
                            <svg t="1700983403861" className="icon not-allowTheme" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4054" width="15" height="15"><path d="M658.56 557.392L322.536 221.384l45.248-45.256 336.016 336.008z" p-id="4055" fill="#ffffff"></path><path d="M704.088 512.2L364.12 852.16l-45.256-45.248 339.976-339.976z" p-id="4056" fill="#ffffff"></path></svg>
                        </button>
                    </div>

                    <div className="content-pinned">
                        {application.map(item => (
                            <div data-id={appId} className="pinned-item" key={item.id} onClick={() => {
                                config.onGetMsg("winpanel");
                                config.onApplication({
                                    id: item.id,
                                    ish5: item.ish5,
                                    name: item.name,
                                    icon: item.icon,
                                    h5url: item.h5url,
                                    width: item.width,
                                    height: item.height,
                                    template: item.template,
                                    maxDefault: item.maxDefault
                                })
                            }}>
                                <div className="item-content">
                                    <img className="item-icon" src={item.icon} alt={item.alt}/>
                                    <span className="item-name">{item.name}</span>
                                </div>
                            </div>
                        ))}
                        
                        {PanelApplication.map(item => (
                            <div data-id={appId} className="pinned-item" key={item.id} onClick={() => {
                                config.onGetMsg("winpanel");
                                config.onApplication({
                                    id: item.id,
                                    ish5: item.ish5,
                                    name: item.name,
                                    icon: item.icon,
                                    h5url: item.h5url,
                                    width: item.width,
                                    height: item.height,
                                    template: item.template,
                                    maxDefault: item.maxDefault
                                })
                            }}>
                                <div className="item-content">
                                    <img className="item-icon" src={item.icon} alt={item.alt}/>
                                    <span className="item-name">{item.name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        )
    }

    const PanelFooter = () => {
        return (
            <div className="winpanel-bottom">
                <div className="userinfo">
                    <div className="userinfo-avatar"></div>
                    <span className="userinfo-named">Administrator</span>
                </div>

                <div className="bottom-right">
                    <Tooltip placement="top" title={'电源'} arrow={mergedArrow}>
                        <div className="systeminfo" onClick={() => config.onGetDeskTop()}>
                            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-action="STARTPWC"><path d="M8.204 4.82a.75.75 0 0 1 .634 1.36A7.51 7.51 0 0 0 4.5 12.991c0 4.148 3.358 7.51 7.499 7.51s7.499-3.362 7.499-7.51a7.51 7.51 0 0 0-4.323-6.804.75.75 0 1 1 .637-1.358 9.01 9.01 0 0 1 5.186 8.162c0 4.976-4.029 9.01-9 9.01C7.029 22 3 17.966 3 12.99a9.01 9.01 0 0 1 5.204-8.17ZM12 2.496a.75.75 0 0 1 .743.648l.007.102v7.5a.75.75 0 0 1-1.493.102l-.007-.102v-7.5a.75.75 0 0 1 .75-.75Z" fill="currentColor"></path></svg>
                        </div>
                    </Tooltip>

                    <Tooltip placement="top" title={'设置'} arrow={mergedArrow} onClick={() => {
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
                    }}>
                        <div className="systeminfo">
                            <svg t="1700301688588" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4037" width="20" height="20"><path d="M913.94086 431.828053c-4.878101-25.783223-20.693298-42.455951-40.947598-42.455951l-3.511987 0c-54.731532 0-99.248422-44.515866-99.248422-99.262748 0-17.294898 8.299013-37.015032 8.619308-37.798884 10.097986-22.722514 2.349511-50.567699-18.078751-64.859193l-102.701057-57.183374-1.509377-0.738827c-20.545942-8.909927-48.667419-3.207042-63.987337 12.753465-11.086499 11.434423-49.306986 44.037982-78.471213 44.037982-29.543873 0-67.849294-33.257451-78.992075-44.908816-15.293311-16.077164-43.12417-22.112624-63.902402-13.218046l-106.35733 58.272171-1.596358 1.016143c-20.430308 14.234189-28.207435 42.078351-18.165732 64.713884 0.346901 0.827855 8.676613 20.387329 8.676613 37.914518 0 54.746882-44.51689 99.262748-99.247398 99.262748l-4.149507 0c-19.617803 0-35.434024 16.671705-40.309054 42.455951-0.363274 1.814322-8.590656 45.446052-8.590656 80.429821 0 34.938744 8.227382 78.555124 8.590656 80.355119 4.875031 25.799596 20.691251 42.48665 40.946574 42.48665l3.511987 0c54.730509 0 99.247398 44.51689 99.247398 99.247398 0 17.411555-8.328689 37.058011-8.647961 37.812187-10.069333 22.766516-2.349511 50.567699 18.021445 64.787562l100.756775 56.531528 1.538029 0.696872c20.836561 9.17087 49.01432 3.191692 64.250326-13.464663 14.07353-15.207353 52.207036-46.782489 80.20981-46.782489 30.354332 0 69.445652 35.347043 80.706113 47.76691 10.387581 11.376095 26.349111 18.22713 42.687218 18.22713 7.631818 0 14.857383-1.511423 21.474081-4.354168l104.4724-57.574277 1.538029-0.989537c20.428262-14.276145 28.206412-42.077328 18.138102-64.727187-0.348947-0.842181-8.677637-20.402679-8.677637-37.928844 0-54.730509 44.51689-99.247398 99.248422-99.247398l4.093225 0c19.644409 0 35.488259-16.687054 40.365336-42.48665 0.347924-1.799996 8.588609-45.416376 8.588609-80.355119C922.529469 477.274104 914.288784 433.642374 913.94086 431.828053M862.982258 512.257873c0 22.605857-4.498454 51.655474-6.559393 63.785745-82.09781 6.732331-145.738245 75.335802-145.738245 158.303422 0 23.419386 7.430226 45.851281 11.377118 56.169277l-89.12076 49.216935c-4.38282-4.584412-17.325597-17.644869-34.939767-30.762631-30.93557-22.925129-60.595077-34.635845-88.106664-34.635845-27.278273 0-56.703443 11.420097-87.493703 34.05563-17.528212 12.768815-30.296003 25.479301-34.765805 30.18037l-85.724407-47.997154c4.179183-10.839883 11.405771-32.982182 11.405771-56.226582 0-82.96762-63.640436-151.571091-145.70857-158.303422-2.089591-12.130272-6.588045-41.178865-6.588045-63.785745 0-22.650883 4.498454-51.713802 6.588045-63.844074 82.068134-6.718005 145.70857-75.335802 145.70857-158.303422 0-23.288402-7.429203-45.792952-11.376095-56.095599l91.325985-50.190099c3.975545 3.976568 17.005302 16.730033 34.82311 29.411867 30.355355 21.663392 59.260685 32.633235 86.016049 32.633235 26.494421 0 55.19509-10.766205 85.346807-32.009018 17.963117-12.623505 30.964222-25.203008 34.736129-28.757974l87.900979 48.825009c-3.975545 10.244318-11.405771 32.676214-11.405771 56.18258 0 82.96762 63.640436 151.585417 145.738245 158.303422C858.483804 460.5717 862.982258 489.7523 862.982258 512.257873" fill="#231F20" p-id="4038"></path><path d="M510.215866 365.633445c-80.530105 0-146.056494 65.527412-146.056494 146.057517 0 80.543408 65.527412 146.043191 146.056494 146.043191 80.530105 0 146.057517-65.499783 146.057517-146.043191C656.273383 431.160857 590.74597 365.633445 510.215866 365.633445M596.725148 511.690962c0 47.693232-38.799678 86.491887-86.509283 86.491887-47.708582 0-86.479607-38.798655-86.479607-86.491887 0-47.665603 38.771025-86.479607 86.479607-86.479607C557.925471 425.212378 596.725148 464.025359 596.725148 511.690962" fill="#231F20" p-id="4039"></path></svg>
                        </div>
                    </Tooltip>

                    <Tooltip placement="top" title={'计算机'} arrow={mergedArrow} onClick={() => {
                        config.onApplication({
                            id: "setting",
                            ish5: false,
                            name: "计算机",
                            icon: settings,
                            h5url: "https://baidu.com/",
                            width: "1150px",
                            height: "620px",
                            template: <ResourceLayout/>
                        });
                    }}>
                        <div className="systeminfo">
                            <svg style={{width: "53%",height: "53%"}} t="1700302512471" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11237" width="20" height="20"><path d="M410.9632 672.2944a268.4992 268.4992 0 1 0 268.4992-268.4992 268.4992 268.4992 0 0 0-268.4992 268.4992z" fill="#D6F7F7" p-id="11238"></path><path d="M466.8864 738.0096h-252.16a115.136 115.136 0 0 1-124.7168-103.04v-420.224a115.3536 115.3536 0 0 1 105.76-124.7104h528.6848a115.136 115.136 0 0 1 124.7168 103.04v18.976a10024 10024 0 0 1 0 403.968 113.1584 113.1584 0 0 1-105.7344 122.0032H466.8864z m0-54.2208h249.4272c51.5136 0 70.4896-21.6896 70.4896-73.2032V217.4592c0-51.5136-21.6896-73.2032-73.2032-73.2032H217.4592c-51.5136 0-73.2032 24.4032-73.2032 73.2032v387.6992c0 51.5136 21.6896 73.2032 75.9104 75.9104 84.0448 2.7136 165.3824 2.7136 246.72 2.7136z m0 162.6688H290.6624c-18.976 0-35.2448-2.7136-35.2448-27.1104s18.976-27.1104 35.2448-27.1104h355.168c18.976 0 35.2448 2.7136 35.2448 27.1104s-18.976 27.1104-37.9584 27.1104H466.8864z" fill="#252B3A" p-id="11239"></path><path d="M456.0448 301.504a248.864 248.864 0 0 0 65.0688 75.9104c32.5376 29.824 51.5136 46.08 51.5136 81.3376a108.5824 108.5824 0 0 1-216.896 0 75.0656 75.0656 0 0 1 2.7136-24.4032c21.6896 16.2688 51.5136 18.976 78.624 13.5552-18.976-122.0032 18.976-146.4064 18.976-146.4064m37.9584-89.472c-24.4032 0-116.5824 54.2208-105.7344 192.4928-35.2448-5.4208-24.4032-84.0448-24.4032-84.0448a269.3696 269.3696 0 0 0-56.96 140.9792 154.5152 154.5152 0 0 0 162.6688 146.4064c78.624-5.4208 143.6928-67.7824 146.4064-146.4064 2.7328-121.9904-154.5152-121.9904-121.984-249.4144z" fill="#00CACF" p-id="11240"></path></svg>
                        </div>
                    </Tooltip>
                </div>
            </div>
        )
    }

    return (
        <>
            <div id="windows11-winpanel" style={{ bottom: config.bottom }} tabIndex={0} onContextMenu={(event) => event.preventDefault()}>
                {contextHolder}
                <PanelSearch/>
                <PanelContent/>
                <PanelFooter/>
            </div>
        </>
    )
}

export default WinPanel