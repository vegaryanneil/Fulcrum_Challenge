import React from 'react'
import './App.css';
import Balance from './Components/balance';
import Expenses from './Components/expenses';
import Header from './Components/header'

const App = () => {
  return (
    <div className="container">
      <Header />  
      <div className="balance-container">
        <Balance />
        <div className="expense-container">
        <Expenses />
        </div>
      </div>
    </div>
  )
}

export default App;
