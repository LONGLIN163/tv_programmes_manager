import React,{useState,useEffect,useContext} from 'react';
import {FormControl,MenuItem,InputLabel,Select,TextField,Button} from '@material-ui/core';
import { ProgramContext } from '../ProgramStore';


const Form = ({programme,onSubmit}) => {

    const [id,setId]=useState('');
    const [title,setTitle]=useState('');
    const [synopsis,setSynopsis]=useState('');
    const [imageUrl,setImageUrl]=useState('');
    const [duration,setDuration]=useState('');
    const [type,setType]=useState('');
    const [episode,setEpisode]=useState('');
    const [chapter,setChapter]=useState('');

    const {setOpenDialog,programTypes} = useContext(ProgramContext)

    const [currentPrograme,setCurrentPrograme]=useState({});
    
    console.log("onSubmit------",onSubmit)
    console.log("programme in Form-------",programme)

    useEffect(() => {
        if(programme){
            setCurrentPrograme(programme)
            setId(programme.id)
            setTitle(programme.title)
            setSynopsis(programme.synopsis)
            setSynopsis(programme.imageUrl)
            setSynopsis(programme.duration)
            setType(programme.type)
            setSynopsis(programme.episode)
            setSynopsis(programme.chapter)
        }
    },[programme])

    const handleChange=({target:{value,name}}) => {
        if(name==="title"){
            setTitle(value);
            if(!programme){
                setId(value);
            }
        }
        if(name==="type") setType(value);
        if(name==="synopsis") setSynopsis(value);
    };

    useEffect(() => {
        setCurrentPrograme({id,title,type,synopsis})
    },[title,type,synopsis])

    const handleSubmit = () => {
        console.log("currentPrograme-------",currentPrograme)

        onSubmit(currentPrograme)

        setCurrentPrograme({
            title:'',
            synopsis:'',
            type:''
        })
        setOpenDialog(false)
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