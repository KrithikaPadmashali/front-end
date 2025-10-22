import React from 'react'

const sampleCustomers = [
  {name:'Amit Sharma', id:'CU-2024-0001', email:'amit.sharma@email.com', phone:'+91 98765 43210', balance:'₹15,50,000', status:'Active'},
  {name:'Priya Gupta', id:'CU-2024-0002', email:'priya.gupta@email.com', phone:'+91 87654 32109', balance:'₹8,75,000', status:'Active'},
  {name:'Rajesh Kumar', id:'CU-2024-0003', email:'rajesh.kumar@email.com', phone:'+91 76543 21098', balance:'₹22,30,000', status:'Active'},
  {name:'Sarah Miller', id:'CU-2024-0004', email:'sarah.miller@email.com', phone:'+91 65432 10987', balance:'₹5,00,000', status:'Inactive'},
  {name:'Michael Johnson', id:'CU-2024-0005', email:'michael.johnson@email.com', phone:'+91 54321 09876', balance:'₹12,80,000', status:'Dormant'},
]

export default function Customers(){
  return (
    <div className="container customers-page">
      <section className="hero small">
        <h2>All Customers</h2>
        <p>Manage customer accounts and view balances</p>
      </section>

      <div className="stats-row" style={{display:'flex',gap:'1rem',marginTop:'1rem'}}>
        <div className="card">TOTAL CUSTOMERS<br/><strong style={{fontSize:20}}>2,847</strong></div>
        <div className="card">ACTIVE ACCOUNTS<br/><strong style={{fontSize:20}}>2,634</strong></div>
        <div className="card">TOTAL DEPOSITS<br/><strong style={{fontSize:20}}>₹284.7Cr</strong></div>
        <div className="card">AVG BALANCE<br/><strong style={{fontSize:20}}>₹10.2L</strong></div>
      </div>

      <div className="table-wrap" style={{marginTop:'1rem',background:'white',padding:'1rem',borderRadius:8}}>
        <table style={{width:'100%',borderCollapse:'collapse'}}>
          <thead>
            <tr style={{textAlign:'left'}}><th>Customer Name</th><th>Customer ID</th><th>Email</th><th>Phone</th><th>Total Balance</th><th>Status</th></tr>
          </thead>
          <tbody>
            {sampleCustomers.map(c => (
              <tr key={c.id} style={{borderBottom:'1px solid #eef2f7'}}>
                <td>{c.name}<div style={{fontSize:12,color:'#9ca3af'}}>Premium Customer</div></td>
                <td>{c.id}</td>
                <td>{c.email}</td>
                <td>{c.phone}</td>
                <td><strong>{c.balance}</strong></td>
                <td><span style={{padding:'4px 8px',background:c.status==='Active'? 'rgba(16,185,129,0.12)':'rgba(239,68,68,0.08)',borderRadius:999,color:c.status==='Active'?'#10b981':'#ef4444'}}>{c.status}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
