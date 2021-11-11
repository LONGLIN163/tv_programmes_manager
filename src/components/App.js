
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
    const [programTypes,setProgramTypes]=useState(types);
    const [programmesByType,setProgrammesByType]=useState([]);

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
   
    const handleCatSelect=(category)=>{
        setCategory(category)
    }
   
     const handleItemSelect=(id)=>{
       setProgram(initProgrammes.find(ex => ex.id===id))
       setEditMode(false)
     }
   
     const handleExCreate = (programme) => {
       console.log("create programme----",programme)
       const pArr=[]
       pArr.push(programme)
       const temp=initProgrammes.concat(pArr)
       console.log("temp---",temp)
       setInitProgrammes(temp)
     }

     const handleExDel = (id) => {
       const newInitPrograms=initProgrammes.filter(ex => ex.id!==id);
       setInitProgrammes(newInitPrograms)
       setEditMode(programme.id===id ? false : editMode)
       setProgram(programme.id===id ? {} : programme)
     }
   
     const handleItemEdit = (id) => {

       setProgram(initProgrammes.find(ex => ex.id===id))
       setEditMode(true)

     }
   
     const handleExEdit = (programme) => {
       const tempProgramArr=initProgrammes.filter(ex => ex.id!==programme.id);
       tempProgramArr.push(programme)

       setInitProgrammes(tempProgramArr)
       setProgram(programme)
       setEditMode(false)
     }
    
    const contextValue={
        initProgrammes,
        programme,
        setProgram,
        category,
        editMode,
        programTypes,
        programmesByType,
        handleExCreate,
        onCatSelect:handleCatSelect,
        onEditItem:handleItemEdit,
        onEditForm:handleExEdit,
        onDeleteItem:handleExDel,
        onItemSelect:handleItemSelect
    }
    console.log("contextValue--------",contextValue)

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



// const getinitailProgrammes=()=>{
//   return programTypes.reduce((programmes, category) => ({
//     ...programmes,
//     [category]:[]
//   }),{})
// }
// const initProgrammesTemp=getinitailProgrammes()    
// const getProgrammesByType = () => {
//   return Object.entries( 
//     programmes.reduce((programmes,programme) => {
//       const {type}=programme
//       programmes[type] = [...programmes[type],programme]
//       return programmes;
//     },initProgrammesTemp)
//     )
// }
// const getProgrammesByTypeTemp=getProgrammesByType();
// const [programmesByType,setProgrammesByType]=useState(getProgrammesByTypeTemp);

