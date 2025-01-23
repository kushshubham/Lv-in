import { BrowserRouter, Route, Routes } from "react-router-dom"
import AddCase from "./Pages/AddCase"

function App() {
 

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddCase/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
