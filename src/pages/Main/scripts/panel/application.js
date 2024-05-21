
import deskappIcon1 from "../../../../image/icon/settings.png"
import deskappIcon2 from "../../../../image/icon/notepad.png"
import deskappIcon3 from "../../../../image/icon/taskmanager.png"
import deskappIcon4 from "../../../../image/application/android.png"
import deskappIcon5 from "../../../../image/application/chatgpt.png"
import deskappIcon6 from "../../../../image/application/vue-color-avatar.png"
import deskappIcon7 from "../../../../image/application/saolei.png"
import deskappIcon8 from "../../../../image/icon/paint.png"
import deskappIcon9 from "../../../../image/icon/home.png"
import deskappIcon10 from "../../../../image/icon/feedback.png"

import Windows11Layout from "../../application/windows11"
import SettingWindowLayout from "../../application/settings"
import NotepadWindowLayout from "../../application/notepad"
import ContentWindowLayout from "../../application/content"
import DrawDesignWindowLayout from "../../application/drawtool"
import TaskMannerWindowLayout from "../../application/taskmaner"

const PanelApplication = [
    { id: 1, name: "设置", alt: "设置", icon: deskappIcon1, width: "1100px", height: "680px", maxDefault: false, ish5: false, h5url: "https://ys.mihoyo.com/", template: <SettingWindowLayout name={"设置"} icon={deskappIcon1} /> },
    { id: 2, name: "记事本", alt: "记事本", icon: deskappIcon2, width: "900px", height: "550px", maxDefault: false, ish5: false, h5url: "https://ys.mihoyo.com/", template: <NotepadWindowLayout name={"记事本"} icon={deskappIcon2} /> },
    { id: 3, name: "任务管理器", alt: "任务管理器", icon: deskappIcon3, width: "1080px", height: "620px", maxDefault: false, ish5: false, h5url: "https://ys.mihoyo.com/", template: <TaskMannerWindowLayout name={"任务管理器"} icon={deskappIcon3} /> },
    { id: 4, name: "Android", alt: "Android", icon: deskappIcon4, width: "440px", height: "770px", maxDefault: true, ish5: true, h5url: "https://android11react.osrc.com/",template: <ContentWindowLayout name={"Android"} icon={deskappIcon4} /> },
    { id: 5, name: "ChatGPT", alt: "ChatGPT", icon: deskappIcon5, width: "1080px", height: "620px", maxDefault: true, ish5: true, h5url: "https://itab.juxw.com/",template: <ContentWindowLayout name={"ChatGPT"} icon={deskappIcon5} /> },
    { id: 6, name: "Color Avatar", alt: "Color Avatar", icon: deskappIcon6, width: "1080px", height: "620px", maxDefault: false, ish5: true, h5url: "https://widget.codelife.cc/colorAvatar/",template: <ContentWindowLayout name={"Color Avatar"} icon={deskappIcon6} /> },
    { id: 7, name: "扫雷游戏", alt: "扫雷游戏", icon: deskappIcon7, width: "1080px", height: "620px", maxDefault: false, ish5: true, h5url: "https://player.zone.msn.com/?hostingEnvironment=edgeCasualGamesHub&gamepath=msminesweeper",template: <ContentWindowLayout name={"扫雷游戏"} icon={deskappIcon7} /> },
    { id: 8, name: "画图工具", alt: "画图工具", icon: deskappIcon8, width: "1080px", height: "620px", maxDefault: true, ish5: false, h5url: "https://ys.mihoyo.com/",template: <DrawDesignWindowLayout name={"画图工具"} icon={deskappIcon8} /> },
    { id: 9, name: "反馈社区", alt: "反馈社区", icon: deskappIcon10, width: "1080px", height: "620px", maxDefault: false, ish5: true, h5url: "https://win.react.yunair.cn/feeds.html",template: <ContentWindowLayout name={"反馈社区"} icon={deskappIcon10} /> },
    { id: 100, name: "关于系统", alt: "关于系统", icon: deskappIcon9, width: "900px", height: "550px", maxDefault: false, ish5: false, h5url: "https://ys.mihoyo.com/", template: <Windows11Layout name={"关于系统"} icon={deskappIcon9} /> },
]

export default PanelApplication