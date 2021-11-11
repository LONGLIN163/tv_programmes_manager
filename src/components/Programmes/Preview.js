import React,{useContext} from 'react';
import {Typography} from '@material-ui/core';
import {Form} from './';
import { ProgramContext } from '../ProgramStore';

const Preview = () => {
    const {
        editMode,
        programme,
        onEditForm
    } = useContext(ProgramContext)

    console.log("programme in preview-----",programme)

    const isEmpty= Object.keys(programme).length === 0

    return ( 
        <>
            <Typography 
                variant={"h4" }
                style={{marginTop:20}}
                gutterBottom
                color="secondary"
            >
                { isEmpty ? "Welcome Preview" : programme.title }
            </Typography>

            {
                editMode
                ? <Form 
                    onSubmit={onEditForm}
                    programme={programme}
                />
                : <Typography 
                    variant={"subtitle2" }
                >
                    {isEmpty ? "please select an item!" : programme.synopsis }
                </Typography>
            }
        </>
     );
}
 
export default Preview;