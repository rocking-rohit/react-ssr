import React from "react"
import { render } from "react-dom"
import App from "./components/app"
const props = {}
render(<App props={props} />, document.querySelector("#app"))
