import React, { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'

const CostList = () => {
    const context = useContext(GlobalContext);


    
    return (
        <div>
          <h3>History</h3>
          <ul id="list" className="list"></ul>
            <li className="minus"></li>
            Cash <span>-$2</span><button className="delete-btn"></button>  
        </div>
    )
}

export default CostList
