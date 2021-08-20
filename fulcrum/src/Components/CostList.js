import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import { Cost } from './Cost';

const CostList = () => {
    const { costs } = useContext(GlobalContext);

    // console.log(context);
    
    return (
        <div>
          <h3>History</h3>
          <ul id="list" className="list">
          {costs.map(costs => (<Cost key={costs.id} cost={costs}></Cost>))}
          </ul>
        </div>
    )
}

export default CostList
