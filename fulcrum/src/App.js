import React from 'react'
import './App.css';
import AddCost from './Components/AddCost';
import Balance from './Components/Balance';
import CostList from './Components/CostList';
import Expenses from './Components/Expenses';
import Header from './Components/Header'

const App = () => {
  return (
    <div className="container">
      <Header />  
      <div className="balance-container">
        <Balance />
        <div className="expense-container">
        <Expenses />
        <CostList />
        <AddCost />
        </div>
      </div>
    </div>
  )
}

export default App;
