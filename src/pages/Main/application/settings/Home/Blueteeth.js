
const HomeBlueteeth = ({ isDeveloper }) => {
    return (
        <div className="recommen-blueteeth card-template">
            <div className="cardHead">
                <span className="cardTitle" style={{ fontSize: "22px" }}>蓝牙设备</span>
                <span className="cardTextd" style={{ fontSize: "15px" }}>管理、添加和删除蓝牙设备</span>
            </div>

            <div className="cardItem" onClick={isDeveloper}>
                <div className="icon-box">
                    <svg t="1700656563674" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11732" width="20" height="20"><path d="M756.736 679.808l0.096-0.112L561.168 512l195.648-167.696-0.096-0.112c6.848-5.872 11.28-14.48 11.28-24.192a31.84 31.84 0 0 0-11.264-24.192l0.096-0.112-224-192-0.096 0.112C527.136 99.008 519.952 96 512 96a32 32 0 0 0-32 32v314.416l-171.168-146.72-0.096 0.112c-5.6-4.8-12.784-7.808-20.736-7.808a32 32 0 0 0-32 32c0 9.712 4.432 18.32 11.264 24.192l-0.096 0.112L462.832 512 267.168 679.696l0.096 0.112A31.84 31.84 0 0 0 256 704a32 32 0 0 0 32 32c7.952 0 15.136-3.008 20.736-7.808l0.096 0.112L480 581.584V896a32 32 0 0 0 32 32c7.952 0 15.136-3.008 20.736-7.808l0.096 0.112 224-192-0.096-0.112A31.84 31.84 0 0 0 768 704a31.84 31.84 0 0 0-11.264-24.192zM686.832 704L544 826.416V581.584L686.832 704zM544 442.416V197.584L686.832 320 544 442.416z" fill="#000000" p-id="11733"></path></svg>
                </div>
                <span className="item-text">蓝牙</span>
                <div className="link-box">
                    <svg t="1700655101895" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7452" width="20" height="20"><path d="M260.638647 900.202463l58.230216 58.506509L705.15365 570.505485l58.20668-58.505485-58.20668-58.506509L318.868863 65.290005l-58.230216 58.505485 386.3073 388.203486L260.638647 900.202463zM646.945947 512" fill="#000000" p-id="7453"></path></svg>
                </div>
            </div>
        </div>
    )
}

export default HomeBlueteeth