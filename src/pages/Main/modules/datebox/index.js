
import "./index.css";
import dateTool from "../../scripts/dates"
import { Tooltip, Calendar } from "antd"
import { useState, useMemo } from "react"

const Datebox = ({ config }) => {
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

    const [dateText, setDate] = useState("00月00日 星期日");

    setInterval(() => {
        // eslint-disable-next-line no-useless-concat
        var date = new dateTool().Date();
        // eslint-disable-next-line no-useless-concat
        setDate(date.Mouth + "月" + date.Date + "日" + " " + date.Week);
    }, 1000);
    
    return (
        <>
            <div id="windows11-datebox" style={{ right: config.rights }} tabIndex={0} onContextMenu={(event) => event.preventDefault()}>
                <div className="datebox-head">
                    <div className="head-inner">
                        <span className="box date-box">{dateText}</span>
                        <Tooltip placement="top" title={'关闭面板'} arrow={mergedArrow}>
                            <div className="close-box datepanel-closebox" onClick={() => config.onGetMsg("datebox")}>
                                <svg t="1688193262689" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2288" width="16" height="16"><path d="M364.899556 1024l-91.576889-91.576889L693.745778 512 273.322667 91.576889 364.899556 0l512 512z" fill="#231815" p-id="2289"></path></svg>
                            </div>
                        </Tooltip>
                    </div>
                </div>

                <div className="datebox-content">
                    <Calendar fullscreen={false} style={{ width: "100%", height: "100%", marginTop: "15px" }}/>
                </div>
            </div>
        </>
    )
}

export default Datebox