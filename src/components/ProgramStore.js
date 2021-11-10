
import React, { createContext, useReducer} from 'react';

export const ProgramContext = createContext({})

export const ADD_PROGRAM = "ADD_PROGRAM"
export const DEL_PROGRAM = "DEL_PROGRAM"
export const UPDATE_PROGRAM = "UPDATE_PROGRAM"

const reducer= (state,action)=>{
    switch(action.type){
        case ADD_PROGRAM:
            return action.PROGRAM
        case DEL_PROGRAM:
            return action.PROGRAM
        case UPDATE_PROGRAM:
            return action.PROGRAM
        default:
            return state
    }
}

export const ProgramStore = (props) => {
    console.log("props---",props)
    const [color,dispatch]=useReducer(reducer,'blue')

    return ( 
        <ProgramContext.Provider value={props}>
            {props.children}
        </ProgramContext.Provider>
     );
}
 
