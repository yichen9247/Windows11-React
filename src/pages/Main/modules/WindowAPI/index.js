
/**
 * author: Hua
 * layout: WindowAPI
 */

import "./index.css"
import { Watermark } from 'antd'
import { useEffect, useId } from "react"

const WindowHead = ({ name, icon, onApplication, onHeadClick }) => {

    useEffect(()=> {
        var innerX = window.innerWidth;
        var innerY = window.innerHeight - 72;
        var layoutFlag,layoutPointTop,layoutPointLeft;
        var layoutHead = document.querySelector(".move-box");
        var layoutBody = document.querySelector(".windows11-window");

        layoutHead.onmousedown = (event) => {
            layoutFlag = true;
            layoutPointTop = event.clientY - layoutBody.getBoundingClientRect().y;
            layoutPointLeft = event.clientX - layoutBody.getBoundingClientRect().x;
        }
        
        window.onmousemove = (event) => {
            var clientX = event.clientX;
            var clientY = event.clientY;
            var layoutY = layoutBody.offsetTop;
            var layoutX = layoutBody.offsetLeft;
            var mouseX = layoutX + clientX - layoutX; // 鼠标在X轴上移动的距离  
            var mouseY = layoutY + clientY - layoutY; // 鼠标在Y轴上移动的距离

            if (layoutFlag === true) {
                if (mouseX > 0 && mouseX < innerX) {
                    layoutBody.style.left = mouseX - layoutPointLeft + "px";
                }
                if (mouseY > 15 && mouseY < innerY) {
                    layoutBody.style.top = mouseY - layoutPointTop + "px";
                }
            }
        }
        layoutHead.onmouseup = () => layoutFlag = false;
    },[name, icon, onApplication, onHeadClick]);

    return(
        <div className="window-head">
            <div className="icon-box" onDoubleClick={() => onHeadClick("max")}>
                <img className="icon-sm" src={icon} alt={name} draggable="false"/>
            </div>
            <span className="window-name">{name}</span>
            <div className="move-box" onDoubleClick={() => onHeadClick("max")}></div>
            <div className="window-right">
                <div className="switch-box close-box" onClick={(event) => {
                    onApplication("content");
                }}>
                    <svg t="1700564722963" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4026" width="20" height="20"><path d="M576 512l277.333333 277.333333-64 64-277.333333-277.333333L234.666667 853.333333 170.666667 789.333333l277.333333-277.333333L170.666667 234.666667 234.666667 170.666667l277.333333 277.333333L789.333333 170.666667 853.333333 234.666667 576 512z" fill="#000000" p-id="4027"></path></svg>
                </div>

                <div className="switch-box reduce-box" onClick={() => onHeadClick("max")}>
                    <svg t="1694774818319" style={{ width: "40%", height: "40%" }} className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1958" width="20" height="20"><path d="M900 64H360c-33.137 0-60 26.863-60 60v146H124c-33.137 0-60 26.863-60 60v570c0 33.137 26.863 60 60 60h570c33.137 0 60-26.863 60-60V724h146c33.137 0 60-26.863 60-60V124c0-33.137-26.863-60-60-60zM664 634v176c0 33.137-26.863 60-60 60H214c-33.137 0-60-26.863-60-60V420c0-33.137 26.863-60 60-60h390c33.137 0 60 26.863 60 60v214z m206-60c0 33.137-26.863 60-60 60h-56V330c0-33.137-26.863-60-60-60H390v-56c0-33.137 26.863-60 60-60h360c33.137 0 60 26.863 60 60v360z" fill="#000000" p-id="1959"></path></svg>
                </div>

                <div className="switch-box minimize-box" onClick={() => onHeadClick("min")}>
                    <svg t="1700565248264" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7608" width="20" height="20"><path d="M863.7 552.5H160.3c-10.6 0-19.2-8.6-19.2-19.2v-41.7c0-10.6 8.6-19.2 19.2-19.2h703.3c10.6 0 19.2 8.6 19.2 19.2v41.7c0 10.6-8.5 19.2-19.1 19.2z" p-id="7609" fill="#000000"></path></svg>
                </div>
            </div>
        </div>
    )
}

const WindowContent = ({ ish5, h5url, name, template }) => {
    return(
        <div className="window-content">
            {ish5
                ? <iframe className="iframe-content" src={h5url} title={name}/>
                : <div className="template-content">
                    {template}
                </div>
            }
        </div>
    )  
}

const CreateWindow = ({ config, id, name, width, height, icon, template, ish5, h5url }) => {

    const window = useId();

    return (
        <>
            <div id={`windows11-window-${id}`} data-id={window} className="windows11-window" style={{ transform: `scale(${config.scale})`, opacity: config.opacity, display: config.minMode ? "none" : "block", width: config.maxMode ? "100%" : width, height: config.maxMode ? "100%" : height, minWidth: width, minHeight: height, zIndex: config.maxMode ? 6 : 3}} tabIndex={0} onContextMenu={(event) => event.preventDefault()}>
                <Watermark content="" style={{ width: "100%", height: "100%" }}>
                    <WindowHead id={id} name={name} icon={icon} onApplication={config.onApplication} onHeadClick={config.onHeadClick} />
                    <WindowContent ish5={ish5} h5url={h5url} name={name} template={template} />
                </Watermark>
            </div>
        </>
    )
}

export default CreateWindow