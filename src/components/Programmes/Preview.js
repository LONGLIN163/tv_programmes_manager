import React,{useContext} from 'react';
import {Typography} from '@material-ui/core';
import {Form} from './';
import { ProgramContext } from '../ProgramStore';


const Preview = () => {

    const {
        programTypes,
        editMode,
        programme,
        onEditForm
    } = useContext(ProgramContext)

    return ( 
        <>
            <Typography 
                variant={"h4" }
                style={{marginTop:20}}
                gutterBottom
                color="secondary"
            >
                { programme ? programme.title : "welcome"}
            </Typography>

            {
                editMode
                ? <Form 
                    key={programme ? programme.id : "welcome"}
                    programTypes={programTypes} 
                    onSubmit={onEditForm}
                    programme={programme}
                />
                : <Typography 
                    variant={"subtitle2" }
                >
                    {programme ? programme.synopsis : "please select an item!"}
                </Typography>
            }
        </>
     );
}
 
export default Preview;