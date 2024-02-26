import React from "react"
import "./style.scss"
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import NavBar from "./components/nav-bar/NavBar"
import Footer from "./components/footer/Footer"

const Layout = () => {
  return (
    <>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element:<Layout/>,
    children: [
      { path:"", element: <></> },
    ]
  }
])

function App() {

  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router}/>
      </div>
    </div>
  )
}

export default App
