
import "./index.css"
import { message } from 'antd'
import { useId, useState } from "react"
import '../../../../theme/iconTheme.scss'
import dateTool from "../../scripts/dates"

const Taskbar = ({ config, onWindowHeadMoudle, id, name, icon }) => {

    const taskApps = useId();
    const taskMenu = useId();
    const [timeText, setTime] = useState("00:00:00");
    const [dateText, setDate] = useState("0000/00/00 星期日");

    const taskStatus = [
        { id: 1, icon: "task-icon-keyboard" },
        { id: 2, icon: "task-icon-wifi" },
        { id: 3, icon: "task-icon-audio3" },
    ];

    setInterval(() => {
        // eslint-disable-next-line no-useless-concat
        var date = new dateTool().Date();
        // eslint-disable-next-line no-useless-concat
        setTime(date.Hours + ":" + date.Min + ":" + date.Sen);
        setDate(date.Year + "/" + date.Mouth + "/" + date.Date + " " + date.Week)
    }, 1000);

    const [messageApi, contextHolder] = message.useMessage();

    const isDeveloper = () => {
        messageApi.open({
            type: "warning",
            style: {zIndex: 9999},
            content: "当前功能正在开发中！",
        });
    }

    return (
        <>
            <div id="windows11-taskbar" onContextMenu={(event) => event.preventDefault()} style={{ bottom: config.maxMode && "-3.5rem" }}>
                {contextHolder}
                <div className="taskbar-center">
                    <div className="windows11-hook task-apps taskapps-logo" onClick={() => config.onGetMsg("winpanel")}>
                        <i className="task-icon-home not-allowTheme"></i>
                    </div>

                    <div className="task-search taskapps-search" onClick={isDeveloper}>
                        <div className="icon-box">
                            <svg t="1688097016233" className="icon not-allowTheme" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2442" width="16" height="16"><path d="M674.8 196.2C538.6 60.1 315.2 64 184 208.1 65.4 338.3 68.5 543.6 190.7 670.4 312.7 797 508.1 807.6 642.8 703l211.8 211.6c16.6 16.5 43.4 16.5 59.9 0 16.6-16.5 16.6-43.3 0-59.9L702.7 643.1c103.5-132.8 94.4-324.8-27.9-446.9z m-31.9 386.1c-102.6 143-313 143-415.6 0-62.1-86.6-62.1-206.6 0-293.2 102.6-143 313-143 415.6 0 62.1 86.6 62.1 206.5 0 293.2z" p-id="2443"></path></svg>
                        </div>
                        <input id="task-search-content" className="task-search-content" type="text" placeholder="搜索什么..."/>
                    </div>

                    <div className="task-application">
                        {config.active && 
                            <div id={taskApps} className="application" onClick={() => onWindowHeadMoudle("min")}>
                                <img id={`task-${id}`} className="application-icon" src={icon} alt={name} />
                                <div className="application-progress" style={{ width: config.minMode ? "40%" : "75%" }} ></div>
                            </div>
                        }
                    </div>
                </div>

                <div className="windows11-hook task-apps-right">
                    <div className="task-right-apps taskapps-dates" onClick={() => config.onGetMsg("datebox")}>
                        <span className="box time-box">{timeText}</span>
                        <span className="box date-box">{dateText}</span>
                    </div>

                    <div className="windows11-hook task-right-apps taskapps-status" onClick={() => config.onGetMsg("panelbox")}>
                        {
                            taskStatus.map(item => (
                                <div id={taskMenu} key={item.id} className="status-item">
                                    <i key={item.id} className={item.icon}></i>
                                </div>
                            ))
                        }
                    </div>

                    <div className="windows11-hook task-right-apps taskapps-more" onClick={() => config.onGetMsg("childbox")}>
                        <svg style={{ transition: "transform 0.5s", transform:  config.about ? "rotate(180deg)" : "rotate(0deg)" }} className="svg-inline--fa fa-chevron-up" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-flip="false" data-invert="false" data-rounded="false"><path fill="currentColor" d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path></svg>
                    </div>
                </div>

                <div className="windows11-hook task-apps taskapps-widget" onClick={() => config.onGetMsg("sidebox")}>
                    <i className="task-icon-widget not-allowTheme"></i>
                </div>
            </div>
        </>
    )
}

export default Taskbar