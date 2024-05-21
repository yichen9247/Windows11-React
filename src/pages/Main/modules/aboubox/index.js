
import "./index.css"

const ChildBox = ({ config }) => {
    return (
        <div id="windows11-childbox" style={{ bottom: config.bottom }} tabIndex={0} onContextMenu={(event) => event.preventDefault()}>
            <span className="chlid-text color-text">{ config.text }</span>
        </div>
    )
}

export default ChildBox