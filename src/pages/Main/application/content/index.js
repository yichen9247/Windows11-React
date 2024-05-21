
import "./index.css"
import { Empty } from "antd";

const ContentWindowLayout = () => {
    return(
        <div id="window-layout-axample" onContextMenu={(event) => event.preventDefault()}>
            <div className="layout-content">
                <Empty 
                    description={false}
                    imageStyle={{
                        width: "100%",
                        height: "100%"
                    }}
                />
            </div>
        </div>
    )
}

export default ContentWindowLayout