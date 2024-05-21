
import "../TemplateList.css"

const SystemSettingList = ({ isDeveloper }) => {
    return (
        <ul className="sytsem-list template-list">
            <li className="card-item" onClick={isDeveloper}>
                <div className="icon-box">
                    <svg t="1700654908300" className="icon" viewBox="0 0 1275 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4425" width="20" height="20"><path d="M1166.536134 0H109.362763a109.362763 109.362763 0 0 0-109.362763 109.362763v607.327874a109.362763 109.362763 0 0 0 109.362763 109.362763h437.45105v125.038092h-121.028124a36.454254 36.454254 0 1 0 0 72.908508h423.962976a36.454254 36.454254 0 0 0 0-72.908508h-118.840869v-125.038092H1166.536134a109.362763 109.362763 0 0 0 109.362762-109.362763V109.362763a109.362763 109.362763 0 0 0-109.362762-109.362763zM667.841937 951.091492h-60.14952v-125.038092h60.14952zM1202.990388 716.690637a36.454254 36.454254 0 0 1-36.454254 36.454254H109.362763a36.454254 36.454254 0 0 1-36.454255-36.454254V109.362763a36.454254 36.454254 0 0 1 36.454255-36.454255h1057.173371a36.454254 36.454254 0 0 1 36.454254 36.454255z" fill="#000000" p-id="4426"></path></svg>
                </div>
                <div className="text-box">
                    <span className="card-name">屏幕</span>
                    <span className="card-text">显示器、亮度、夜间模式、显示器配置文件</span>
                </div>
                <div className="link-box">
                    <svg t="1700655101895" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7452" width="20" height="20"><path d="M260.638647 900.202463l58.230216 58.506509L705.15365 570.505485l58.20668-58.505485-58.20668-58.506509L318.868863 65.290005l-58.230216 58.505485 386.3073 388.203486L260.638647 900.202463zM646.945947 512" fill="#000000" p-id="7453"></path></svg>
                </div>
            </li>

            <li className="card-item" onClick={isDeveloper}>
                <div className="icon-box">
                    <svg t="1700655219778" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="10590" width="20" height="20"><path d="M128 420.576v200.864h149.12l175.456 140.064V284.288l-169.792 136.288H128z m132.256-64l204.288-163.968a32 32 0 0 1 52.032 24.96v610.432a32 32 0 0 1-51.968 24.992l-209.92-167.552H96a32 32 0 0 1-32-32v-264.864a32 32 0 0 1 32-32h164.256zM670.784 720.128a32 32 0 0 1-44.832-45.664 214.08 214.08 0 0 0 64.32-153.312 213.92 213.92 0 0 0-55.776-144.448 32 32 0 1 1 47.36-43.04 277.92 277.92 0 0 1 72.416 187.488 278.08 278.08 0 0 1-83.488 198.976zM822.912 858.88a32 32 0 1 1-45.888-44.608A419.008 419.008 0 0 0 896 521.152c0-108.704-41.376-210.848-114.432-288.384a32 32 0 0 1 46.592-43.872c84.16 89.28 131.84 207.04 131.84 332.256 0 127.84-49.76 247.904-137.088 337.728z" fill="#000000" p-id="10591"></path></svg>
                </div>
                <div className="text-box">
                    <span className="card-name">声音</span>
                    <span className="card-text">音量、输入、输出、声音设备</span>
                </div>
                <div className="link-box">
                    <svg t="1700655101895" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7452" width="20" height="20"><path d="M260.638647 900.202463l58.230216 58.506509L705.15365 570.505485l58.20668-58.505485-58.20668-58.506509L318.868863 65.290005l-58.230216 58.505485 386.3073 388.203486L260.638647 900.202463zM646.945947 512" fill="#000000" p-id="7453"></path></svg>
                </div>
            </li>

            <li className="card-item" onClick={isDeveloper}>
                <div className="icon-box">
                    <svg t="1700727320331" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4053" width="20" height="20"><path d="M512 64c16.569 0 30 13.431 30 30l0.003 36.008C681.395 137.891 792 253.424 792 394.79v201.955a30 30 0 0 0 14.1 25.44l48.92 30.575C895.443 678.025 920 722.331 920 770c0 49.706-40.294 90-90 90H638.521C624.978 917.335 573.471 960 512 960c-61.471 0-112.978-42.666-126.521-100H194c-49.706 0-90-40.294-90-90 0-47.669 24.557-91.975 64.98-117.24l48.92-30.575a30 30 0 0 0 14.1-25.44V394.79c0-141.366 110.605-256.9 249.998-264.782L482 94c0-16.569 13.431-30 30-30z m63.264 796H448.736c11.235 23.65 35.34 40 63.264 40s52.03-16.35 63.264-40zM526.79 189.58h-29.58C383.876 189.58 292 281.454 292 394.79v201.955a90 90 0 0 1-42.3 76.32l-48.92 30.575A78.255 78.255 0 0 0 164 770c0 16.569 13.431 30 30 30h636c16.569 0 30-13.431 30-30 0-26.981-13.9-52.06-36.78-66.36l-48.92-30.575a90 90 0 0 1-42.3-76.32V394.79c0-113.335-91.876-205.21-205.21-205.21z" fill="#000000" p-id="4054"></path></svg>
                </div>
                <div className="text-box">
                    <span className="card-name">通知</span>
                    <span className="card-text">来自应用和系统的通知、请勿打扰</span>
                </div>
                <div className="link-box">
                    <svg t="1700655101895" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7452" width="20" height="20"><path d="M260.638647 900.202463l58.230216 58.506509L705.15365 570.505485l58.20668-58.505485-58.20668-58.506509L318.868863 65.290005l-58.230216 58.505485 386.3073 388.203486L260.638647 900.202463zM646.945947 512" fill="#000000" p-id="7453"></path></svg>
                </div>
            </li>

            <li className="card-item" onClick={isDeveloper}>
                <div className="icon-box">
                    <svg t="1700727540895" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5677" width="20" height="20"><path d="M439.04383639 224.33271976a289.43717504 289.43717504 0 0 0-89.06329676 39.44690807c-27.5075319 18.12412161-51.158867 39.64960558-70.96389486 64.57645191-19.79019562 24.92684633-35.31880082 53.25011237-46.62042137 84.97474006C221.10449032 445.05050411 215.45368042 478.01109252 215.45368042 512c0 40.16870887 7.81621301 78.48347702 23.45358166 115.04318192 15.64725682 36.67341315 36.77228986 68.19039996 63.2910532 94.76354538 26.53359488 26.56820206 58.11485196 47.57952611 94.69927585 63.23667111 36.59431134 15.65714501 75.00301286 23.48324474 115.16183354 23.48324475 33.97407594 0 66.85061917-5.56182137 98.62468557-16.89310498 31.76417894-11.32633953 60.10227581-26.77584294 85.01429133-46.65502781 24.87740834-19.77536407 46.43255539-43.46625042 64.57150781-70.96389488a290.15403174 290.15403174 0 0 0 39.43701989-88.98913905c-8.3056532 0.72180079-17.71378249 1.13213991-28.0958481 1.1321392-45.21637032 0-88.35138342-8.85936294-129.45942212-26.46932463-41.1327577-17.71872658-76.62459295-41.50848964-106.44089858-71.27535655C505.84007277 458.54719011 482.10963587 423.01086095 464.42057238 381.91765379 446.7562286 340.81455917 437.94135957 297.65977044 437.94135957 252.4483442c0-10.40184195 0.39550758-19.77536407 1.15685891-28.01674772l-0.049438-0.09887672zM512.02976157 141.21192041c8.32542811 0 16.51242896 0.31146168 24.6054972 0.92944167-16.4036648 35.32374419-24.60549719 72.09603405-24.60549719 110.30698212 0 35.12104668 6.84227598 68.69961578 20.58121076 100.83458258 13.70927096 32.03114601 32.15474243 59.63261126 55.35124448 82.80933769 23.16683898 23.17178306 50.76830423 41.60736635 82.82416923 55.30674985 32.02125855 13.69938351 65.654209 20.60098567 100.78514387 20.60098568 38.23072298 0 75.03267594-8.24138293 110.35147675-24.62032874 0.59326099 8.14250622 0.86517214 16.28006837 0.86517213 24.62032874 0 33.57856837-4.43956893 66.43533597-13.29893256 98.46648269-8.90880166 32.03114601-21.28817928 61.69419283-37.24195443 88.78149743-15.92411206 27.19112615-35.31880082 52.11797247-58.09013296 74.87941716-22.77627549 22.76144395-47.74267309 42.12152555-74.87447306 58.09013223-27.15157487 15.96366261-56.75529553 28.32326532-88.78644152 37.28644905A368.16784419 368.16784419 0 0 1 512.00009921 882.78807959a368.20739474 368.20739474 0 0 1-98.48625832-13.28904439c-32.03609009-8.95824037-61.6249792-21.31784236-88.79138561-37.28150569-27.12685589-15.96860669-52.08336529-35.32868827-74.89919206-58.09013223-22.7515565-22.76144395-42.13635709-47.68829101-58.05058169-74.87941715-15.96366261-27.0922487-28.34304097-56.75529553-37.2518426-88.78149744A367.9354836 367.9354836 0 0 1 141.21201889 512c0-33.57856837 4.4494571-66.43533597 13.30882004-98.46648269 8.90880166-32.03114601 21.28817928-61.69419283 37.25184259-88.78149744 15.91916798-27.19112615 35.29902519-52.11797247 58.0505817-74.87941715 22.81582676-22.86526476 47.77233617-42.22534634 74.89919206-58.09013223C351.89380578 175.81880789 381.4826949 163.36032846 413.51878498 154.50096479A368.20739474 368.20739474 0 0 1 512.00009921 141.21192041h0.02966236z" p-id="5678" fill="#000000"></path></svg>
                </div>
                <div className="text-box">
                    <span className="card-name">专注</span>
                    <span className="card-text">减少干扰</span>
                </div>
                <div className="link-box">
                    <svg t="1700655101895" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7452" width="20" height="20"><path d="M260.638647 900.202463l58.230216 58.506509L705.15365 570.505485l58.20668-58.505485-58.20668-58.506509L318.868863 65.290005l-58.230216 58.505485 386.3073 388.203486L260.638647 900.202463zM646.945947 512" fill="#000000" p-id="7453"></path></svg>
                </div>
            </li>

            <li className="card-item" onClick={isDeveloper}>
                <div className="icon-box">
                    <svg t="1700727615617" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7004" width="20" height="20"><path d="M652.899 189.266c-16.036-7.058-34.761 0.22-41.82 16.258-7.059 16.038 0.221 34.761 16.258 41.819 104.649 46.06 172.27 149.682 172.27 263.991 0 77-29.986 149.392-84.434 203.839s-126.839 84.434-203.839 84.434-149.393-29.986-203.84-84.434c-54.448-54.447-84.433-126.839-84.433-203.839 0-114.963 68.159-218.821 173.642-264.591 16.075-6.975 23.451-25.659 16.477-41.733-6.975-16.075-25.662-23.452-41.734-16.477-128.688 55.837-211.839 182.544-211.839 322.8 0 47.469 9.304 93.535 27.653 136.917 17.717 41.887 43.073 79.499 75.365 111.791 32.292 32.291 69.903 57.647 111.791 75.364 43.383 18.35 89.449 27.653 136.918 27.653 47.468 0 93.535-9.304 136.917-27.653 41.888-17.717 79.499-43.073 111.791-75.364 32.291-32.292 57.647-69.904 75.364-111.791 18.35-43.383 27.653-89.448 27.653-136.917 0.001-139.458-82.493-265.877-210.16-322.067z" fill="#000000" p-id="7005"></path><path d="M512 479.517c17.522 0 31.727-14.205 31.727-31.727V128.228c0-17.522-14.204-31.727-31.727-31.727s-31.727 14.205-31.727 31.727V447.79c0 17.522 14.205 31.727 31.727 31.727z" fill="#000000" p-id="7006"></path></svg>
                </div>
                <div className="text-box">
                    <span className="card-name">电源</span>
                    <span className="card-text">屏幕和睡眠、电源模式</span>
                </div>
                <div className="link-box">
                    <svg t="1700655101895" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7452" width="20" height="20"><path d="M260.638647 900.202463l58.230216 58.506509L705.15365 570.505485l58.20668-58.505485-58.20668-58.506509L318.868863 65.290005l-58.230216 58.505485 386.3073 388.203486L260.638647 900.202463zM646.945947 512" fill="#000000" p-id="7453"></path></svg>
                </div>
            </li>

            <li className="card-item" onClick={isDeveloper}>
                <div className="icon-box">
                    <svg t="1700655176061" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9464" width="20" height="20"><path d="M279.3984 287.3856h142.1312v61.44H279.3984z" fill="#000000" p-id="9465"></path><path d="M690.0736 911.36h219.6992V358.0416l-225.28-238.592H128.9728V911.36h561.1008z m-279.9104-61.44v-213.3504h218.4704V849.92z m-219.7504 0V180.8896h467.5072l190.4128 201.5744V849.92h-158.2592v-274.7904H348.7232V849.92z" fill="#000000" p-id="9466"></path></svg>
                </div>
                <div className="text-box">
                    <span className="card-name">存储</span>
                    <span className="card-text">存储空间、驱动器、配置规则</span>
                </div>
                <div className="link-box">
                    <svg t="1700655101895" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7452" width="20" height="20"><path d="M260.638647 900.202463l58.230216 58.506509L705.15365 570.505485l58.20668-58.505485-58.20668-58.506509L318.868863 65.290005l-58.230216 58.505485 386.3073 388.203486L260.638647 900.202463zM646.945947 512" fill="#000000" p-id="7453"></path></svg>
                </div>
            </li>

            <li className="card-item" onClick={isDeveloper}>
                <div className="icon-box">
                    <svg t="1700727815454" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9314" width="20" height="20"><path d="M631.033 64c17.214 0 32.396 8.698 41.39 21.94L821.62 234.244c12.36 9.103 20.38 23.758 20.38 40.287V530h28c49.706 0 90 40.294 90 90v250c0 49.706-40.294 90-90 90H154c-49.706 0-90-40.294-90-90V540c0-49.706 40.294-90 90-90h28V154c0-49.706 40.294-90 90-90h359.033zM266.897 510H154c-16.569 0-30 13.431-30 30v330c0 16.569 13.431 30 30 30h716c16.569 0 30-13.431 30-30V620c0-16.569-13.431-30-30-30H425.768a90 90 0 0 1-48.967-14.487L283.22 514.83A30 30 0 0 0 266.897 510z m354.136-386H272c-16.569 0-30 13.431-30 30v296h24.897a90 90 0 0 1 48.967 14.487l93.582 60.684A30 30 0 0 0 425.768 530H782V284.53H671.033c-27.614 0-50-22.385-50-50V124zM682 344c16.569 0 30 13.431 30 30 0 16.569-13.431 30-30 30H342c-16.569 0-30-13.431-30-30 0-16.569 13.431-30 30-30h340zM504 214c16.569 0 30 13.431 30 30 0 16.569-13.431 30-30 30H342c-16.569 0-30-13.431-30-30 0-16.569 13.431-30 30-30h162z m222.738 10.53l-45.705-45.431v45.432l45.705-0.001z" fill="#000000" p-id="9315"></path></svg>
                </div>
                <div className="text-box">
                    <span className="card-name">就近共享</span>
                    <span className="card-text">可发现性、收到文件的位置</span>
                </div>
                <div className="link-box">
                    <svg t="1700655101895" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7452" width="20" height="20"><path d="M260.638647 900.202463l58.230216 58.506509L705.15365 570.505485l58.20668-58.505485-58.20668-58.506509L318.868863 65.290005l-58.230216 58.505485 386.3073 388.203486L260.638647 900.202463zM646.945947 512" fill="#000000" p-id="7453"></path></svg>
                </div>
            </li>

            <li className="card-item" onClick={isDeveloper}>
                <div className="icon-box">
                    <svg t="1700727917085" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11401" width="20" height="20"><path d="M673.92 757.12H114.56a94.08 94.08 0 0 1-94.08-94.72V103.04A94.08 94.08 0 0 1 114.56 8.96h559.36A94.08 94.08 0 0 1 768 103.04v559.36a94.72 94.72 0 0 1-94.08 94.72zM114.56 71.68a31.36 31.36 0 0 0-31.36 31.36v559.36a31.36 31.36 0 0 0 31.36 31.36h559.36a31.36 31.36 0 0 0 31.36-31.36V103.04a31.36 31.36 0 0 0-31.36-31.36z" fill="#000000" p-id="11402"></path><path d="M915.2 1016.32H355.84a94.08 94.08 0 0 1-94.08-94.08V362.88A94.08 94.08 0 0 1 355.84 268.8h559.36a94.08 94.08 0 0 1 94.08 94.08v559.36a94.08 94.08 0 0 1-94.08 94.08zM355.84 331.52a31.36 31.36 0 0 0-31.36 31.36v559.36a31.36 31.36 0 0 0 31.36 31.36h559.36a31.36 31.36 0 0 0 31.36-31.36V362.88a31.36 31.36 0 0 0-31.36-31.36z" fill="#000000" p-id="11403"></path></svg>
                </div>
                <div className="text-box">
                    <span className="card-name">多任务处理</span>
                    <span className="card-text">贴靠窗口、桌面、任务切换</span>
                </div>
                <div className="link-box">
                    <svg t="1700655101895" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7452" width="20" height="20"><path d="M260.638647 900.202463l58.230216 58.506509L705.15365 570.505485l58.20668-58.505485-58.20668-58.506509L318.868863 65.290005l-58.230216 58.505485 386.3073 388.203486L260.638647 900.202463zM646.945947 512" fill="#000000" p-id="7453"></path></svg>
                </div>
            </li>

            <li className="card-item" onClick={isDeveloper}>
                <div className="icon-box">
                    <svg t="1700728082216" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15386" width="20" height="20"><path d="M318.577778 819.2L17.066667 512l301.511111-307.2 45.511111 45.511111L96.711111 512l267.377778 261.688889zM705.422222 819.2l-45.511111-45.511111L927.288889 512l-267.377778-261.688889 45.511111-45.511111L1006.933333 512zM540.785778 221.866667l55.751111 11.150222L483.157333 802.133333l-55.751111-11.093333z" fill="#000000" p-id="15387"></path></svg>
                </div>
                <div className="text-box">
                    <span className="card-name">开发者选项</span>
                    <span className="card-text">这些设置仅供开发者使用</span>
                </div>
                <div className="link-box">
                    <svg t="1700655101895" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7452" width="20" height="20"><path d="M260.638647 900.202463l58.230216 58.506509L705.15365 570.505485l58.20668-58.505485-58.20668-58.506509L318.868863 65.290005l-58.230216 58.505485 386.3073 388.203486L260.638647 900.202463zM646.945947 512" fill="#000000" p-id="7453"></path></svg>
                </div>
            </li>

            <li className="card-item" onClick={isDeveloper}>
                <div className="icon-box">
                    <svg t="1700728144714" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="16537" width="20" height="20"><path d="M774.656 774.656a371.2 371.2 0 1 0-524.8 0 371.2 371.2 0 0 0 524.8 0zM819.2 819.2a435.2 435.2 0 1 1 0-614.4 435.2 435.2 0 0 1 0 614.4z" fill="#000000" p-id="16538"></path><path d="M694.272 366.592a32.256 32.256 0 1 1 45.056 45.056l-249.856 249.856a37.376 37.376 0 0 1-51.2 0l-142.336-141.312a32.256 32.256 0 1 1 45.056-45.056L460.8 597.504z" fill="#000000" p-id="16539"></path></svg>
                </div>
                <div className="text-box">
                    <span className="card-name">激活</span>
                    <span className="card-text">激活状态、订阅、产品密钥</span>
                </div>
                <div className="link-box">
                    <svg t="1700655101895" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7452" width="20" height="20"><path d="M260.638647 900.202463l58.230216 58.506509L705.15365 570.505485l58.20668-58.505485-58.20668-58.506509L318.868863 65.290005l-58.230216 58.505485 386.3073 388.203486L260.638647 900.202463zM646.945947 512" fill="#000000" p-id="7453"></path></svg>
                </div>
            </li>

            <li className="card-item" onClick={isDeveloper}>
                <div className="icon-box">
                    <svg t="1700728246923" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="17874" width="20" height="20"><path d="M395.8784 939.776h251.3408a157.0304 157.0304 0 0 1-251.3408 0z m0-94.208h251.2896a31.4368 31.4368 0 1 1 0 62.8224H395.9296a31.4368 31.4368 0 1 1 0-62.8224z m-46.9504-177.3056a63.0272 63.0272 0 0 1 27.0336 40.1408l8.5504 42.9056h273.9712l8.6016-42.9056a62.8224 62.8224 0 0 1 27.0336-40.1408 314.1632 314.1632 0 1 0-345.1904 0z m-34.56 52.48a377.0368 377.0368 0 1 1 414.3616 0l-8.5504 42.9056a62.8736 62.8736 0 0 1-61.44 50.4832H384.5632a62.8224 62.8224 0 0 1-61.44-50.4832z" fill="#000000" p-id="17875"></path><path d="M513.6896 636.672a40.192 40.192 0 0 1-39.424-39.8336 39.168 39.168 0 0 1 37.632-40.4992h0.9216a39.424 39.424 0 0 1 30.2592 11.2128 38.2976 38.2976 0 0 1 11.6224 28.5696 40.96 40.96 0 0 1-12.1344 29.3376 40.2944 40.2944 0 0 1-27.8016 11.2128zM483.7376 524.0832a3.7376 3.7376 0 0 1-3.6352-3.7888v-8.96a111.4624 111.4624 0 0 1 10.7008-52.3264 260.7104 260.7104 0 0 1 58.88-66.56L558.08 382.464a58.2656 58.2656 0 0 0 13.4144-36.1472 57.5488 57.5488 0 0 0-13.7728-40.96 55.3984 55.3984 0 0 0-41.2672-14.7968 51.9168 51.9168 0 0 0-47.2064 21.1968 87.04 87.04 0 0 0-13.2608 52.1216 3.6864 3.6864 0 0 1-3.6352 3.7376H397.824a3.6864 3.6864 0 0 1-3.84-3.5328 129.9968 129.9968 0 0 1 33.4336-93.7472 121.7536 121.7536 0 0 1 92.8256-35.4816 115.3536 115.3536 0 0 1 82.6368 29.0816A101.12 101.12 0 0 1 634.88 342.528a108.5952 108.5952 0 0 1-20.48 66.9696 553.2672 553.2672 0 0 1-43.6224 41.984 83.456 83.456 0 0 0-19.968 26.4704 70.8608 70.8608 0 0 0-7.8336 33.1776v9.1648a3.6864 3.6864 0 0 1-3.6352 3.7888H483.7376z" fill="#000000" p-id="17876"></path></svg>
                </div>
                <div className="text-box">
                    <span className="card-name">疑难解答</span>
                    <span className="card-text">建议的疑难解答、首选项和历史记录</span>
                </div>
                <div className="link-box">
                    <svg t="1700655101895" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7452" width="20" height="20"><path d="M260.638647 900.202463l58.230216 58.506509L705.15365 570.505485l58.20668-58.505485-58.20668-58.506509L318.868863 65.290005l-58.230216 58.505485 386.3073 388.203486L260.638647 900.202463zM646.945947 512" fill="#000000" p-id="7453"></path></svg>
                </div>
            </li>

            <li className="card-item" onClick={isDeveloper}>
                <div className="icon-box">
                    <svg t="1700728326533" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="19177" width="20" height="20"><path d="M524.32 735.52a24.917 24.917 0 0 1 8.55 8.263l32.694 51.964 33.39 53.067c7.328 11.648 3.826 27.03-7.821 34.359a24.917 24.917 0 0 1-13.27 3.827H445.778c-13.761 0-24.917-11.156-24.917-24.917 0-4.962 1.482-9.81 4.255-13.925l35.114-52.1 30.02-51.546c6.926-11.891 22.18-15.917 34.071-8.992zM767.825 137l1.97 0.016C834.705 138.069 887 191.042 887 256.24v482.04l-0.016 1.971c-1.052 64.947-54 117.268-119.159 117.268h-85.591c-16.968-0.28-30.639-14.13-30.639-31.175 0-17.218 13.948-31.176 31.154-31.176h85.076l0.94-0.008c30.975-0.502 55.928-25.778 55.928-56.88V256.24l-0.008-0.941c-0.502-30.983-25.765-55.948-56.86-55.948h-511.65l-0.94 0.008c-30.975 0.502-55.928 25.778-55.928 56.88v482.04l0.008 0.941c0.502 30.984 25.765 55.948 56.86 55.948h84.942l0.515 0.004c16.968 0.276 30.639 14.126 30.639 31.172 0 17.217-13.948 31.175-31.154 31.175h-84.942l-1.97-0.016C189.295 856.45 137 803.477 137 738.28V256.24l0.016-1.972C138.068 189.32 191.016 137 256.175 137h511.65z" fill="#000000" p-id="19178"></path></svg>
                </div>
                <div className="text-box">
                    <span className="card-name">投影到此电脑</span>
                    <span className="card-text">投影、配对PIN、可发现性</span>
                </div>
                <div className="link-box">
                    <svg t="1700655101895" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7452" width="20" height="20"><path d="M260.638647 900.202463l58.230216 58.506509L705.15365 570.505485l58.20668-58.505485-58.20668-58.506509L318.868863 65.290005l-58.230216 58.505485 386.3073 388.203486L260.638647 900.202463zM646.945947 512" fill="#000000" p-id="7453"></path></svg>
                </div>
            </li>

            <li className="card-item" onClick={isDeveloper}>
                <div className="icon-box">
                    <svg t="1700728425616" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="22599" width="20" height="20"><path d="M893.25056 795.97568H130.74944A48.83968 48.83968 0 0 1 81.92 747.22304V151.15264A48.83968 48.83968 0 0 1 130.74944 102.4h762.50112A48.8448 48.8448 0 0 1 942.08 151.15264v596.0704a48.8448 48.8448 0 0 1-48.82944 48.75264zM151.552 726.43584h720.896v-554.496H151.552v554.496zM847.63136 921.6h-677.888a34.76992 34.76992 0 1 1 0-69.53984h677.888a34.76992 34.76992 0 1 1 0 69.53984z" fill="#000000" p-id="22600"></path><path d="M242.36032 623.58016a34.816 34.816 0 0 1-25.31328-58.73664l158.08-167.49056a48.87552 48.87552 0 0 1 58.81344-9.37984l176.128 95.85152 144.95744-166.25152a34.816 34.816 0 1 1 52.48512 45.77792L651.59168 542.208a48.512 48.512 0 0 1-60.11392 10.80832L414.76096 456.832l-147.07712 155.83232a34.69824 34.69824 0 0 1-25.32352 10.91584z" fill="#000000" p-id="22601"></path></svg>
                </div>
                <div className="text-box">
                    <span className="card-name">远程桌面</span>
                    <span className="card-text">远程桌面用户、连接权限</span>
                </div>
                <div className="link-box">
                    <svg t="1700655101895" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7452" width="20" height="20"><path d="M260.638647 900.202463l58.230216 58.506509L705.15365 570.505485l58.20668-58.505485-58.20668-58.506509L318.868863 65.290005l-58.230216 58.505485 386.3073 388.203486L260.638647 900.202463zM646.945947 512" fill="#000000" p-id="7453"></path></svg>
                </div>
            </li>

            <li className="card-item" onClick={isDeveloper}>
                <div className="icon-box">
                    <svg t="1700728516731" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="23928" width="20" height="20"><path d="M785.066667 119.466667a102.4 102.4 0 0 1 102.4 102.4v580.266666a102.4 102.4 0 0 1-102.4 102.4H238.933333a102.4 102.4 0 0 1-102.4-102.4V221.866667a102.4 102.4 0 0 1 102.4-102.4h546.133334z m0 51.2h-93.866667v34.133333a93.866667 93.866667 0 0 1-90.094933 93.7984L597.333333 298.666667H426.666667a93.866667 93.866667 0 0 1-93.866667-93.866667v-34.133333H238.933333a51.2 51.2 0 0 0-51.2 51.2v580.266666a51.2 51.2 0 0 0 51.2 51.2h546.133334a51.2 51.2 0 0 0 51.2-51.2V221.866667a51.2 51.2 0 0 0-51.2-51.2z m-145.066667 0h-256v34.133333a42.666667 42.666667 0 0 0 39.867733 42.581333L426.666667 247.466667h170.666666a42.666667 42.666667 0 0 0 42.666667-42.666667v-34.133333z" fill="#000000" p-id="23929"></path><path d="M392.533333 477.866667m25.6 0l187.733334 0q25.6 0 25.6 25.6l0 0q0 25.6-25.6 25.6l-187.733334 0q-25.6 0-25.6-25.6l0 0q0-25.6 25.6-25.6Z" fill="#000000" p-id="23930"></path><path d="M426.666667 631.466667m25.6 0l119.466666 0q25.6 0 25.6 25.6l0 0q0 25.6-25.6 25.6l-119.466666 0q-25.6 0-25.6-25.6l0 0q0-25.6 25.6-25.6Z" fill="#000000" p-id="23931"></path></svg>
                </div>
                <div className="text-box">
                    <span className="card-name">剪贴板</span>
                    <span className="card-text">剪切和复制历史记录、同步、清除</span>
                </div>
                <div className="link-box">
                    <svg t="1700655101895" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7452" width="20" height="20"><path d="M260.638647 900.202463l58.230216 58.506509L705.15365 570.505485l58.20668-58.505485-58.20668-58.506509L318.868863 65.290005l-58.230216 58.505485 386.3073 388.203486L260.638647 900.202463zM646.945947 512" fill="#000000" p-id="7453"></path></svg>
                </div>
            </li>

            <li className="card-item" onClick={isDeveloper}>
                <div className="icon-box">
                    <svg t="1700728595609" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="25113" width="20" height="20"><path d="M512.50142 958.397886c-119.320573 0-231.499491-46.465265-315.871087-130.837884C112.258737 743.188406 65.792449 631.010511 65.792449 511.688915c0-119.319549 46.466288-231.499491 130.837884-315.871087C281.002952 111.445208 393.180847 64.979944 512.50142 64.979944s231.499491 46.465265 315.871087 130.837884c84.372619 84.372619 130.837884 196.551538 130.837884 315.871087 0 119.321596-46.465265 231.499491-130.837884 315.871087C744.000911 911.932622 631.821993 958.397886 512.50142 958.397886zM512.50142 105.962334c-223.718271 0-405.726581 182.00831-405.726581 405.726581s182.00831 405.726581 405.726581 405.726581c223.718271 0 405.727605-182.00831 405.727605-405.726581S736.220714 105.962334 512.50142 105.962334z" fill="#000000" p-id="25114"></path><path d="M510.150886 775.953647c-18.107403 0-32.745798-14.678304-32.745798-32.785707L477.405087 452.191846c0-18.108426 14.638395-32.785707 32.745798-32.785707 18.107403 0 32.745798 14.678304 32.745798 32.785707l0 290.976094C542.896684 761.275343 528.258289 775.953647 510.150886 775.953647z" fill="#000000" p-id="25115"></path><path d="M511.357364 296.458969m-45.080731 0a44.054 44.054 0 1 0 90.161463 0 44.054 44.054 0 1 0-90.161463 0Z" fill="#000000" p-id="25116"></path></svg>
                </div>
                <div className="text-box">
                    <span className="card-name">系统信息</span>
                    <span className="card-text">设备规格、重命名电脑、Windows规格</span>
                </div>
                <div className="link-box">
                    <svg t="1700655101895" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7452" width="20" height="20"><path d="M260.638647 900.202463l58.230216 58.506509L705.15365 570.505485l58.20668-58.505485-58.20668-58.506509L318.868863 65.290005l-58.230216 58.505485 386.3073 388.203486L260.638647 900.202463zM646.945947 512" fill="#000000" p-id="7453"></path></svg>
                </div>
            </li>
        </ul>
    )
}

export default SystemSettingList