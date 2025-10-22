import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function Signup({setUser, lang='EN'}){
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const nav = useNavigate()

  function submit(e){
    e.preventDefault()
    setUser({name,email})
    nav('/dashboard')
  }

  const t = {
    EN:{title:'Create Account', full:'Full Name', email:'Email Address', pass:'Password', create:'Create Account'},
    JA:{title:'アカウント作成', full:'氏名', email:'メールアドレス', pass:'パスワード', create:'アカウントを作成'}
  }
  const L = t[lang] || t.EN

  return (
    <div className="auth-page bg-decor">
      <div className="container">
        <div className="auth-card">
        <h2>{L.title}</h2>
        <form onSubmit={submit}>
          <label>{L.full}</label>
          <input value={name} onChange={e=>setName(e.target.value)} placeholder={L.full} />
          <label>{L.email}</label>
          <input value={email} onChange={e=>setEmail(e.target.value)} placeholder={L.email} />
          <label>{L.pass}</label>
          <input type="password" placeholder={L.pass} />
          <button className="btn primary" type="submit">{L.create}</button>
        </form>
        </div>
      </div>
    </div>
  )
}
