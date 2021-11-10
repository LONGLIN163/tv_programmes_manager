
import React,{useEffect,useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {ProgramStore} from './ProgramStore'
import Header from './Layouts/Header';
import { programTypes,programmes } from '../store';
 
const App = () => {
    const [initProgrammes,setInitProgrammes]=useState([]);
    const [programme,setProgram]=useState({});
    const [category,setCategory]=useState('');
    const [editMode,setEditMode]=useState(false);
    const [programmesByType,setProgrammesByType]=useState({});

    const initailProgrammes=()=>{
        return programTypes.reduce((programmes, category) => ({
            ...programmes,
            [category]:[]
        }),{})
    }

    const initProgrammesTemp=initailProgrammes()
    const getProgrammesByType = () => {
        return Object.entries( 
          programmes.reduce((programmes,programme) => {
              const {type}=programme
              programmes[type] = [...programmes[type],programme]
              return programmes;
            },initProgrammesTemp)
        )
    }

    useEffect(() => {
        setInitProgrammes(initProgrammesTemp)
        setProgrammesByType(getProgrammesByType())
    },[])
    
    const contextValue={
        initProgrammes,
        programme,
        category,
        editMode,
        programmesByType
    }
    //console.log("contextValue--------",contextValue)

    return ( 
        <ProgramStore contextValue={contextValue}>
            <CssBaseline />
            <Header />
        </ProgramStore>
     );
}
 
export default App;

