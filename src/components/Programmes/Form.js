import React,{useState,useEffect,useContext} from 'react';
import {FormControl,MenuItem,InputLabel,Select,TextField,Button} from '@material-ui/core';
import { ProgramContext } from '../ProgramStore';


const Form = () => {

    const [id,setId]=useState('');
    const [title,setTitle]=useState('');
    const [synopsis,setSynopsis]=useState('');
    const [type,setType]=useState('');
    const [currentPrograme,setCurrentPrograme]=useState({});
    
    const {programme,onItemCreate,programTypes} = useContext(ProgramContext)

    useEffect(() => {
        if(programme){
            setCurrentPrograme(programme)
        }
        setCurrentPrograme({title,synopsis,type})
    },[])

    const handleChange=({target:{value,name}}) => {
        if(name==="title"){
            setTitle(value);
            setId(value);
        }
        if(name==="type") setType(value);
        if(name==="synopsis") setSynopsis(value);
    };

    useEffect(() => {
        setCurrentPrograme({id,title,type,synopsis})
    },[title,type,synopsis])

    const handleSubmit = () => {
        console.log("currentPrograme-------",currentPrograme)
        onItemCreate(currentPrograme)
        setCurrentPrograme({
            title:'',
            synopsis:'',
            type:''
        })

    }
    


    return (<>
                <form action="">
                    <TextField
                        label="Title"
                        value={title}
                        name='title'
                        onChange={handleChange}
                        margin="normal"
                        fullWidth
                    />
                    <br />
                    <FormControl fullWidth>
                        <InputLabel>Types</InputLabel>
                        <Select
                            value={type}
                            name='type'
                            onChange={handleChange}
                        >
                            {

                                programTypes.map( (cat) => {
                                    return(
                                        <MenuItem key={cat} value={cat}>{cat}</MenuItem>
                                    )
                                })
                            }
                        </Select>
                    </FormControl>
                    <br />
                    <TextField
                        multiline
                        rows="4"
                        label="Synopsis"
                        value={synopsis}
                        name='synopsis'
                        onChange={handleChange}
                        margin="normal"
                        fullWidth
                    />

                    <br />
                    <Button 
                        variant="contained"
                        color="secondary"
                        onClick={handleSubmit}
                        disabled={!title || !programTypes}
                    >
                        { programme ? 'Done' : 'Create' }
                    </Button>

                </form>
    </>);
    
}
 
export default Form;