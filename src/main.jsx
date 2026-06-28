import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Dashboard from './components/Dashboard.jsx'
import AddingExpance from './components/AddingExpance.jsx'

const router = createBrowserRouter([
 {path: "/", element: <App/> , 
  children: [{path: "/", element: <Dashboard/>},
    {path:"form" , element: <AddingExpance/> }]}
    
  
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>,
)
