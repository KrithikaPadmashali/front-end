import React from 'react'

export default function LanguageToggle({lang,setLang}){
  return (
    <div className="lang-toggle">
      <button className={lang==='EN'? 'active':''} onClick={()=>setLang('EN')}>EN</button>
      <button className={lang==='JA'? 'active':''} onClick={()=>setLang('JA')}>JA</button>
    </div>
  )
}
