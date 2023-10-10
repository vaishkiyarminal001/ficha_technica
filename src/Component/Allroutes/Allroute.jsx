import {Routes,Route} from "react-router-dom"

// import { Home } from "@mui/icons-material"

import About from "../Pages/About"
import Contact from "../Pages/Contact"
import Gallery from "../Pages/Gallery"
import { Error } from "../Pages/Error"
import React from 'react'
import Singleproduct from "../Pages/Singleproduct"
import Home from "../Pages/Home"
import { Admin } from "../Admin/Admin"

export default function Allroute() {
    return(
        <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact/>} />
                  <Route path="/gallery" element={<Gallery/>} />
                  <Route path="/gallery/singleproduct/:id" element={<Singleproduct />} />
                  <Route path="/admin" element={<Admin/>}/>
                  <Route path="*" element={<Error/>}/>
                  
                  
                 
        </Routes>
        )
}
