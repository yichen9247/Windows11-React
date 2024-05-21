/* eslint-disable react-hooks/exhaustive-deps */

import "./index.css"
import { message } from 'antd'
import { useEffect, useState } from "react"
import drawdesignIcon from "../../../../image/icon/paint.png"

const DrawDesignLayout = () => {
    const [screen, setScreen] = useState(true);
    setTimeout(() => {setScreen(false)},800);

    // eslint-disable-next-line no-unused-vars
    const [messageApi, contextHolder] = message.useMessage();
    // eslint-disable-next-line no-unused-vars
    const isDeveloper = () => {
        messageApi.open({
            type: "warning",
            style: {zIndex: 9999},
            content: "当前功能正在开发中！",
        });
    }

    // eslint-disable-next-line no-unused-vars
    const designCanvas = () => {
        var canvas = document.getElementById("designCavans");
        var context = canvas.getContext("2d");
        
        context.lineWidth = 6;
        context.strokeStyle = "#ff0000";
        
        var isDrawing = false;

        var body = document.querySelector(".design-main");
        
        canvas.addEventListener("mousedown",(event) => {
            isDrawing = true;
            context.beginPath();
            context.moveTo(event.clientX - body.offsetLeft, event.clientY - body.offsetTop);
        });
        
        canvas.addEventListener("mousemove",(event) => {
            if (isDrawing) {
                context.lineTo(event.clientX - body.offsetLeft, event.clientY - body.offsetTop);
                context.stroke();
            }
        });
        
        canvas.addEventListener("mouseup",(event) => {
            isDrawing = false;
        });
    
        canvas.addEventListener("mouseleave",(event) => {
            isDrawing = false;
        });
    }

    useEffect(() => {
        if (!screen) {
            isDeveloper();
            // designCanvas();
        }
    },[screen]);

    return (
        <>
            <div id="window-layout-drawdesign-screen" style={{ opacity: screen ? 1 : 0, zIndex: screen ? 2 : -1 }}>
                <img className="application-icon" src={drawdesignIcon} alt="画图工具"/>
            </div>
            <div id="window-layout-drawdesign-screen" style={{ opacity: screen ? 0 : 1 }} onContextMenu={(event) => event.preventDefault()}>
                <div className="design-main">
                    {contextHolder}
                    <canvas id="designCavans" className="designCavans" width="1080" height="620" ></canvas>
                </div>
            </div>
        </>
    )
}

export default DrawDesignLayout