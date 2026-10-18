import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from "react-router-dom"

const Router = createBrowserRouter([

  {path: "/home", element: <App/> }
  
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {Router} />
  </StrictMode>,
)
