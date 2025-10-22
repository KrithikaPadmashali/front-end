import React from 'react'
import { Link } from 'react-router-dom'
import LanguageToggle from './LanguageToggle'
import Logo from '../assets/credexa_logo.png'
import { useLocation } from 'react-router-dom'

export default function Header({lang, setLang, user, setUser}){
  const loc = useLocation()
  const isDashboard = loc.pathname.startsWith('/dashboard')
  const isHome = loc.pathname === '/'

  return (
  <header className={`site-header ${isDashboard? 'dark-strip': (isHome? 'home':'white-bg')}`}>
      <div className="container header-inner">
        <div className="brand-wrap" style={{display:'flex',alignItems:'center',gap:8}}>
          <img src={Logo} alt="Credexa" className="brand-logo" />
          <Link to="/" className="brand">Credexa</Link>
        </div>
        {/* Hide full nav on home/landing — show only brand + language */}
        {!isHome && (
          <nav>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/onboarding">Onboarding</Link>
            <Link to="/customers">Customers</Link>
            <Link to="/products">Products</Link>
            <Link to="/fd">FD Calculator</Link>
            {user ? null : <Link to="/login">Login</Link>}
          </nav>
        )}
        <LanguageToggle lang={lang} setLang={setLang} />
      </div>
    </header>
  )
}
