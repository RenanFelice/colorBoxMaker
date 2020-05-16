import React, {createContext, useReducer } from 'react';
import boxReducer from '../reducers/boxReducer.js'

const initialBoxes = [{ backgroundColor: 'purple', width: '400px', height: '400px' },
{ backgroundColor: 'red', width: '400px', height: '400px' }]

export const BoxesContext = createContext();



const BoxesContextProvider = (props) => {
    const [boxes, dispatch] = useReducer(boxReducer, initialBoxes)
    return ( 
        <BoxesContext.Provider value={{boxes, dispatch}}>
            {props.children}
        </BoxesContext.Provider>
     );
}
 
export default BoxesContextProvider;