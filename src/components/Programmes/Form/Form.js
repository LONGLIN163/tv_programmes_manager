import React,{useState,useEffect} from 'react';
import {FormControl,MenuItem,InputLabel,Select,TextField,Button} from '@material-ui/core';
import { useProgramContext } from '../../ProgramContextProvider';


const Form = ({programme,onSubmit}) => {

    const [id,setId]=useState('');
    const [title,setTitle]=useState('');
    const [synopsis,setSynopsis]=useState('');
    const [imageUrl,setImageUrl]=useState('');
    const [duration,setDuration]=useState('');
    const [type,setType]=useState('');
    const [episode,setEpisode]=useState('');
    const [chapter,setChapter]=useState('');

    const {setOpenDialog,programTypes} = useProgramContext()

    const [currentPrograme,setCurrentPrograme]=useState({});
    
    //console.log("onSubmit------",onSubmit)
    //console.log("programme in Form-------",programme)

    useEffect(() => {
        if(programme){
            setCurrentPrograme(programme)
            setId(programme.id)
            setTitle(programme.title)
            setSynopsis(programme.synopsis)
            setImageUrl(programme.imageUrl)
            setDuration(programme.duration)
            setType(programme.type)
            setEpisode(programme.episode)
            setChapter(programme.chapter)
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
        if(name==="imageUrl") setImageUrl(value);
        if(name==="duration") setDuration(value);
        if(name==="episode") setEpisode(value);
        if(name==="chapter") setChapter(value);
    };

    useEffect(() => {
        setCurrentPrograme({id,title,type,synopsis,imageUrl,duration,episode,chapter})
    },[title,type,synopsis,imageUrl,duration,episode,chapter])

    const handleSubmit = () => {
        onSubmit(currentPrograme)
        setCurrentPrograme({
            title:'',
            imageUrl:'',
            type:'',
            synopsis:'',
            duration:'',
            episode:'',
            chapter:''
        })
        setOpenDialog(false)
    }

    return (<>
                <form action="" title="formPane">
                    <TextField
                        label="Title"
                        value={title}
                        name='title'
                        onChange={handleChange}
                        margin="normal"
                        fullWidth
                    />
                    <br />
                    <TextField
                        label="Image"
                        value={imageUrl}
                        name='imageUrl'
                        onChange={handleChange}
                        margin="normal"
                        fullWidth
                    />
                    <br />
                    <TextField
                        label="Duration"
                        value={duration}
                        name='duration'
                        onChange={handleChange}
                        margin="normal"
                        fullWidth
                    />
                    <br />
                    <TextField
                        label="Episode"
                        value={episode}
                        name='episode'
                        onChange={handleChange}
                        margin="normal"
                        fullWidth
                    />
                    <br />
                    <TextField
                        label="Chapter"
                        value={chapter}
                        name='chapter'
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
                        title="formbtn"
                        onClick={handleSubmit}
                        disabled={!title || !programTypes}
                    >
                        { programme ? 'Done' : 'Create' }
                    </Button>

                </form>
    </>);
    
}
 
export default Form;