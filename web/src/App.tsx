import React from "react"
import Landing from "./pages/landing"
import Routes from "./routes"
import { GlobalStyles } from "./styles/GlobalStyles"

function App() {
  return (
    <div className="App">
      <Routes />
      <GlobalStyles />
    </div>
  )
}

export default App
