
import React,{useEffect,useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {ProgramStore} from './ProgramStore'
import {Header,Footer} from './Layouts';
import {types,programmes } from '../store';
import {ContentView} from './Programmes'

 
const App = () => {
    const [initProgrammes,setInitProgrammes]=useState(programmes);
    const [programme,setProgram]=useState({});
    const [category,setCategory]=useState('');
    const [editMode,setEditMode]=useState(false);
    const [openDialog,setOpenDialog]=useState(false);
    const [programTypes,setProgramTypes]=useState(types);
    const [programmesByType,setProgrammesByType]=useState([]);
    const [programmesInPlayList,setProgrammesInPlayList]=useState([]);

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
       console.log("temp---",temp)
       setInitProgrammes(temp)
     }

     const onDeleteItem = (id) => {
       const newInitPrograms=initProgrammes.filter(item => item.id!==id);
       setInitProgrammes(newInitPrograms)
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

     const onAddItemToPlayList = (programme) => {
        const pArr=[]
        pArr.push(programme)
        const temp=programmesInPlayList.concat(pArr)
        console.log("temp---",temp)
        setProgrammesInPlayList(temp)
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
        onItemSelect,
        onAddItemToPlayList
    }
    //console.log("contextValue--------",contextValue)

    return ( 
        <ProgramStore contextValue={contextValue}>
            <CssBaseline />
            <Header />
            <ContentView />
            <Footer />
        </ProgramStore>
     );
}
 
export default App;