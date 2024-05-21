
import "./index.css"
import { createRef, useState } from "react"
import { message, FloatButton  } from 'antd'
import notepadIcon from "../../../../image/icon/notepad.png"
import { ClearOutlined, AppstoreOutlined, FileTextOutlined } from '@ant-design/icons'

const LayoutNotepad = () => {
    const textareaValue = createRef(null);
    const [screen, setScreen] = useState(true);
    setTimeout(() => setScreen(false),800);
    const [messageApi, contextHolder] = message.useMessage();

    return (
        <>
            <div id="window-layout-notepad-screen" style={{ opacity: screen ? 1 : 0, zIndex: screen ? 2 : -1 }}>
                <img className="application-icon" src={notepadIcon} alt="资源管理器"/>
            </div>
            <div id="window-layout-notepad-screen" style={{ opacity: screen ? 0 : 1 }} onContextMenu={(event) => event.preventDefault()}>
                {contextHolder}
                <textarea ref={textareaValue} className="notepad-content" autoFocus />
                <FloatButton.Group shape="square" trigger="click" type="primary" style={{ right: 48, bottom: 48, zIndex: 10001 }} icon={<AppstoreOutlined />}>
                    <FloatButton icon={<ClearOutlined />} style={{ marginBottom: 5 }} onClick={() => {
                        textareaValue.current.value = null;
                        messageApi.open({
                            type: "success",
                            style: {zIndex: 9999},
                            content: "清空文本框内容成功！",
                        });
                    }}/>
                    <FloatButton icon={<FileTextOutlined />} style={{ marginBottom: 5 }} onClick={() => {
                        navigator.clipboard.writeText(textareaValue.current.value).then(function() {  
                            messageApi.open({
                                type: "success",
                                style: {zIndex: 9999},
                                content: "复制文本框内容成功！",
                            });
                        }, function(err) {  
                            messageApi.open({
                                type: "error",
                                style: {zIndex: 9999},
                                content: "复制文本框内容失败！",
                            });
                        });
                        
                    }}/>
                </FloatButton.Group>
            </div>
        </>
    )
}

export default LayoutNotepad