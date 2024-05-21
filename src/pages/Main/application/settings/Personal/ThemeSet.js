
import "./ThemeSet.css"

import Cookies from 'js-cookie'
import { useEffect, useState } from "react"
import wallpaper from "../../../scripts/wallpaper"
import { useSelector, useDispatch } from "react-redux"
import { Image, Space, Skeleton, message, Typography, Divider, Tag, ColorPicker, Button } from 'antd'
import { setDominColor, setSeconColor, resetDominColor, resetSeconColor } from "../../../../../redux/modules/colorStore"
import { DownloadOutlined, RotateLeftOutlined, RotateRightOutlined, SwapOutlined, ZoomInOutlined, ZoomOutOutlined, AppstoreOutlined } from '@ant-design/icons'

const ThemeSetting = ({ id }) => {

    const dispatch = useDispatch();
    const { Title, Paragraph } = Typography;
    const [showStatus, setShowStatus] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const colorReducer = useSelector( state => state.colorReducer );

    useEffect(() => {
        if (id === 5) {
            setTimeout(() => setShowStatus(true),1000);
        } else {
            setShowStatus(false);
        }
    },[id]);

    const onDownload = (src) => {
        fetch(src)
          .then((response) => response.blob())
          .then((blob) => {
            const url = URL.createObjectURL(new Blob([blob]));
            const link = document.createElement('a');
            link.href = url;
            link.download = 'image.png';
            document.body.appendChild(link);
            link.click();
            URL.revokeObjectURL(url);
            link.remove();
          });
      };

      const recommandColor = [
        '#000000',
        '#000000E0',
        '#000000A6',
        '#00000073',
        '#00000040',
        '#00000026',
        '#0000001A',
        '#00000012',
        '#0000000A',
        '#00000005',
        '#F5222D',
        '#FA8C16',
        '#FADB14',
        '#8BBB11',
        '#52C41A',
        '#13A8A8',
        '#1677FF',
        '#2F54EB',
        '#722ED1',
        '#EB2F96',
        '#F5222D4D',
        '#FA8C164D',
        '#FADB144D',
        '#8BBB114D',
        '#52C41A4D',
        '#13A8A84D',
        '#1677FF4D',
        '#2F54EB4D',
        '#722ED14D',
        '#EB2F964D',
    ];

    return (
        <>
            {contextHolder}
            <Paragraph style={{ marginTop: "10px", marginBottom: "-5px" }}>
                <blockquote>
                    <Title level={3}>主题和背景</Title>
                </blockquote>
            </Paragraph><Divider />

            <div className="color-box">
                <Space>
                    <div className="color-space" style={{ display: "flex" }}>
                        <span className="color-text" style={{ color: "var(--dominColor)" }}>主色：</span>
                        <ColorPicker showText value={colorReducer.dominColor} style={{ background: "none", borderColor: "var(--dominColor)" }} onChange={(color) => {
                            dispatch(setDominColor(color.toRgbString()));
                        }} presets={[{ label: '推荐主色', colors: recommandColor }]} />
                    </div>
                    <div className="color-space" style={{ display: "flex" }}>
                        <span className="color-text" style={{ color: "var(--seconColor)" }}>副色：</span>
                        <ColorPicker showText value={colorReducer.seconColor} style={{ background: "none", borderColor: "var(--seconColor)" }} onChange={(color) => {
                            dispatch(setSeconColor(color.toRgbString()));
                        }} presets={[{ label: '推荐副色', colors: recommandColor }]} />
                    </div>
                    <Button style={{ height: "30px", marginLeft: "10px", background: "none", borderColor: "var(--dominColor)", color: "var(--dominColor)" }} onClick={() => {
                        dispatch(resetDominColor());
                        messageApi.open({
                            type: "success",
                            style: {zIndex: 9999},
                            content: "重置主色成功！",
                        });
                    }} danger>重置主色</Button>
                    <Button style={{ height: "30px", marginLeft: "10px", background: "none", borderColor: "var(--seconColor)", color: "var(--seconColor)" }} onClick={() => {
                        dispatch(resetSeconColor());
                        messageApi.open({
                            type: "success",
                            style: {zIndex: 9999},
                            content: "重置副色成功！",
                        });
                    }} danger>重置副色</Button>
                    <Button style={{ height: "30px", marginLeft: "10px", background: "none" }} onClick={() => {
                        dispatch(resetDominColor());
                        dispatch(resetSeconColor());
                        messageApi.open({
                            type: "success",
                            style: {zIndex: 9999},
                            content: "重置所有颜色成功！",
                        });
                    }} danger>重置所有</Button>
                </Space>
            </div><Divider />
            
            <div className="wallpaper-list">
                <Space wrap size="large" style={{ justifyContent: "space-around" }}>
                    {wallpaper.map(item => (
                        showStatus ? 
                        <div key={item.id} className="wallpaper-box">
                            <Image key={item.id} width={"100%"} height={"100%"} src="error" style={{ borderRadius: "5px" }} fallback={item.path} preview={{
                            toolbarRender: (_,
                              {
                                transform: { scale },
                                actions: { onFlipY, onFlipX, onRotateLeft, onRotateRight, onZoomOut, onZoomIn },
                              },
                            ) => (
                                <Space size={12} className="toolbar-wrapper">
                                    <DownloadOutlined onClick={() => {
                                        messageApi.open({
                                            type: "success",
                                            style: {zIndex: 9999},
                                            content: "下载壁纸成功！",
                                        });
                                        onDownload(item.path);
                                    }}/>
                                    <SwapOutlined rotate={90} onClick={onFlipY} />
                                    <SwapOutlined onClick={onFlipX} />
                                    <RotateLeftOutlined onClick={onRotateLeft} />
                                    <RotateRightOutlined onClick={onRotateRight} />
                                    <ZoomOutOutlined onClick={onZoomOut} />
                                    <ZoomInOutlined onClick={onZoomIn} />
                                    <AppstoreOutlined onClick={() => {
                                        messageApi.open({
                                            type: "success",
                                            style: {zIndex: 9999},
                                            content: "切换壁纸成功！",
                                        });
                                        Cookies.set('wallpaper',item.path);
                                        document.getElementById("root").style.setProperty(`--background`, `url(${item.path})`);
                                    }}>
                                    </AppstoreOutlined>
                                </Space>
                            ),
                          }}/>
                          {item.new && <Tag color="processing" style={{ top: 8, right: 0, opacity: "0.9", position: "absolute" }}>NEW</Tag>}
                        </div>: 
                        <Skeleton.Image key={item.id} active={true} style={{ width: "175px", height: "100px" }}/>
                    ))}
                </Space>
            </div><Divider />
        </>
    )
}

export default ThemeSetting