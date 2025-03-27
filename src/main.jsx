import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Landing from './components/landing'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/login'
import Register from './components/Register'
import { AuthProvider } from './context/AuthContext'

const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
)
