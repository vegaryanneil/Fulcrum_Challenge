import React from 'react'
import './App.css';
import AddCost from './Components/AddCost';
import Balance from './Components/Balance';
import CostList from './Components/CostList';
import Expenses from './Components/Expenses';
import Header from './Components/Header'

import { GlobalProvider } from './Context/GlobalState'

const App = () => {
  return (
    <GlobalProvider>

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
    </GlobalProvider>
  );
}

export default App;
