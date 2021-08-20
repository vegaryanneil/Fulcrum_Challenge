import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'

const CostList = () => {
    const { costs } = useContext(GlobalContext);

    // console.log(context);
    
    return (
        <div>
          <h3>History</h3>
          <ul id="list" className="list">
          {costs.map(costs => (<li className="minus">
              {costs.text} <span>-$400</span><button className="delete-btn">x</button>
          </li>))}
          </ul>
        </div>
    )
}

export default CostList
