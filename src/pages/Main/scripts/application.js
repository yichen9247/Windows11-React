
import deskappIcon1 from "../../../image/icon/windows/thispc-sm.png"
import deskappIcon2 from "../../../image/icon/windows/folder-sm.png"
import deskappIcon3 from "../../../image/icon/windows/bin-em.png"
import deskappIcon4 from "../../../image/icon/windows/170.png"
import deskappIcon5 from "../../../image/icon/code.png"
import deskappIcon6 from "../../../image/icon/store.png"
import deskappIcon7 from "../../../image/icon/edge.png"
import deskappIcon8 from "../../../image/icon/powerpoint.png"
import deskappIcon9 from "../../../image/icon/excel.png"
import deskappIcon10 from "../../../image/icon/onenote.png"
import deskappIcon11 from "../../../image/icon/outlook.png"
import deskappIcon12 from "../../../image/icon/winWord.png"
import deskappIcon13 from "../../../image/icon/teams.png"
import deskappIcon14 from "../../../image/application/yuanstart.webp"
import deskappIcon15 from "../../../image/application/itab.svg"
import deskappIcon16 from "../../../image/application/netease.png"
import deskappIcon17 from "../../../image/application/TimeBrowse.png"

import ContentWindowLayout from "../application/content"
import BrowserWindowLayout from "../application/browser"
import ExampleWindowLayout from "../application/example"
import ResourceWindowLayout from "../application/resource"

const Application = [
    { id: 1, name: "此电脑", alt: "此电脑", icon: deskappIcon1, width: "1150px", height: "620px", maxDefault: false, ish5: false, h5url: "https://ys.mihoyo.com/", template: <ResourceWindowLayout name={"此电脑"} icon={deskappIcon1} /> },
    { id: 2, name: "资源管理器", alt: "资源管理器", icon: deskappIcon2, width: "1150px", height: "620px", maxDefault: false, ish5: false, h5url: "https://ys.mihoyo.com/", template: <ResourceWindowLayout name={"资源管理器"} icon={deskappIcon2} />  },
    { id: 3, name: "回收站", alt: "回收站", icon: deskappIcon3, width: "900px", height: "550px", maxDefault: false, ish5: false, h5url: "https://ys.mihoyo.com/", template: <ExampleWindowLayout name={"回收站"} icon={deskappIcon3} /> },
    { id: 4, name: "控制面板", alt: "控制面板", icon: deskappIcon4, width: "900px", height: "550px", maxDefault: false, ish5: false, h5url: "https://ys.mihoyo.com/", template: <ExampleWindowLayout name={"控制面板"} icon={deskappIcon4} /> },
    { id: 5, name: "VSCode", alt: "VSCode", icon: deskappIcon5, width: "1080px", height: "620px", maxDefault: true, ish5: true, h5url: "https://github1s.com/", template: <ExampleWindowLayout name={"VSCode"} icon={deskappIcon5} /> },
    { id: 6, name: "Store", alt: "Store", icon: deskappIcon6, width: "1080px", height: "620px", maxDefault: true, ish5: true, h5url: "https://apps.microsoft.com/", template: <ExampleWindowLayout name={"Store"} icon={deskappIcon6} /> },
    { id: 7, name: "Browser", alt: "Browser", icon: deskappIcon7, width: "1080px", height: "620px", maxDefault: true, ish5: true, h5url: "https://www.bing.com/", template: <ExampleWindowLayout name={"Browser"} icon={deskappIcon7} /> },
    { id: 8, name: "PowerPoint", alt: "PowerPoint", icon: deskappIcon8, width: "900px", height: "550px", maxDefault: false, ish5: false, h5url: "https://ys.mihoyo.com/", template: <ExampleWindowLayout name={"PowerPoint"} icon={deskappIcon8} /> },
    { id: 9, name: "Excel", alt: "Excel", icon: deskappIcon9, width: "900px", height: "550px", maxDefault: false, ish5: false, h5url: "https://ys.mihoyo.com/", template: <ExampleWindowLayout name={"Excel"} icon={deskappIcon9} /> },
    { id: 10, name: "OneNote", alt: "OneNote", icon: deskappIcon10, width: "900px", height: "550px", maxDefault: false, ish5: false, h5url: "https://ys.mihoyo.com/", template: <ExampleWindowLayout name={"OneNote"} icon={deskappIcon10} /> },
    { id: 11, name: "Outlook", alt: "Outlook", icon: deskappIcon11, width: "900px", height: "550px", maxDefault: false, ish5: false, h5url: "https://ys.mihoyo.com/", template: <ExampleWindowLayout name={"Outlook"} icon={deskappIcon11} /> },
    { id: 12, name: "Winword", alt: "Winword", icon: deskappIcon12, width: "900px", height: "550px", maxDefault: false, ish5: false, h5url: "https://ys.mihoyo.com/", template: <ExampleWindowLayout name={"Winword"} icon={deskappIcon12} /> },
    { id: 13, name: "Teams", alt: "Teams", icon: deskappIcon13, width: "900px", height: "550px", maxDefault: false, ish5: false, h5url: "https://ys.mihoyo.com/", template: <ExampleWindowLayout name={"Teams"} icon={deskappIcon13} /> },
    { id: 14, name: "原神", alt: "原神", icon: deskappIcon14, width: "1080px", height: "620px", maxDefault: true, ish5: true, h5url: "https://ys.fancyb.top/", template: <ContentWindowLayout name={"原神"} icon={deskappIcon14} /> },
    { id: 15, name: "ITab浏览器", alt: "ITab浏览器", icon: deskappIcon15, width: "1080px", height: "620px", maxDefault: true, ish5: true, h5url: "https://go.itab.link/", template: <ContentWindowLayout name={"ITab浏览器"} icon={deskappIcon15} /> },
    { id: 16, name: "网易云音乐", alt: "网易云音乐", icon: deskappIcon16, width: "1080px", height: "620px", maxDefault: true, ish5: true, h5url: "https://music.vue.yunair.cn/", template: <ContentWindowLayout name={"网易云音乐"} icon={deskappIcon16} /> },
    { id: 17, name: "时光浏览器", alt: "时光浏览器", icon: deskappIcon17, width: "1080px", height: "620px", maxDefault: true, ish5: false, h5url: "https://go.itab.link/", template: <BrowserWindowLayout name={"时光浏览器"} icon={deskappIcon17} /> },
];

export default Application