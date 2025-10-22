import React from 'react'

const queue = [
  {name:'Sarah Wilson', email:'sarah.wilson@email.com', note:'Aadhaar verification failed', badge:'High Priority'},
  {name:'Michael Chen', email:'michael.chen@email.com', note:'Document quality review needed', badge:'Medium'},
  {name:'Priya Sharma', email:'priya.sharma@email.com', note:'Ready for approval', badge:'Ready'},
  {name:'David Rodriguez', email:'david.rodriguez@email.com', note:'Initial review pending', badge:'New'},
]

export default function Onboarding(){
  return (
    <div className="container onboarding-page">
      <section className="hero small">
        <h2>Customer Onboarding</h2>
        <p>Create new customers and review KYC documents</p>
      </section>

      <div className="onboard-grid" style={{display:'grid',gridTemplateColumns:'1fr 420px',gap:'1rem',marginTop:'1rem'}}>
        <div className="card">
          <h3>Create New Customer</h3>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'0.5rem'}}>
            <input placeholder="Full Name*" />
            <input placeholder="Email Address*" />
            <input placeholder="Phone Number*" />
            <input placeholder="Date of Birth*" />
            <input placeholder="Address Line 1*" style={{gridColumn:'1 / -1'}} />
            <input placeholder="City*" />
            <input placeholder="Pincode*" />
          </div>
          <div style={{marginTop:'1rem'}}>
            <h4>KYC Documents</h4>
            <div style={{display:'flex',gap:8}}>
              <div style={{flex:1,border:'1px dashed #e5e7eb;padding:12,px',borderRadius:8}}>Aadhaar Card<br/><small>Click to upload</small></div>
              <div style={{flex:1,border:'1px dashed #e5e7eb;padding:12,px',borderRadius:8}}>PAN Card<br/><small>Click to upload</small></div>
              <div style={{flex:1,border:'1px solid #10b981;padding:12,px',borderRadius:8,background:'#ecfdf5'}}>Bank Statement<br/><small>Uploaded</small></div>
            </div>
          </div>
          <div style={{marginTop:16}}>
            <button className="btn primary">Create Customer</button>
            <button className="btn ghost" style={{marginLeft:8}}>Save Draft</button>
          </div>
        </div>

        <div className="card">
          <h3>KYC Review Queue</h3>
          <p>8 applications pending review</p>
          <div style={{display:'flex',flexDirection:'column',gap:8,marginTop:8}}>
            {queue.map((q,i)=> (
              <div key={i} style={{padding:12,background:'#fff',borderRadius:8,border:'1px solid #f1f5f9'}}>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                  <div>
                    <strong>{q.name}</strong>
                    <div style={{fontSize:13,color:'#6b7280'}}>{q.email}</div>
                    <div style={{fontSize:13,color:'#f87171'}}>⚠️ {q.note}</div>
                  </div>
                  <div>
                    <span style={{padding:'6px 10px',background:'#f8fafc',borderRadius:6}}>{q.badge}</span>
                    <div style={{marginTop:8}}><button className="btn ghost">Review</button></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{marginTop:12}}><button className="btn ghost">View All Applications</button></div>
        </div>
      </div>
    </div>
  )
}
