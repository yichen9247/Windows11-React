
import "./index.css"
import Cookies from 'js-cookie'
import { useDispatch } from "react-redux"
import { useEffect, useId, useRef, useState } from "react"

const PanelBox = ({ config }) => {

    const inputBright = useId();
    const inputAudios = useId();
    const switchValue = useId();
    const dispatch = useDispatch();
    const brightValue = useRef(null);
    const audiosValue = useRef(null);

    // eslint-disable-next-line no-unused-vars
    const [bright, setBright] = useState(100);
    // eslint-disable-next-line no-unused-vars
    const [audios, setAudios] = useState(100);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        Cookies.get('darktheme') === 'true' && switchOnClick("switch-5");
        // eslint-disable-next-line react-hooks/exhaustive-deps
        Cookies.get('batterytheme') === 'true' && switchOnClick("switch-4");
        // eslint-disable-next-line react-hooks/exhaustive-deps
        (Cookies.get('darktheme') === 'true' && Cookies.get('batterytheme') === 'true') && switchOnClick("switch-6");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[dispatch]);

    const rangeOnChange = (task) => {
        switch (task) {
            case "bright":
                document.documentElement.style.filter = `brightness(${brightValue.current.value / 100})`;
                break;
            case "audios":
                break;
            default:
                break;
        }
    }

    const [switches, setSwitches] = useState({
        switch1: true,
        switch2: false,
        switch3: false,
        switch4: false,
        switch5: false,
    });

    const switchOnClick = (item) => {
        switch (item) {
            case "switch-1":
                if (switches["switch3"]) {
                    setSwitches({ ...switches, switch3: false, switch1: true });
                } else {
                    setSwitches({ ...switches, switch3: false, switch1: !switches["switch1"] });
                }
                break;
            case "switch-2":
                setSwitches({ ...switches, switch2: !switches["switch2"] });
                break;
            case "switch-3":
                if (switches["switch3"]) {
                    setSwitches({ ...switches, switch3: false, switch1: false });
                } else {
                    setSwitches({ ...switches, switch3: true, switch1: false });
                }
                break;
            case "switch-4":
                config.onSwitch("batteryTheme", !switches["switch4"]);
                setSwitches({ ...switches, switch4: !switches["switch4"] });
                break;
            case "switch-5":
                config.onSwitch("darkTheme", !switches["switch5"]);
                setSwitches({ ...switches, switch5: !switches["switch5"] });
                break;
            case "switch-6":
                if (switches["switch4"] && switches["switch5"]) {
                    config.onSwitch("darkTheme", false);
                    config.onSwitch("batteryTheme", false);
                    setSwitches({ ...switches, switch4: false, switch5: false });
                } else {
                    config.onSwitch("darkTheme", true);
                    config.onSwitch("batteryTheme", true);
                    setSwitches({ ...switches, switch4: true, switch5: true });
                }
                break;
            default:
                break;
        }
    } 

    return (
        <>
            <div id="windows11-panelbox" style={{ bottom: config.bottom }} tabIndex={0} onContextMenu={(event) => event.preventDefault()}>
                <div className="panelbox-content">
                    <div className="content-inner">
                        <div className="panelbox-switch">

                            <div id={switchValue} className="switch-item">
                                <div id="windows11-switch-0" className={switches['switch1'] ? "item-check stateTure" :"item-check" } onClick={() => switchOnClick("switch-1")}>
                                    <svg t="1702298035701" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5846" width="28" height="28"><path d="M1012.3915 297.221c-276.295-276.295-724.404-276.295-1000.699 0-15.59 15.59-15.59 40.798 0 56.277 15.59 15.589 40.797 15.589 56.276 0 245.227-245.228 642.92-245.228 888.147 0 15.59 15.589 40.797 15.589 56.276 0 15.479-15.48 15.479-40.687 0-56.277z m-850.666 171.15c-15.59 15.59-15.59 40.798 0 56.277 15.59 15.59 40.797 15.59 56.276 0 162.306-162.306 425.554-162.306 587.86 0 15.589 15.59 40.797 15.59 56.276 0 15.59-15.59 15.59-40.798 0-56.276-193.374-193.374-506.928-193.374-700.412 0z m551.042 181.544l0.221-0.221c-110.562-110.562-289.783-110.562-400.235 0-15.59 15.59-15.59 40.797 0 56.276 15.59 15.59 40.797 15.59 56.276 0 79.494-79.494 208.3-79.494 287.683 0l0.221-0.221a40.39 40.39 0 0 0 2.985 3.317c15.59 15.589 40.798 15.589 56.277 0 15.589-15.59 15.589-40.798 0-56.276-1.217-0.996-2.322-1.88-3.428-2.875zM453.3885 874.909c0 32.974 26.73 59.704 59.704 59.704 32.973 0 59.703-26.73 59.703-59.704 0-32.973-26.73-59.704-59.703-59.704-32.974 0-59.704 26.73-59.704 59.704z" fill="#000000" p-id="5847"></path></svg>
                                </div>
                                <span className="item-name">无线网络</span>
                            </div>

                            <div id={switchValue} className="switch-item">
                                <div id="windows11-switch-0" className={switches['switch2'] ? "item-check stateTure" :"item-check" } onClick={() => switchOnClick("switch-2")}>
                                    <svg t="1702297991777" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4742" width="28" height="28"><path d="M872.6 762.7L547 512l325.7-250.7c5.5-4.2 8.6-10.9 8.3-17.8-0.3-6.9-4-13.3-9.8-17L523.5 3.4c-6.6-4.2-14.9-4.5-21.8-0.8-6.8 3.7-11.1 10.9-11.1 18.7v447.3L177.4 227.5c-9.3-7.2-22.7-5.4-29.9 3.9-7.2 9.3-5.4 22.7 3.9 29.9L477 512 151.4 762.7c-9.3 7.2-11.1 20.6-3.9 29.9 7.2 9.3 20.6 11.1 29.9 3.9l313.3-241.2v447.3c0 7.8 4.3 15 11.1 18.7 3.2 1.7 6.7 2.6 10.2 2.6 4 0 8-1.1 11.5-3.4l347.6-223c5.8-3.8 9.5-10.1 9.8-17 0.3-6.9-2.7-13.5-8.3-17.8zM533.3 60.4L822.6 246 533.3 468.7V60.4z m0 903.2V555.4l289.3 222.7-289.3 185.5z" fill="#000000" p-id="4743"></path></svg>
                                </div>
                                <span className="item-name">蓝牙开关</span>
                            </div>

                            <div id={switchValue} className="switch-item">
                                <div id="windows11-switch-0" className={switches['switch1'] === false ? switches['switch3'] ? "item-check stateTure" : "item-check" :"item-check" } onClick={() => switchOnClick("switch-3")}>
                                    <svg t="1702298179099" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8092" width="28" height="28"><path d="M1006.5459 173.064104c18.041733-54.332435 14.409006-101.472557-14.457767-134.142722l-3.571775-3.571776C955.968096 6.312168 908.949878 2.740393 854.788108 20.830887c-47.018219 14.518719-90.330568 43.507395-130.034571 79.749336l-93.865773 94.268055L204.785917 93.314768c-18.029543-3.571776-39.691812 0-54.149579 14.53091l-86.770983 87.0026c-10.83723 10.83723-18.041733 28.988676-14.469958 50.711898 3.632727 18.090494 14.469957 32.609213 28.927725 39.862477l299.760954 163.131399L251.743184 575.394749l-108.311349-28.976486c-7.265455-3.571776-14.457767-3.571776-18.090494-3.571776-14.469957 0-28.927724 7.131361-39.764955 18.090495l-61.354082 65.218426C9.752346 637.05359 6.119619 655.144084 6.119619 669.601851c0 18.163637 10.82504 32.670165 21.66227 39.874668L193.936497 832.73325l122.781307 166.764126c10.83723 14.457767 25.294997 21.723222 39.764954 21.723222h3.571776c14.457767 0 28.915534-7.204503 39.740574-18.090494l64.999-65.291569c14.457767-14.457767 21.723222-36.180989 14.457767-54.332435l-28.854583-108.738012 126.340892-126.877268 162.534071 300.833706c10.83723 18.163637 25.294997 25.416901 36.132228 28.988677 7.192312 3.632727 10.82504 3.632727 14.457767 3.632727 14.457767 0 25.294997-3.571776 36.120037-10.83723l86.66127-65.279378c18.029543-14.469957 25.282807-36.254131 21.66227-57.977353l-101.179989-449.446386 93.975486-94.268055c36.120037-36.180989 64.98681-79.688384 79.444576-130.461233zM752.669461 377.142922l109.920477 480.812183-66.0108 47.310788-205.139379-371.537795-227.228312 225.911753 40.28914 142.066457-43.970629 47.298597L243.283074 792.383158 78.371883 668.577861l47.603356-47.298597 142.956353 39.984381 227.228312-225.80204L118.600071 231.394977l66.071752-65.523185 465.391377 109.262197 124.5611-120.221331c29.281245-29.159341 65.949848-51.004467 102.606261-65.523186 40.350092-14.579671 54.929763-3.681489 62.30493 0 3.693679 7.265455 11.007895 21.845125 0 61.902649a223.242064 223.242064 0 0 1-65.998609 101.996743l-120.867421 123.793107v0.060951z" fill="#000000" p-id="8093"></path></svg>
                                </div>
                                <span className="item-name">飞行模式</span>
                            </div>

                            <div id={switchValue} className="switch-item">
                                <div id="windows11-switch-0" className={switches['switch4'] ? "item-check stateTure" :"item-check" } onClick={() => switchOnClick("switch-4")}>
                                    <svg t="1702298612442" className="icon" viewBox="0 0 1117 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="18267" width="28" height="28"><path d="M1108.945455 470.109091C1099.636364 453.818182 915.781818 93.090909 559.709091 93.090909S19.781818 453.818182 10.472727 470.109091c-13.963636 25.6-13.963636 58.181818 0 83.781818 9.309091 16.290909 193.163636 377.018182 549.236364 377.018182s539.927273-360.727273 549.236364-377.018182c11.636364-25.6 11.636364-58.181818 0-83.781818zM559.709091 837.818182C257.163636 837.818182 94.254545 512 94.254545 512S257.163636 186.181818 559.709091 186.181818s465.454545 325.818182 465.454545 325.818182-162.909091 325.818182-465.454545 325.818182z" fill="#000000" p-id="18268"></path><path d="M559.709091 325.818182c-102.4 0-186.181818 83.781818-186.181818 186.181818s83.781818 186.181818 186.181818 186.181818 186.181818-83.781818 186.181818-186.181818-83.781818-186.181818-186.181818-186.181818z m0 279.272727c-51.2 0-93.090909-41.890909-93.090909-93.090909s41.890909-93.090909 93.090909-93.090909 93.090909 41.890909 93.090909 93.090909-41.890909 93.090909-93.090909 93.090909z" fill="#000000" p-id="18269"></path></svg>
                                </div>
                                <span className="item-name">护眼模式</span>
                            </div>

                            <div id={switchValue} className="switch-item">
                                <div id="windows11-switch-0" className={switches['switch5'] ? "item-check stateTure" :"item-check" } onClick={() => switchOnClick("switch-5")}>
                                    <svg t="1702298250593" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10519" width="28" height="28"><path d="M179.285333 721.578667a390.570667 390.570667 0 0 0 326.4 174.506666c214.912 0 389.162667-171.733333 389.162667-383.573333 0-187.989333-137.301333-344.704-318.848-377.344 10.666667 39.253333 16.170667 80.085333 16.170667 121.6 0 237.994667-179.882667 434.517333-412.885334 464.810667z m-69.333333-81.237334h6.570667c214.912 0 389.12-171.690667 389.12-383.573333 0-53.504-11.093333-105.386667-32.298667-153.344L446.421333 42.666667l67.242667 1.109333C772.992 48 981.333333 256.554667 981.333333 512.512 981.333333 771.456 768.384 981.333333 505.685333 981.333333c-190.890667 0-361.002667-111.872-436.053333-281.344L42.666667 639.232l67.285333 1.109333z" fill="#000000" p-id="10520"></path></svg>
                                </div>
                                <span className="item-name">黑暗模式</span>
                            </div>

                            <div id={switchValue} className="switch-item">
                                <div id="windows11-switch-0" className={switches['switch4'] ? switches['switch5'] ? "item-check stateTure" : "item-check" :"item-check" } onClick={() => switchOnClick("switch-6")}>
                                    <svg t="1702298470875" className="icon" viewBox="0 0 1126 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14944" width="28" height="28"><path d="M1126.15627 683.748272H0L193.986835 69.333698a91.018918 91.018918 0 0 1 88.511103-69.333698h575.322171a91.608992 91.608992 0 0 1 88.511103 70.513846z m-1011.976947-83.642992h899.862883L865.786108 89.691251a7.523444 7.523444 0 0 0-7.375925-6.048258h-575.322171a7.523444 7.523444 0 0 0-7.375925 5.90074l-1.03263 3.540444z" fill="#000000" p-id="14945"></path><path d="M519.265139 628.133796h83.642992v354.044413H519.265139z" fill="#000000" p-id="14946"></path><path d="M870.359182 1023.925946H250.781459a41.895256 41.895256 0 1 1 0-83.642993h619.577723a41.895256 41.895256 0 0 1 0 83.642993z" fill="#000000" p-id="14947"></path></svg>
                                </div>
                                <span className="item-name">夜间模式</span>
                            </div>

                        </div>

                        <div className="panel-ranges">
                            <div className="input-box" id={inputBright}>
                                <div className="icon-box">
                                    <svg t="1702299259073" className="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="19706" width="28" height="28"><path d="M919.5 486.405h-57.397c-2.746-38.316-11.672-75.538-26.656-110.963-14.344-33.913-33.71-65.016-57.722-92.753l40.582-40.582c9.995-9.996 9.995-26.202 0-36.196-9.996-9.996-26.202-9.995-36.196 0l-40.582 40.582c-27.738-24.012-58.84-43.378-92.753-57.721-35.425-14.983-72.647-23.91-110.963-26.656v-57.397c0-14.135-11.46-25.595-25.595-25.595s-25.595 11.46-25.595 25.595v57.397c-38.316 2.746-75.538 11.673-110.963 26.656-33.913 14.344-65.015 33.71-92.753 57.722l-40.582-40.583c-9.995-9.995-26.2-9.996-36.196 0-9.995 9.995-9.995 26.201 0 36.196l40.582 40.583c-24.012 27.737-43.378 58.84-57.72 92.753-14.984 35.425-23.91 72.647-26.657 110.963h-57.397c-14.135 0-25.595 11.46-25.595 25.595 0 14.136 11.46 25.595 25.595 25.595h57.397c2.747 38.316 11.672 75.539 26.656 110.963 14.343 33.913 33.71 65.015 57.721 92.753l-40.582 40.583c-9.995 9.995-9.995 26.2 0 36.196 4.998 4.997 11.549 7.496 18.099 7.496s13.1-2.5 18.098-7.496l40.582-40.583c27.738 24.012 58.84 43.378 92.753 57.721 35.425 14.984 72.647 23.91 110.963 26.657v57.396c0 14.135 11.46 25.595 25.595 25.595s25.595-11.46 25.595-25.595v-57.396c38.316-2.746 75.538-11.673 110.963-26.657 33.913-14.343 65.016-33.71 92.753-57.721l40.582 40.583a25.512 25.512 0 0 0 18.098 7.496c6.55 0 13.102-2.5 18.099-7.496 9.995-9.995 9.995-26.2 0-36.196l-40.582-40.583c24.012-27.738 43.378-58.84 57.722-92.753 14.983-35.425 23.91-72.647 26.656-110.963h57.397c14.135 0 25.595-11.459 25.595-25.595-0.002-14.135-11.462-25.596-25.597-25.596zM512.22 811.62c-165.211 0-299.62-134.408-299.62-299.618S347.01 212.383 512.22 212.383 811.837 346.79 811.837 512 677.43 811.619 512.219 811.619z" fill="#000000" p-id="19707"></path><path d="M500.96 255.517c-64.988 0-126.038 26.794-171.902 75.447C283.43 379.368 258.3 443.66 258.3 512s25.13 132.633 70.758 181.036c45.864 48.653 106.914 75.447 171.903 75.447 8.48 0 15.356-6.876 15.356-15.357V270.873c0-8.481-6.875-15.356-15.356-15.356z m-15.356 74.316h-109.7c31.203-24.372 68.866-39.886 109.7-43.016v43.016z m-141.677 30.714h141.677v53.237H310.143c8.866-19.465 20.285-37.371 33.784-53.237z m-54.355 167.901h196.032v53.237H299.347c-5.18-16.961-8.523-34.795-9.775-53.237z m-0.124-30.713c1.084-18.428 4.25-36.26 9.255-53.237h186.902v53.237H289.448z m21.713 114.664h174.443v53.237H345.797c-13.804-15.81-25.503-33.727-34.636-53.237z m67.578 83.95h106.865v40.835c-39.604-3.036-76.227-17.719-106.865-40.835z" fill="#000000" p-id="19708"></path></svg>
                                </div>
                                <input id={inputBright} aria-describedby={inputBright} ref={brightValue} onChange={() => rangeOnChange("bright")} min={10} max={100} defaultValue={bright} type="range" className="input range_brightness windows11-input"/>
                            </div>

                            <div className="input-box" id={inputAudios}>
                                <div className="icon-box">
                                    <svg t="1702299318801" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="21018" width="28" height="28"><path d="M257.493333 322.4l215.573334-133.056c24.981333-15.413333 57.877333-7.914667 73.493333 16.746667 5.301333 8.373333 8.106667 18.048 8.106667 27.914666v555.989334C554.666667 819.093333 530.784 842.666667 501.333333 842.666667c-9.994667 0-19.786667-2.773333-28.266666-8L257.493333 701.6H160c-41.237333 0-74.666667-33.013333-74.666667-73.738667V396.138667c0-40.725333 33.429333-73.738667 74.666667-73.738667h97.493333z m26.133334 58.4a32.298667 32.298667 0 0 1-16.96 4.8H160c-5.888 0-10.666667 4.714667-10.666667 10.538667v231.733333c0 5.813333 4.778667 10.538667 10.666667 10.538667h106.666667c5.994667 0 11.872 1.664 16.96 4.8L490.666667 770.986667V253.013333L283.626667 380.8zM800.906667 829.653333a32.288 32.288 0 0 1-45.248-0.757333 31.317333 31.317333 0 0 1 0.768-44.693333c157.653333-150.464 157.653333-393.962667 0-544.426667a31.317333 31.317333 0 0 1-0.768-44.682667 32.288 32.288 0 0 1 45.248-0.757333c183.68 175.306667 183.68 460.010667 0 635.317333z m-106.901334-126.186666a32.288 32.288 0 0 1-45.248-1.216 31.328 31.328 0 0 1 1.237334-44.672c86.229333-80.608 86.229333-210.56 0-291.178667a31.328 31.328 0 0 1-1.237334-44.672 32.288 32.288 0 0 1 45.248-1.216c112.885333 105.546667 112.885333 277.418667 0 382.965333z" fill="#000000" p-id="21019"></path></svg>
                                </div>
                                <input id={inputAudios} aria-describedby={inputAudios} ref={audiosValue} min={10} max={100} defaultValue={audios} type="range" className="windows11-input input range_audio"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="panelbox-footent">
                    <div className="footent-inner">
                        <div className="icon-box">
                            <svg className="not-allowTheme" xmlns="http://www.w3.org/2000/svg" height="20" width="20" fill="none" viewBox="0 0 24 24"><path d="M17 6a3 3 0 0 1 3 3v1h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1v1a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h12Zm-.002 1.5H5a1.5 1.5 0 0 0-1.494 1.356L3.5 9v6a1.5 1.5 0 0 0 1.355 1.493L5 16.5h11.998a1.5 1.5 0 0 0 1.493-1.355l.007-.145V9a1.5 1.5 0 0 0-1.355-1.493l-.145-.007ZM6 9h10a1 1 0 0 1 .993.883L17 10v4a1 1 0 0 1-.883.993L16 15H6a1 1 0 0 1-.993-.883L5 14v-4a1 1 0 0 1 .883-.993L6 9h10H6Z"></path></svg>
                        </div>
                        <span className="footent-text not-allowTheme">100%</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PanelBox