import React, {useState} from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import BackButton from './components/BackButton'
import { useLocation } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import FDCalculator from './pages/FDCalculator'
import Products from './pages/Products'
import Customers from './pages/Customers'
import Onboarding from './pages/Onboarding'
import Dashboard from './pages/Dashboard'
import Landing from './pages/Landing'

export default function App(){
  const [lang, setLang] = useState('EN')
  const [user, setUser] = useState(null) // simple in-memory auth

  const requireAuth = (element) => user ? element : <Navigate to="/login" replace />

  const loc = useLocation()

  return (
    <div>
      <Header lang={lang} setLang={setLang} user={user} setUser={setUser} />
      <div className="page-wrap">
        {loc.pathname !== '/' && <BackButton />}
        <Routes>
          <Route path="/" element={<Landing lang={lang} />} />
          <Route path="/login" element={<Login setUser={setUser} lang={lang} />} />
          <Route path="/signup" element={<Signup setUser={setUser} lang={lang} />} />
          <Route path="/fd" element={<FDCalculator lang={lang} />} />
          <Route path="/products" element={<Products lang={lang} />} />
          <Route path="/customers" element={requireAuth(<Customers user={user} lang={lang} />)} />
          <Route path="/onboarding" element={requireAuth(<Onboarding user={user} lang={lang} />)} />
          <Route path="/dashboard" element={requireAuth(<Dashboard user={user} lang={lang} />)} />
        </Routes>
      </div>
    </div>
  )
}
