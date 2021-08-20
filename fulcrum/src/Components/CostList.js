import React from 'react'

const costlist = () => {
    return (
        <div>
          <h3>History</h3>
          <ul id="list" className="list"></ul>
            <li className="minus"></li>
            Cash <span>-$2</span><button className="delete-btn"></button>  
        </div>
    )
}

export default costlist
