import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login({setUser, lang='EN'}){
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const nav = useNavigate()

  function submit(e){
    e.preventDefault()
    // fake auth
    setUser({email})
    nav('/dashboard')
  }

  const t = {
    EN: {title:'Welcome Back', email:'Email Address', password:'Password', signin:'Sign In', noAccount:"Don't have an account?"},
    JA: {title:'お帰りなさい', email:'メールアドレス', password:'パスワード', signin:'サインイン', noAccount:'アカウントをお持ちでないですか？'}
  }

  const L = t[lang] || t.EN

  return (
    <div className="auth-page bg-decor">
      <div className="container">
        <div className="auth-card">
        <h2>{L.title}</h2>
        <form onSubmit={submit}>
          <label>{L.email}</label>
          <input value={email} onChange={e=>setEmail(e.target.value)} placeholder={L.email} />
          <label>{L.password}</label>
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder={L.password} />
          <button className="btn primary" type="submit">{L.signin}</button>
        </form>
        <p>{L.noAccount} <Link to="/signup">Sign Up</Link></p>
        </div>
      </div>
    </div>
  )
}
