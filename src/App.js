
import './App.css'
import hashRouter from "./router"
import { RouterProvider } from 'react-router-dom'

const Windows = () => {
  return <RouterProvider router={hashRouter} />;
}

export default Windows