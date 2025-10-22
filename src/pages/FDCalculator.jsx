import React, {useState} from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip } from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip)

function compoundMaturity(P, rPct, nYears){
  const r = rPct/100
  return P * Math.pow(1 + r, nYears)
}

function simpleMaturity(P, rPct, nYears){
  return P + (P * (rPct/100) * nYears)
}

export default function FDCalculator({lang='EN'}){
  const [principal,setPrincipal]=useState(500000)
  const [rate,setRate]=useState(6.5)
  const [tenure,setTenure]=useState(5)
  const [tenureUnit,setTenureUnit]=useState('Years')
  const [interestType,setInterestType]=useState('Compound')

  // compute years as number
  const years = tenureUnit === 'Years' ? Number(tenure) : (tenureUnit === 'Months' ? Number(tenure)/12 : Number(tenure)/365)

  const maturity = interestType === 'Compound' ? compoundMaturity(Number(principal), Number(rate), years) : simpleMaturity(Number(principal), Number(rate), years)
  const interest = maturity - Number(principal)

  const data = {
    labels: ['Principal Amount','Interest Earned','Maturity Amount'],
    datasets:[{label:'Amount',data:[Number(principal), Math.round(interest), Math.round(maturity)],backgroundColor:['#2dd4bf','#34d399','#7c3aed']}]
  }

  const t = {
    EN: {
      title: 'Fixed Deposit Calculator',
      principal: 'Principal Amount',
      customerCategory: 'Customer Category',
      interestType: 'Interest Type',
      tenure: 'Tenure',
      calcResults: 'Calculation Results',
      maturityAmount: 'Maturity Amount',
      interestEarned: 'Interest Earned',
      apy: 'Annual Percentage Yield'
    },
    JA: {
      title: '定期預金計算機',
      principal: '元本',
      customerCategory: '顧客カテゴリ',
      interestType: '利息タイプ',
      tenure: '期間',
      calcResults: '計算結果',
      maturityAmount: '満期金額',
      interestEarned: '受取利息',
      apy: '年利'
    }
  }

  const L = t[lang] || t.EN

  return (
    <div className="container fd-page">
      <div className="fd-grid">
        <div className="fd-card">
          <h3>{L.title}</h3>
          <label>{L.principal}</label>
          <input value={principal} onChange={e=>setPrincipal(e.target.value)} />

          <label>{L.customerCategory}</label>
          <select>
            <option>Regular</option>
            <option>Senior Citizen</option>
            <option>Employee</option>
          </select>

          <label>{L.interestType}</label>
          <div style={{display:'flex',gap:'0.5rem',marginBottom:'.5rem'}}>
            <button className={interestType==='Compound'? 'btn primary':'btn ghost'} onClick={()=>setInterestType('Compound')}>Compound Interest</button>
            <button className={interestType==='Simple'? 'btn primary':'btn ghost'} onClick={()=>setInterestType('Simple')}>Simple Interest</button>
          </div>

          <label>{L.tenure}</label>
          <div style={{display:'flex',gap:'.5rem',alignItems:'center'}}>
            <input style={{flex:'1'}} value={tenure} onChange={e=>setTenure(e.target.value)} />
            <select value={tenureUnit} onChange={e=>setTenureUnit(e.target.value)}>
              <option>Years</option>
              <option>Months</option>
              <option>Days</option>
            </select>
          </div>

          <button className="btn primary" onClick={()=>{ /* UI updates automatically */ }}>Calculate Returns</button>
        </div>

        <div className="fd-results">
          <div className="results-card">
            <h4>{L.calcResults}</h4>
            <p><strong>{L.maturityAmount}</strong><br/>₹{Math.round(maturity).toLocaleString()}</p>
            <p><strong>{L.interestEarned}</strong><br/>₹{Math.round(interest).toLocaleString()}</p>
            <p><strong>{L.apy}</strong><br/>{rate}%</p>
          </div>
          <div className="chart-card">
            <Bar data={data} />
          </div>
        </div>
      </div>
    </div>
  )
}
