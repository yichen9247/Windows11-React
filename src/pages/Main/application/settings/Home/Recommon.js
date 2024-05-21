
import "./Recommon.css"
import "./ComputerInfo.css"

const HomeRecommonSetting = ({ isDeveloper }) => {
    return (
        <div className="recommen-setting card-template">
            <div className="cardHead">
                <span className="cardTitle" style={{ fontSize: "22px" }}>推荐设置</span>
                <span className="cardTextd" style={{ fontSize: "15px" }}>最近使用和常用的设置</span>
            </div>

            <div className="cardItem" style={{ borderBottom: "2px solid #dddddd" }} onClick={isDeveloper}>
                <div className="icon-box">
                    <svg t="1700654908300" className="icon" viewBox="0 0 1275 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4425" width="20" height="20"><path d="M1166.536134 0H109.362763a109.362763 109.362763 0 0 0-109.362763 109.362763v607.327874a109.362763 109.362763 0 0 0 109.362763 109.362763h437.45105v125.038092h-121.028124a36.454254 36.454254 0 1 0 0 72.908508h423.962976a36.454254 36.454254 0 0 0 0-72.908508h-118.840869v-125.038092H1166.536134a109.362763 109.362763 0 0 0 109.362762-109.362763V109.362763a109.362763 109.362763 0 0 0-109.362762-109.362763zM667.841937 951.091492h-60.14952v-125.038092h60.14952zM1202.990388 716.690637a36.454254 36.454254 0 0 1-36.454254 36.454254H109.362763a36.454254 36.454254 0 0 1-36.454255-36.454254V109.362763a36.454254 36.454254 0 0 1 36.454255-36.454255h1057.173371a36.454254 36.454254 0 0 1 36.454254 36.454255z" fill="#000000" p-id="4426"></path></svg>
                </div>
                <span className="item-text">屏幕</span>
                <div className="link-box">
                    <svg t="1700655101895" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7452" width="20" height="20"><path d="M260.638647 900.202463l58.230216 58.506509L705.15365 570.505485l58.20668-58.505485-58.20668-58.506509L318.868863 65.290005l-58.230216 58.505485 386.3073 388.203486L260.638647 900.202463zM646.945947 512" fill="#000000" p-id="7453"></path></svg>
                </div>
            </div>

            <div className="cardItem" style={{ borderBottom: "2px solid #dddddd" }} onClick={isDeveloper}>
                <div className="icon-box">
                    <svg t="1700655176061" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9464" width="20" height="20"><path d="M279.3984 287.3856h142.1312v61.44H279.3984z" fill="#000000" p-id="9465"></path><path d="M690.0736 911.36h219.6992V358.0416l-225.28-238.592H128.9728V911.36h561.1008z m-279.9104-61.44v-213.3504h218.4704V849.92z m-219.7504 0V180.8896h467.5072l190.4128 201.5744V849.92h-158.2592v-274.7904H348.7232V849.92z" fill="#000000" p-id="9466"></path></svg>
                </div>
                <span className="item-text">存储</span>
                <div className="link-box">
                    <svg t="1700655101895" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7452" width="20" height="20"><path d="M260.638647 900.202463l58.230216 58.506509L705.15365 570.505485l58.20668-58.505485-58.20668-58.506509L318.868863 65.290005l-58.230216 58.505485 386.3073 388.203486L260.638647 900.202463zM646.945947 512" fill="#000000" p-id="7453"></path></svg>
                </div>
            </div>

            <div className="cardItem" onClick={isDeveloper}>
                <div className="icon-box">
                    <svg t="1700655219778" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10590" width="20" height="20"><path d="M128 420.576v200.864h149.12l175.456 140.064V284.288l-169.792 136.288H128z m132.256-64l204.288-163.968a32 32 0 0 1 52.032 24.96v610.432a32 32 0 0 1-51.968 24.992l-209.92-167.552H96a32 32 0 0 1-32-32v-264.864a32 32 0 0 1 32-32h164.256zM670.784 720.128a32 32 0 0 1-44.832-45.664 214.08 214.08 0 0 0 64.32-153.312 213.92 213.92 0 0 0-55.776-144.448 32 32 0 1 1 47.36-43.04 277.92 277.92 0 0 1 72.416 187.488 278.08 278.08 0 0 1-83.488 198.976zM822.912 858.88a32 32 0 1 1-45.888-44.608A419.008 419.008 0 0 0 896 521.152c0-108.704-41.376-210.848-114.432-288.384a32 32 0 0 1 46.592-43.872c84.16 89.28 131.84 207.04 131.84 332.256 0 127.84-49.76 247.904-137.088 337.728z" fill="#000000" p-id="10591"></path></svg>
                </div>
                <span className="item-text">声音</span>
                <div className="link-box">
                    <svg t="1700655101895" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7452" width="20" height="20"><path d="M260.638647 900.202463l58.230216 58.506509L705.15365 570.505485l58.20668-58.505485-58.20668-58.506509L318.868863 65.290005l-58.230216 58.505485 386.3073 388.203486L260.638647 900.202463zM646.945947 512" fill="#000000" p-id="7453"></path></svg>
                </div>
            </div>
        </div>
    )
}

export default HomeRecommonSetting