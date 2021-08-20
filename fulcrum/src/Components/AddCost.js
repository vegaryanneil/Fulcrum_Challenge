import React, {useState} from 'react'

const AddCost = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)
    return (
        <div>
           <h3>Add new cost</h3>
            <form>
             <div className="form-control">
                 <label htmlFor="text">Text</label>
                 <input type="text" id="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Add description..."/>
            </div>
            <div className="form-control">
                <label htmlFor="amount ">Amount <br/>
                (negative - expense, positive - income) 
                </label>
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter cost..."/>
            </div>
            <button className="btn">Add Cost</button>
            </form> 
        </div>
    )
}

export default AddCost
