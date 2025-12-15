import { BrowserRouter, Route, Routes } from "react-router-dom"
import Profile from "./Profile"
import Login from "./Login"
import Body from "./Body"

function App() {

  return (
    <>
   <BrowserRouter basename="/">
   <Routes>
    <Route path="/" element={<Body />}>
        <Route path="/login" elemet={<Login/>} />
        <Route path="/profile" elemet={<Profile/>} />
    </Route>
   </Routes>
</BrowserRouter>
     {/* <h1 className="text-3xl font-bold bg-red-500 underline">Hello World</h1> */}
    </>
  )
}

export default App
 