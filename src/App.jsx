import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./NavBar"
import Body from "./Body"

function App() {
  

  return (
    <>
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Body/>}>
       </Route>
      </Routes>
   </BrowserRouter>
   
     <h1>Hello World</h1>
    </>
  )
}

export default App 