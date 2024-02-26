import React from "react"
import "./style.scss"
import { RouterProvider, createBrowserRouter } from "react-router-dom"


const Layout = () => {
  return (
    <>
      <h1>app layout</h1>
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
