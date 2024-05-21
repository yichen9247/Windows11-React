
import "./index.css"
import App from "./App"
import React from "react"
import WinStore from "./redux"
import { StrictMode } from "react"
import { Provider } from "react-redux"
import ReactDOM from "react-dom/client"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render (
    <Provider store={WinStore}>
        <StrictMode>
            <App />
        </StrictMode>
    </Provider>
)