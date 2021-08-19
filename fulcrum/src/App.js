import React from 'react'
import './App.css';
import Balance from './Components/balance';
import Header from './Components/header'

const App = () => {
  return (
    <div>
      <Header />  
      <div className="container">
        <Balance />
      </div>
    </div>
  )
}

export default App;
