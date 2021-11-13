
import React, { createContext} from 'react';

export const ProgramContext = createContext({})

export const ProgramStore = (props) => {
    const {contextValue}=props

    return ( 
        <ProgramContext.Provider value={contextValue}>
            {props.children}
        </ProgramContext.Provider>
     );
}
 