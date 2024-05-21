
/**
 * author: Hua
 * layout: LodingLayout
 */

import "./index.css"
import windows11 from "../../image/icon/windows11.png"
import { useSelector, useDispatch } from "react-redux"
import { setOpacity,setImgOpacity,setTopValue,setLayoutClass } from "../../redux/modules/loginStore"

const LoginLayout = ({ config }) => {
    const dispatch = useDispatch();
    const loginReducer = useSelector( state => state.loginReducer );

    const winReady = () => {
        dispatch(setOpacity(1));
        dispatch(setTopValue("-350px"));
    }

    const winClose = () => {
        dispatch(setImgOpacity(0));
        dispatch(setLayoutClass("layout-show"));
    }

    const winUpdate = () => {
        config.onLogin();
        document.body.style.backgroundColor = "transparent";
    };

    const readyThings = [
        {
            time: 1000,
            todo: winReady
            
        },
        {
            time: 5000,
            todo: winClose
        },
        { 
            time: 5500,
            todo: winUpdate
        }
    ]

    setTimeout(readyThings[0].todo, readyThings[0].time);
    setTimeout(readyThings[1].todo, readyThings[1].time);
    setTimeout(readyThings[2].todo, readyThings[2].time);

    return (
        <div id="frameelement-loding" key="frameelement" className={loginReducer.layoutClass} style={{ display: config.display }} >
            <div id="loginLayout" className={loginReducer.layoutClass}>
                <img className='windows11-logo' style={{marginTop: loginReducer.topValue,opacity: loginReducer.imgOpacity}} src={windows11} alt="windows11" draggable="false"/>
                <svg className="progressRing" style={{ position: "fixed" ,bottom: "200px", transition: "1s", opacity: loginReducer.opacity }} height="62" width="62" viewBox="0 0 16 16"><circle cx="8px" cy="8px" r="7px"></circle></svg>
            </div>
        </div>
    )
}

export default LoginLayout