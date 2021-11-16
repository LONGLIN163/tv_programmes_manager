
import React, { useEffect,useState,createContext,useContext} from 'react';
import {types,programmes } from '../store';



export const ProgramContext = createContext({})
export const useProgramContext = () => useContext(ProgramContext);


export const ProgramContextProvider = ({children}) => {

    const [initProgrammes,setInitProgrammes]=useState(programmes);
    const [programme,setProgram]=useState({});
    const [category,setCategory]=useState('');
    const [editMode,setEditMode]=useState(false);
    const [openDialog,setOpenDialog]=useState(false);
    const [programTypes,setProgramTypes]=useState(types);
    const [programmesByType,setProgrammesByType]=useState([]);
    const [programmesInPlayList,setProgrammesInPlayList]=useState([]);
    const [DupProgramWarningOpen,setDupProgramWarning]=useState(false);


    const getProgramTypes=()=>{
        const initData=programTypes.reduce((initProgrammes, category) => ({
          ...initProgrammes,
          [category]:[]
        }),{})
        return Object.entries( 
          initProgrammes.reduce((initProgrammes,programme) => {
            const {type}=programme
            initProgrammes[type] = [...initProgrammes[type],programme]
            return initProgrammes;
          },initData)
        )
      }
  
      useEffect(() => {
        setProgrammesByType(getProgramTypes())
      },[initProgrammes])
     
      const onCatSelect=(category)=>{
          setCategory(category)
      }
     
       const onItemSelect=(id)=>{
         setProgram(initProgrammes.find(item => item.id===id))
         setEditMode(false)
       }
     
       const onItemCreate = (programme) => {
         const pArr=[]
         pArr.push(programme)
         const temp=initProgrammes.concat(pArr)
         setInitProgrammes(temp)
       }
  
       const onDeleteItem = (id) => {
         const tempPrograms=initProgrammes.filter(item => item.id!==id);
         setInitProgrammes(tempPrograms)
         setEditMode(programme.id===id ? false : editMode)
         setProgram(programme.id===id ? {} : programme)
       }
  
       const onDeleteItemFromPlayList = (id) => {
         const tempPrograms=programmesInPlayList.filter(item => item.id!==id);
         setProgrammesInPlayList(tempPrograms)
         setEditMode(programme.id===id ? false : editMode)
         setProgram(programme.id===id ? {} : programme)
       }
     
       const onEditItem = (id) => {
         setProgram(initProgrammes.find(item => item.id===id))
         setEditMode(true)
       }
     
       const onEditForm = (programme) => {
         const tempProgramArr=initProgrammes.filter(item => item.id!==programme.id);
         tempProgramArr.push(programme)
  
         setInitProgrammes(tempProgramArr)
         setProgram(programme)
         setEditMode(false)
       }
  
       const onAddItemToPlayList = (id) => {
  
          const prePlayListIdArr=programmesInPlayList.map(p => p.id);
          //console.log("prePlayListIdArr----",prePlayListIdArr)
  
          if(prePlayListIdArr.includes(id)){
            setDupProgramWarning(true)
            return
          }
  
          const programAdded=initProgrammes.find(item => item.id===id)
          const programAddedArr=[]
          programAddedArr.push(programAdded)
          const temp=programmesInPlayList.concat(programAddedArr)
          //console.log("temp2---",temp)
          setProgrammesInPlayList(temp)
          setDupProgramWarning(false)
      }
      
      const contextValue={
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
      }
      //console.log("contextValue--------",contextValue)

    return ( 
        <ProgramContext.Provider value={contextValue}>
            {children}
        </ProgramContext.Provider>
     );
}
