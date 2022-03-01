import React from 'react';
import Login from "./components/Login"
import Home from "./components/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return <div>
   <BrowserRouter>
             <Routes>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Home" element={<Home />}></Route>
         
        </Routes>
      </BrowserRouter>
      <Home/>
  </div>
}


export default App;