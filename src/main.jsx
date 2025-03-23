import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Landing from './components/landing'
import { BrowserRouter , Route , Routes } from 'react-router'
import Login from './components/Login'
import Register from './components/Register'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path='/'  element={<Landing/>} ></Route>
    <Route path='/login' element={<Login/>} ></Route>
    <Route path='/register' element={<Register/>} ></Route>
  </Routes>
  </BrowserRouter>
)
