
import "./index.css"

import { useState } from "react"
import { Divider, Typography } from 'antd'

import windows11 from "../../../../image/windows11.png"
import windowsIcon from "../../../../image/icon/home.png"

const Windows11Layout = () => {
    const [screen, setScreen] = useState(true);
    setTimeout(() => {setScreen(false)},800);
    const { Title, Paragraph, Link } = Typography;
    
    return (
        <>
            <div id="window-layout-windows11-screen" style={{ opacity: screen ? 1 : 0, zIndex: screen ? 2 : -1 }}>
                <img className="application-icon" src={windowsIcon} alt="关于Windows11"/>
            </div>
            <div id="window-layout-windows11-screen" style={{ opacity: screen ? 0 : 1 }} onContextMenu={(event) => event.preventDefault()}>
                <div className="windows11-main">
                    <div className="windows11-head">
                        <img className="windows11-png" src={windows11} alt="Windows11" draggable="false"/>
                        <Divider />
                    </div>
                    
                    <div className="windows11-content">
                        <Title level={4}>
                            <span>项目介绍</span>
                        </Title>
                        <Paragraph>
                            <blockquote>
                                <p>这是一个基于React框架和AntDesign组件库开发的前端高仿Windows项目,使用 HTML、CSS 和 JavaScript 模拟 Windows 11 操作系统的界面与交互。</p>
                            </blockquote>
                        </Paragraph>
                        <Title level={4}>
                            <span>前言密语</span>
                        </Title>
                        <Paragraph>
                            <blockquote>
                                <p>前段时间看见Github上面很多大佬都在做桌面端开源项目，尤其是在看到谭景元Windows12网页版项目后颇为震撼，深受启发，于是在百忙之中开发出了Windows11网页版。</p>
                            </blockquote>
                        </Paragraph>
                        <Title level={4}>
                            <span>开源说明</span>
                        </Title>
                        <Paragraph>
                            <blockquote>
                                <p>本项目作者：Hua（王健铮）</p>
                                <p>本项目链接：<Link href="https://github.com/yichen9247/Windows11-React" target="_blank">https://github.com/yichen9247/Windows11-React</Link></p>
                                <p>此项目是一个开源项目。此项目使用 EPL v2.0 开源许可。开源许可是具有法律效力的合同，请自觉遵守开源许可，尊重他人劳动。</p>
                            </blockquote>
                        </Paragraph>
                        <Divider />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Windows11Layout