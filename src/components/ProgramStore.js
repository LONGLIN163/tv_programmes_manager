
import React, { createContext,useContext} from 'react';
export const useProgramContext = () => useContext(ProgramContext);

export const ProgramContext = createContext({})

export const ProgramStore = (props) => {
    const {contextValue}=props

    return ( 
        <ProgramContext.Provider value={contextValue}>
            {props.children}
        </ProgramContext.Provider>
     );
}
