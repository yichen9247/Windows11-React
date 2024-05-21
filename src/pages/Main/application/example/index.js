
import "./index.css"

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