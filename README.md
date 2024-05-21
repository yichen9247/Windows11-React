# Windows11 - React

一个基于React框架和AntDesign组件库开发的前端高仿Windows项目,使用 HTML、CSS 和 JavaScript 模拟 Windows 11 操作系统的界面与交互。

## 前言密语

前段时间看见Github上面很多大佬都在做桌面端开源项目，尤其是在看到谭景元（tjy-gitnub）的 [Windows12网页版](https://github.com/tjy-gitnub/win12) 项目后颇为震撼，深受启发，于是在百忙之中开发出了Windows11网页版。

## 在线体验

https://win.react.yunair.cn/

## 项目截图

![screenshot](https://i.postimg.cc/wvdg50Vh/screenshot.png)

### 启动项目

`npm install`

`npm run start`

## 贡献代码

如果你想要参与到本项目的开发中，首先你需要克隆该项目，其次是为项目安装项目所需的依赖。

项目依赖安装完成后，你就可以参与到本项目的开发中了（好耶，免费的劳动力~）。

`npm run build`

这将把项目的源代码打包成可以使用的文件，打包后的文件在 `build` 里面。

本项目部分PWA应用依赖组件包（AntDesign），有兴趣的可以去他们的 [官网](https://ant-design.antgroup.com/) 看一看。

## 参与开发

项目的桌面应用在 `script/application.js` 里面，这个文件将导出一个数组，数组里面是各种应用的配置对象。

项目的面板应用在 `script/panel/application.js` 里面，这个文件将导出一个数组，数组里面是各种应用的配置对象。

项目的应用程序（我在这里简称为PWA应用）在 `Main\application` 里面，里面用于存放PWA应用的源代码。

对于CSS的编写，请使用 `SCSS` 进行编写，每个组件一个SCSS文件。 

```

import "./index.scss"

const ExampleWindowLayout = ({ name, icon }) => {
    return(
        <div id="window-layout-axample" onContextMenu={(event) => event.preventDefault()}>
            <div className="layout-content">
                <img className="layout-content-icon" src={icon} alt={name}/>
            </div>
        </div>
    )
}

export default ExampleWindowLayout

```

这是示例应用程序（PWA应用）的示例代码，里面提供了创建应用程序和使用API的方法。

## 开源说明

本项目作者：Hua（王健铮）

本项目链接：https://github.com/yichen9247/Windows11-React

此项目是一个开源项目。此项目使用 EPL v2.0 开源许可。开源许可是具有法律效力的合同，请自觉遵守开源许可，尊重他人劳动。

根据许可，你可以对该项目进行传播、分发、修改以及二次发布，包括个人和商业用途，但我方不鼓励一切商业用途。

您必须给出源码来源，包括作者，项目链接（见上）等，必须使用相同的协议开源。

若此项目的源码作为项目的一部分与你私有的源码一起发布时，你可以使用其它协议，但要声明 EPL 部分的内容并声明此部分继续遵循 EPL 协议。

不是在该项目基础上进行增加、修改的，仅参考源码的，不需要开源，但也仅供学习用途。