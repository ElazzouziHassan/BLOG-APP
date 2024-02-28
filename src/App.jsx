import React from "react"
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import NavBar from "./components/nav-bar/NavBar"
import Footer from "./components/footer/Footer"
import Register from "./pages/auth/Register"
import Login from "./pages/auth/Login"
import Home from "./pages/home/Home"
import Write from "./pages/others/Writre"
import Single from "./pages/others/Single"
import "./style.scss"

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
    path: "/", element:<Layout/>, children: [
      { path:"/", element: <Home /> },
      { path:"/post/:id", element: <Single /> },
      { path:"/write", element: <Write /> },
    ],
  },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> }
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
