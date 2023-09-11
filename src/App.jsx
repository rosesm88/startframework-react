import React from 'react'
// import Navbar from './Component/Navbar/Navbar'
import Home from './Component/Home/Home'
// import Footer from './Component/Footer/Footer'
import About from './Component/About/About'
import Portfolio from './Component/Portfolio/Portfolio'
import Contact from './Component/Contact/Contact'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import Layout from './Component/Layout/Layout'
import NotFound from './Component/Notfound/NotFound'
export default function App() {
let Routes = createHashRouter([
  {path:"",element:<Layout/>,children:[
    {index:true,element:<Home/>},
    {path:"about",element:<About/>},
    {path:"portfolio",element:<Portfolio/>},
    {path:"contact",element:<Contact/>},
    {path:"*",element:<NotFound/>},
  ]}
])
  return <>
  <RouterProvider router={Routes}/> 
  </>
}
