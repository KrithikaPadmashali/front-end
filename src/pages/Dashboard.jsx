import React from 'react'

export default function Dashboard({user, lang='EN'}){
  const t = {
    EN: {
      customerProfile: 'Customer Profile',
      fdAccount: 'FD Account',
      fdProducts: 'FD Products',
      transactionHistory: 'Transaction History',
      name: 'Name',
      id: 'ID',
      balance: 'Balance'
    },
    JA: {
      customerProfile: '顧客プロフィール',
      fdAccount: '定期預金口座',
      fdProducts: '定期預金商品',
      transactionHistory: '取引履歴',
      name: '名前',
      id: 'ID',
      balance: '残高'
    }
  }

  const L = t[lang] || t.EN

  return (
    <div className="container dashboard-page light-blue-bg">
      <div className="dash-grid">
        <div className="card profile">
          <h3>{L.customerProfile}</h3>
          <p>{L.name}: {user?.name || user?.email}</p>
          <p>{L.id}: CUST001</p>
        </div>
        <div className="card fd-account">
          <h3>{L.fdAccount}</h3>
          <p>ACC12345</p>
          <p>{L.balance}: ₹50,000</p>
        </div>
        <div className="card products">
          <h3>{L.fdProducts}</h3>
          <p>1-Year FD Plan — 6.5%</p>
        </div>
        <div className="card transactions">
          <h3>{L.transactionHistory}</h3>
          <table>
            <thead><tr><th>Date</th><th>Type</th><th>Amount</th><th>Status</th></tr></thead>
            <tbody>
              <tr><td>2024-09-24</td><td>DEPOSIT</td><td>₹50,000</td><td>SUCCESS</td></tr>
              <tr><td>2024-09-20</td><td>INTEREST</td><td>₹270</td><td>SUCCESS</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
