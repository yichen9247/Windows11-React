
import "./index.scss"
import { useEffect, useId, useState } from "react"
import manageIcon from "../../../../image/icon/taskmanager.png"

const TaskManer = () => {

    const tabins = useId();
    const cavans = useId();

    const barWidth = 10,barSpacing = 4;
    const [screen, setScreen] = useState(true);
    setTimeout(() => setScreen(false),800);
    const [cpuUse, setCpuUse] = useState("100%");
    const [gpuUse, setGpuUse] = useState("100%");
    const [wifiUse, setWifiUse] = useState("100%");
    const [diskUse, setDiskUse] = useState("100%");
    const [memoUse, setMemoUse] = useState("100%");

    const cpuCavans = () => {
        const canvas = document.getElementById('cpu-monitor');
        const ctx = canvas.getContext('2d');
        const barsCount = Math.floor(canvas.width / (barWidth + barSpacing));
        const barHeightMultiplier = canvas.height / 100;
        const bars = new Array(barsCount).fill(0);

        function drawCancans() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.lineWidth = 2;
            ctx.fillStyle = "#26A0DA";
            ctx.strokeStyle = "#999999";
            
            for (var x = 0; x <= canvas.width; x += 50) {  
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvas.height);
                ctx.stroke();
            }  

            for (var y = 0; y <= canvas.height; y += 50) {  
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
                ctx.stroke();
            }
        
            for (let i = 0; i < bars.length; i++) {
                const barHeight = bars[i] * barHeightMultiplier;
                ctx.fillRect((barWidth + barSpacing) * i, canvas.height - barHeight, barWidth, barHeight);
            }
        }

        function updateBars() {
            const cpuUsageText = Math.random() * 100;
            const cpuUsage = cpuUsageText;
            setCpuUse(Math.floor(cpuUsageText));
            bars.shift();
            bars.push(cpuUsage);
            drawCancans();
        }
        setInterval(updateBars, 1000);
    }

    const gpuCavans = () => {
        const canvas = document.getElementById('gpu-monitor');
        const ctx = canvas.getContext('2d');
        const barsCount = Math.floor(canvas.width / (barWidth + barSpacing));
        const barHeightMultiplier = canvas.height / 100;
        const bars = new Array(barsCount).fill(0);

        function drawCancans() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.lineWidth = 2;
            ctx.fillStyle = "#26A0DA";
            ctx.strokeStyle = "#999999";
            
            for (var x = 0; x <= canvas.width; x += 50) {  
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvas.height);
                ctx.stroke();
            }  

            for (var y = 0; y <= canvas.height; y += 50) {  
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
                ctx.stroke();
            }
        
            for (let i = 0; i < bars.length; i++) {
                const barHeight = bars[i] * barHeightMultiplier;
                ctx.fillRect((barWidth + barSpacing) * i, canvas.height - barHeight, barWidth, barHeight);
            }
        }

        function updateBars() {
            const gpuUsageText = Math.random() * 100;
            const gpuUsage = gpuUsageText;
            setGpuUse(Math.floor(gpuUsageText));
            bars.shift();
            bars.push(gpuUsage);
            drawCancans();
        }
        setInterval(updateBars, 1000);
    }

    const wifiCavans = () => {
        const canvas = document.getElementById('wifi-monitor');
        const ctx = canvas.getContext('2d');
        const barsCount = Math.floor(canvas.width / (barWidth + barSpacing));
        const barHeightMultiplier = canvas.height / 100;
        const bars = new Array(barsCount).fill(0);

        function drawCancans() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.lineWidth = 2;
            ctx.fillStyle = "#26A0DA";
            ctx.strokeStyle = "#999999";
            
            for (var x = 0; x <= canvas.width; x += 50) {  
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvas.height);
                ctx.stroke();
            }  

            for (var y = 0; y <= canvas.height; y += 50) {  
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
                ctx.stroke();
            }
        
            for (let i = 0; i < bars.length; i++) {
                const barHeight = bars[i] * barHeightMultiplier;
                ctx.fillRect((barWidth + barSpacing) * i, canvas.height - barHeight, barWidth, barHeight);
            }
        }

        function updateBars() {
            const wifiUsageText = Math.random() * 100;
            const wifiUsage = wifiUsageText;
            setWifiUse(Math.floor(wifiUsageText));
            bars.shift();
            bars.push(wifiUsage);
            drawCancans();
        }
        setInterval(updateBars, 1000);
    }

    const diskCavans = () => {
        const canvas = document.getElementById('disk-monitor');
        const ctx = canvas.getContext('2d');
        const barsCount = Math.floor(canvas.width / (barWidth + barSpacing));
        const barHeightMultiplier = canvas.height / 100;
        const bars = new Array(barsCount).fill(0);

        function drawCancans() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.lineWidth = 2;
            ctx.fillStyle = "#26A0DA";
            ctx.strokeStyle = "#999999";
            
            for (var x = 0; x <= canvas.width; x += 50) {  
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvas.height);
                ctx.stroke();
            }  

            for (var y = 0; y <= canvas.height; y += 50) {  
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
                ctx.stroke();
            }
        
            for (let i = 0; i < bars.length; i++) {
                const barHeight = bars[i] * barHeightMultiplier;
                ctx.fillRect((barWidth + barSpacing) * i, canvas.height - barHeight, barWidth, barHeight);
            }
        }

        function updateBars() {
            const diskUsageText = Math.random() * 100;
            const diskUsage = diskUsageText;
            setDiskUse(Math.floor(diskUsageText));
            bars.shift();
            bars.push(diskUsage);
            drawCancans();
        }
        setInterval(updateBars, 1000);
    }

    const memoCavans = () => {
        const canvas = document.getElementById('memo-monitor');
        const ctx = canvas.getContext('2d');
        const barsCount = Math.floor(canvas.width / (barWidth + barSpacing));
        const barHeightMultiplier = canvas.height / 100;
        const bars = new Array(barsCount).fill(0);

        function drawCancans() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.lineWidth = 2;
            ctx.fillStyle = "#26A0DA";
            ctx.strokeStyle = "#999999";
            
            for (var x = 0; x <= canvas.width; x += 50) {  
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvas.height);
                ctx.stroke();
            }  

            for (var y = 0; y <= canvas.height; y += 50) {  
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
                ctx.stroke();
            }
        
            for (let i = 0; i < bars.length; i++) {
                const barHeight = bars[i] * barHeightMultiplier;
                ctx.fillRect((barWidth + barSpacing) * i, canvas.height - barHeight, barWidth, barHeight);
            }
        }

        function updateBars() {
            const memoUsageText = Math.random() * 100;
            const memoUsage = memoUsageText;
            setMemoUse(Math.floor(memoUsageText));
            bars.shift();
            bars.push(memoUsage);
            drawCancans();
        }
        setInterval(updateBars, 1000);
    }

    useEffect(() => {
        if (!screen) {
            cpuCavans();
            gpuCavans();
            wifiCavans();
            diskCavans();
            memoCavans();
        }
    },[screen]);

    const ManageMenuBox = () => {
        return (
            <div className="manage-menu-box">
                <div data-id={tabins} className="menu-item" tabIndex={0}>
                    <div className="menu-gpu-img">
                        <svg t="1701087598676" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7173" width="32" height="32"><path d="M768 896H256c-72.533333 0-128-55.466667-128-128V256c0-72.533333 55.466667-128 128-128h512c72.533333 0 128 55.466667 128 128v512c0 72.533333-55.466667 128-128 128zM256 213.333333c-25.6 0-42.666667 17.066667-42.666667 42.666667v512c0 25.6 17.066667 42.666667 42.666667 42.666667h512c25.6 0 42.666667-17.066667 42.666667-42.666667V256c0-25.6-17.066667-42.666667-42.666667-42.666667H256z" p-id="7174" fill="#999999"></path><path d="M640 682.666667H384c-25.6 0-42.666667-17.066667-42.666667-42.666667V384c0-25.6 17.066667-42.666667 42.666667-42.666667h256c25.6 0 42.666667 17.066667 42.666667 42.666667v256c0 25.6-17.066667 42.666667-42.666667 42.666667z m-213.333333-85.333334h170.666666v-170.666666h-170.666666v170.666666zM384 213.333333c-25.6 0-42.666667-17.066667-42.666667-42.666666V42.666667c0-25.6 17.066667-42.666667 42.666667-42.666667s42.666667 17.066667 42.666667 42.666667v128c0 25.6-17.066667 42.666667-42.666667 42.666666zM640 213.333333c-25.6 0-42.666667-17.066667-42.666667-42.666666V42.666667c0-25.6 17.066667-42.666667 42.666667-42.666667s42.666667 17.066667 42.666667 42.666667v128c0 25.6-17.066667 42.666667-42.666667 42.666666zM384 1024c-25.6 0-42.666667-17.066667-42.666667-42.666667v-128c0-25.6 17.066667-42.666667 42.666667-42.666666s42.666667 17.066667 42.666667 42.666666v128c0 25.6-17.066667 42.666667-42.666667 42.666667zM640 1024c-25.6 0-42.666667-17.066667-42.666667-42.666667v-128c0-25.6 17.066667-42.666667 42.666667-42.666666s42.666667 17.066667 42.666667 42.666666v128c0 25.6-17.066667 42.666667-42.666667 42.666667zM981.333333 426.666667h-128c-25.6 0-42.666667-17.066667-42.666666-42.666667s17.066667-42.666667 42.666666-42.666667h128c25.6 0 42.666667 17.066667 42.666667 42.666667s-17.066667 42.666667-42.666667 42.666667zM981.333333 640h-128c-25.6 0-42.666667-17.066667-42.666666-42.666667s17.066667-42.666667 42.666666-42.666666h128c25.6 0 42.666667 17.066667 42.666667 42.666666s-17.066667 42.666667-42.666667 42.666667zM170.666667 426.666667H42.666667c-25.6 0-42.666667-17.066667-42.666667-42.666667s17.066667-42.666667 42.666667-42.666667h128c25.6 0 42.666667 17.066667 42.666666 42.666667s-17.066667 42.666667-42.666666 42.666667zM170.666667 640H42.666667c-25.6 0-42.666667-17.066667-42.666667-42.666667s17.066667-42.666667 42.666667-42.666666h128c25.6 0 42.666667 17.066667 42.666666 42.666666s-17.066667 42.666667-42.666666 42.666667z" p-id="7175" fill="#999999"></path></svg>
                    </div>
                    <div className="menu-content">
                        <span className="menu-name" style={{ fontSize: "20px" }}>CPU</span>
                        <span className="menu-text" style={{ fontSize: "14px" }}>{cpuUse}% 4.82GHz</span>
                    </div>
                </div>

                <div className="menu-item" tabIndex={0}>
                    <div data-id={tabins} className="menu-gpu-img">
                        <svg t="1701087636058" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8463" width="32" height="32"><path d="M672.256 298.496H351.744c-29.184 0-52.224 23.552-52.224 52.224V670.72c0 29.184 23.552 52.224 52.224 52.224h320c29.184 0 52.224-23.552 52.224-52.224V351.232c0.512-29.184-23.04-52.736-51.712-52.736z m-11.776 360.96H363.52v-296.96h296.96v296.96z" fill="#999999" p-id="8464"></path><path d="M1008.64 357.376V293.376h-82.432V189.44c0-50.688-40.96-91.648-91.648-91.648h-101.376v-81.92h-64v81.92h-121.856v-81.92H483.328v81.92H361.472v-81.92H297.472v81.92H185.856c-50.688 0-91.648 40.96-91.648 91.648v103.936h-81.92v64h81.92v121.856h-81.92v64h81.92V665.6h-81.92v64h81.92v109.056c0 50.688 40.96 91.648 91.648 91.648h111.616v81.92h64v-81.92h121.856v81.92h64v-81.92h121.856v81.92h64v-81.92H834.56c50.688 0 91.648-40.96 91.648-91.648v-109.056H1008.64V665.6h-82.432v-121.856H1008.64V479.232h-82.432V357.376H1008.64z m-146.432 480.768c0 15.36-12.288 27.648-27.648 27.648H185.856c-15.36 0-27.648-12.288-27.648-27.648V189.44c0-15.36 12.288-27.648 27.648-27.648H834.56c15.36 0 27.648 12.288 27.648 27.648v648.704z" fill="#999999" p-id="8465"></path><path d="M413.184 411.136h65.024V476.16H413.184z" fill="#999999" p-id="8466"></path></svg>
                    </div>
                    <div className="menu-content">
                        <span className="menu-name" style={{ fontSize: "20px" }}>GPU</span>
                        <span className="menu-text" style={{ fontSize: "14px" }}>{gpuUse}% 4.82GHz</span>
                    </div>
                </div>

                <div data-id={tabins} className="menu-item" tabIndex={0}>
                    <div className="menu-gpu-img">
                        <svg t="1701087724831" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="12577" width="32" height="32"><path d="M825.6 820.48a520.96 520.96 0 0 0-85.333333-54.186667 730.88 730.88 0 0 0 42.666666-232.106666h170.666667a438.186667 438.186667 0 0 1-128 286.293333z m-196.266667 115.626667a349.44 349.44 0 0 0 80.64-104.106667 444.586667 444.586667 0 0 1 59.306667 35.84 438.613333 438.613333 0 0 1-139.52 68.266667zM554.666667 902.4v-115.626667a441.173333 441.173333 0 0 1 93.013333 18.773334A206.933333 206.933333 0 0 1 554.666667 902.4z m0-368.213333h156.586666a696.746667 696.746667 0 0 1-34.986666 205.226666 512 512 0 0 0-121.6-24.746666z m0-224.426667a506.026667 506.026667 0 0 0 121.6-24.746667 674.986667 674.986667 0 0 1 33.706666 177.493334H554.666667z m0-187.733333a206.933333 206.933333 0 0 1 93.013333 96.426666 439.893333 439.893333 0 0 1-93.013333 18.773334z m217.6 34.56a438.186667 438.186667 0 0 1-59.306667 35.84 350.72 350.72 0 0 0-80.64-104.106667 436.48 436.48 0 0 1 138.24 67.84z m178.773333 305.92h-170.666667a721.066667 721.066667 0 0 0-42.666666-203.946667 512 512 0 0 0 85.333333-54.186667 438.186667 438.186667 0 0 1 126.293333 257.706667z m-469.333333-224a437.76 437.76 0 0 1-102.826667-19.626667 194.986667 194.986667 0 0 1 102.826667-100.266667z m0 224h-166.4a682.666667 682.666667 0 0 1 33.706666-177.493334 512 512 0 0 0 131.84 25.6v151.893334z m0 251.733333a508.16 508.16 0 0 0-131.84 25.6 696.746667 696.746667 0 0 1-34.986667-205.226667h166.826667z m0 192a195.84 195.84 0 0 1-102.826667-100.266667 437.76 437.76 0 0 1 102.826667-19.626666z m-227.413334-37.973333H256a438.186667 438.186667 0 0 1 59.306667-35.84 350.72 350.72 0 0 0 80.64 104.106666 436.48 436.48 0 0 1-142.506667-68.693333zM72.533333 534.186667h170.666667a733.44 733.44 0 0 0 42.666667 232.106666 512 512 0 0 0-85.333334 54.186667 438.186667 438.186667 0 0 1-128-286.293333z m125.866667-330.666667A520.96 520.96 0 0 0 284.586667 256a721.066667 721.066667 0 0 0-42.666667 203.946667h-170.666667a438.186667 438.186667 0 0 1 127.146667-256.426667z m196.266667-115.626667A349.44 349.44 0 0 0 314.026667 192 444.586667 444.586667 0 0 1 256 156.16a438.613333 438.613333 0 0 1 138.24-68.266667zM512 0a512 512 0 1 0 512 512A512 512 0 0 0 512 0z" fill="#999999" p-id="12578"></path></svg>
                    </div>
                    <div className="menu-content">
                        <span className="menu-name" style={{ fontSize: "20px" }}>WIFI</span>
                        <span className="menu-text" style={{ fontSize: "14px" }}>{wifiUse}% 4.82GHz</span>
                    </div>
                </div>

                <div data-id={tabins} className="menu-item" tabIndex={0}>
                    <div className="menu-gpu-img">
                        <svg t="1701139213797" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4397" width="32" height="32"><path d="M768 1024H256a128 128 0 0 1-128-128V128a128 128 0 0 1 128-128h512a128 128 0 0 1 128 128v768a128 128 0 0 1-128 128zM256 64a64 64 0 0 0-64 64v768a64 64 0 0 0 64 64h512a64 64 0 0 0 64-64V128a64 64 0 0 0-64-64z" fill="#999999" p-id="4398"></path><path d="M512 768a256 256 0 1 1 256-256 256 256 0 0 1-256 256z m0-448a192 192 0 1 0 192 192 192 192 0 0 0-192-192z" fill="#999999" p-id="4399"></path><path d="M256 128h64v64H256z" fill="#999999" p-id="4400"></path><path d="M704 128h64v64h-64z" fill="#999999" p-id="4401"></path><path d="M288 832h448v64h-448z" fill="#999999" p-id="4402"></path><path d="M512 576a64 64 0 1 1 64-64 64 64 0 0 1-64 64z m0-96V512z" fill="#999999" p-id="4403"></path></svg>
                    </div>
                    <div className="menu-content">
                        <span className="menu-name" style={{ fontSize: "20px" }}>DISK</span>
                        <span className="menu-text" style={{ fontSize: "14px" }}>{diskUse}% 4.82GHz</span>
                    </div>
                </div>

                <div data-id={tabins} className="menu-item" tabIndex={0}>
                    <div className="menu-gpu-img">
                        <svg t="1701087767300" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13817" width="32" height="32"><path d="M256 160h-48c-35.2 0-64 28.8-64 64v576c0 35.2 28.8 64 64 64h608c35.2 0 64-28.8 64-64V224c0-35.2-28.8-64-64-64h-48v288c0 35.2-28.8 64-64 64H320c-35.2 0-64-28.8-64-64V160z m-48-64h608c70.4 0 128 57.6 128 128v576c0 70.4-57.6 128-128 128H208c-70.4 0-128-57.6-128-128V224c0-70.4 57.6-128 128-128z m112 352h384V160H320v288z m288-224c17.6 0 32 14.4 32 32v96c0 17.6-14.4 32-32 32s-32-14.4-32-32v-96c0-17.6 14.4-32 32-32z" fill="#999999" p-id="13818"></path></svg>
                    </div>
                    <div className="menu-content">
                        <span className="menu-name" style={{ fontSize: "20px" }}>Memory</span>
                        <span className="menu-text" style={{ fontSize: "14px" }}>{memoUse}% 4.82GHz</span>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <div id="window-layout-manage-screen" style={{ opacity: screen ? 1 : 0, zIndex: screen ? 2 : -1 }}>
                <img className="application-icon" src={manageIcon} alt="资源管理器"/>
            </div>
            <div id="window-layout-manage-screen" style={{ opacity: screen ? 0 : 1 }} onContextMenu={(event) => event.preventDefault()}>
                <div className="manage-main">
                    <ManageMenuBox/>
                    <div className="manage-content-box">
                        <div data-id={cavans} className="item-box">
                            <div className="content-head">
                                <span className="content-text">Intel(R) Core(TM) i7-10400 CPU @ 2.90GHz</span>
                            </div>
                            <canvas id="cpu-monitor" width="735" height="200" style={{ marginTop: "10px", border: "1px solid #999999", borderRadius: "5px" }} ></canvas>
                        </div>

                        <div data-id={cavans} className="item-box">
                            <div className="content-head">
                                <span className="content-text">Intel(R) Core(TM) NBidia GeForce RTX 4090Ti</span>
                            </div>
                            <canvas id="gpu-monitor" width="735" height="200" style={{ marginTop: "10px", border: "1px solid #999999", borderRadius: "5px" }} ></canvas>
                        </div>

                        <div data-id={cavans} className="item-box">
                            <div className="content-head">
                                <span className="content-text">Intel(R) Core(TM) Ethernet connection (24) I219-V</span>
                            </div>
                            <canvas id="wifi-monitor" width="735" height="200" style={{ marginTop: "10px", border: "1px solid #999999", borderRadius: "5px" }} ></canvas>
                        </div>

                        <div data-id={cavans} className="item-box">
                            <div className="content-head">
                                <span className="content-text">Intel(R) Core(TM) SSD RTX 24GB + 512GB 2EP102</span>
                            </div>
                            <canvas id="disk-monitor" width="735" height="200" style={{ marginTop: "10px", border: "1px solid #999999", borderRadius: "5px" }} ></canvas>
                        </div>

                        <div data-id={cavans} className="item-box">
                            <div className="content-head">
                                <span className="content-text">Intel(R) Core(TM) SSD RTX 24GB + 512GB I219-V</span>
                            </div>
                            <canvas id="memo-monitor" width="735" height="200" style={{ marginTop: "10px", border: "1px solid #999999", borderRadius: "5px" }} ></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TaskManer