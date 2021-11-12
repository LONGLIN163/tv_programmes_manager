
import React, { createContext} from 'react';

export const ProgramContext = createContext({})

export const ProgramStore = (props) => {
    const {
        initProgrammes,
        programme,
        setProgram,
        category,
        editMode,
        setEditMode,
        openDialog,
        setOpenDialog,
        programTypes,
        programmesByType,
        programmesInPlayList,
        onItemCreate,
        onCatSelect,
        onEditItem,
        onEditForm,
        onDeleteItem,
        onDeleteItemFromPlayList,
        onItemSelect,
        onAddItemToPlayList,
        DupProgramWarningOpen,
    }=props.contextValue;

    return ( 
        <ProgramContext.Provider value={{
            initProgrammes,
            programme,
            setProgram,
            category,
            editMode,
            setEditMode,
            openDialog,
            setOpenDialog,
            programTypes,
            programmesByType,
            programmesInPlayList,
            onItemCreate,
            onCatSelect,
            onEditItem,
            onEditForm,
            onDeleteItem,
            onDeleteItemFromPlayList,
            onItemSelect,
            onAddItemToPlayList,
            DupProgramWarningOpen,
        }}>
            {props.children}
        </ProgramContext.Provider>
     );
}
 
