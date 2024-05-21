
import "./TimeInfo.css"
import { useState } from "react";
import dateTool from "../../../scripts/dates"

const LanguageTimeInfo = () => {
    const [timeText, setTime] = useState("00:00");
    const [dateText, setDate] = useState("2023年01月01日 星期天");
    setInterval(() => {
        // eslint-disable-next-line no-useless-concat
        var date = new dateTool().Date();
        // eslint-disable-next-line no-useless-concat
        setTime(date.Hours + ":" + date.Min);
        // eslint-disable-next-line no-useless-concat
        setDate(date.Year + "年" + date.Mouth + "月" + date.Date + "日" + " " + date.Week);
    }, 1000);

    return(
        <div className="language-time-info">
            <span className="time-date" style={{ fontSize: "32px" }}>{timeText}</span>
            <span className="time-text" style={{ color: "#666666" }}>{dateText}</span>
        </div>
    )
}

export default LanguageTimeInfo