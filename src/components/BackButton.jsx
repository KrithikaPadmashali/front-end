import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function BackButton(){
  const nav = useNavigate()
  const loc = useLocation()
  // hide on home
  if(loc.pathname === '/') return null

  return (
    <div className="back-button">
      <button onClick={()=>nav(-1)} aria-label="Go back">← Back</button>
    </div>
  )
}
