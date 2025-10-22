import React from 'react'
import { Link } from 'react-router-dom'

export default function Products(){
  return (
    <div className="container products-page">
      <section className="hero small">
        <h2>Product & Pricing</h2>
        <p>Create and manage fixed deposit products with interest rates and charges</p>
      </section>

      <div className="products-grid" style={{display:'grid',gridTemplateColumns:'1fr 420px',gap:16,marginTop:16}}>
        <div className="card">
          <h3>Create / Update Product</h3>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8}}>
            <label>Product Name *<input placeholder="Premium Fixed Deposit" /></label>
            <label>Product Code *<input placeholder="FD-PREMIUM-001" /></label>
            <label>Minimum Amount (₹) *<input placeholder="1,00,000" /></label>
            <label>Maximum Amount (₹) *<input placeholder="50,00,000" /></label>
          </div>

          <h4 style={{marginTop:12}}>Interest Rates Configuration</h4>
          <table style={{width:'100%',borderCollapse:'collapse'}}>
            <thead><tr><th>Tenure</th><th>Regular Rate (%)</th><th>Senior Citizen (%)</th><th>Status</th></tr></thead>
            <tbody>
              <tr><td>6 Months</td><td><input defaultValue="6.25" /></td><td><input defaultValue="6.75" /></td><td>Active</td></tr>
              <tr><td>1 Year</td><td><input defaultValue="6.50" /></td><td><input defaultValue="7.00" /></td><td>Active</td></tr>
              <tr><td>2 Years</td><td><input defaultValue="6.75" /></td><td><input defaultValue="7.25" /></td><td>Active</td></tr>
            </tbody>
          </table>

          <div style={{marginTop:12}}>
            <label>Processing Fee (₹)<input placeholder="500" /></label>
            <label style={{marginLeft:8}}>Early Withdrawal Penalty (%)<input placeholder="1.0" /></label>
          </div>

          <div style={{marginTop:12}}>
            <button className="btn primary">Save Product</button>
            <button className="btn ghost" style={{marginLeft:8}}>Preview</button>
            <button className="btn ghost" style={{marginLeft:8}}>Reset</button>
          </div>
        </div>

        <aside className="card">
          <h3>Existing Products</h3>
          <div style={{display:'grid',gap:8}}>
            <div style={{padding:8,borderLeft:'4px solid #10b981',background:'#fff',borderRadius:6}}>
              <strong>Premium Fixed Deposit</strong>
              <div style={{fontSize:13,color:'#6b7280'}}>FD-PREMIUM-001</div>
              <div style={{fontSize:13,color:'#10b981'}}>Rate: 6.25% - 7.75%</div>
            </div>
            <div style={{padding:8,borderLeft:'4px solid #60a5fa',background:'#fff',borderRadius:6}}>
              <strong>Regular Fixed Deposit</strong>
              <div style={{fontSize:13,color:'#6b7280'}}>FD-REGULAR-001</div>
              <div style={{fontSize:13,color:'#60a5fa'}}>Rate: 5.75% - 7.25%</div>
            </div>
            <div style={{marginTop:8}}>
              <h4>Product Statistics</h4>
              <div>Total Active Products: 4</div>
              <div>Average Interest Rate: 6.85% | Last Updated: 2 hours ago</div>
              <div style={{marginTop:8}}>
                <button className="btn ghost">Export Products</button>
                <button className="btn ghost" style={{marginLeft:8}}>Bulk Rate Update</button>
                <button className="btn primary" style={{marginLeft:8}}>+ New Product</button>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
