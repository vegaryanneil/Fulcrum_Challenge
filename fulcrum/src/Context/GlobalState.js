import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer';


// Initial State

const initialState = {
    costs: [
        { id: 1, text: 'Roof', amount: -2000},
        { id: 2, text: 'Water Damage', amount: -500},
        { id: 3, text: 'Landscaping', amount: -300},
        { id: 4, text: 'Tree Removal', amount: -1500},
    ]
}

// Create Context

export const GlobalContext = createContext(initialState);

// Provider component - provides our state and any actions we have
export const GlobalProvider = ({ children }) => {
const [state, dispatch] = useReducer(AppReducer, initialState);

// Get access from any component using useContext
return (<GlobalContext.Provider value={{ costs: state.costs}}>
    {children}
</GlobalContext.Provider>)
}