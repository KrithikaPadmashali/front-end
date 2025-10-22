import React from 'react'
import { Link } from 'react-router-dom'

export default function Landing({lang='EN'}){
  const t = {
    EN:{title:'Empowering Your Financial Future',sub:'Where Trust Meets Innovation in Banking Excellence', explore:'Explore Our Services', fd:'FD Calculator'},
    JA:{title:'あなたの金融の未来を強化する',sub:'銀行の卓越性における信頼と革新の融合', explore:'サービスを見る', fd:'定期預金計算機'}
  }
  const L = t[lang] || t.EN

  return (
    <div className="landing bg-landing bg-landing-decor">
      <div className="container">
      <section className="hero large">
        <h1>{L.title}</h1>
        <p>{L.sub}</p>
        <div className="cta-row">
          <Link to="/login" className="btn primary">{L.explore}</Link>
          <Link to="/fd" className="btn ghost">{L.fd}</Link>
        </div>
      </section>
      </div>
    </div>
  )
}
