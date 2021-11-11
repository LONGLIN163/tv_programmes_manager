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

    //console.log("editMode------",editMode)
    //console.log("programme------",programme)
    const isNotEmpty=programme==={}

    return ( 
        <>
            <Typography 
                variant={"h4" }
                style={{marginTop:20}}
                gutterBottom
                color="secondary"
            >
                { isNotEmpty ? programme.title : "Welcome Preview"}
            </Typography>

            {
                editMode
                ? <Form />
                : <Typography 
                    variant={"subtitle2" }
                >
                    {isNotEmpty ? programme.synopsis : "please select an item!"}
                </Typography>
            }
        </>
     );
}
 
export default Preview;