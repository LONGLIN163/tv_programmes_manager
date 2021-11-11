
import React, { createContext} from 'react';

export const ProgramContext = createContext({})

export const ProgramStore = (props) => {
    const {
        initProgrammes,
        programme,
        setProgram,
        category,
        editMode,
        programTypes,
        programmesByType,
        handleExCreate,
        onCatSelect,
        onEditItem,
        onEditForm,
        onDeleteItem,
        onItemSelect

    }=props.contextValue;

    return ( 
        <ProgramContext.Provider value={{
            initProgrammes,
            programme,
            setProgram,
            category,
            editMode,
            programTypes,
            programmesByType,
            handleExCreate,
            onCatSelect,
            onEditItem,
            onEditForm,
            onDeleteItem,
            onItemSelect
        }}>
            {props.children}
        </ProgramContext.Provider>
     );
}
 
