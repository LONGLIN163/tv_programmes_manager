import React, {useState,useContext } from 'react';
import {Dialog,DialogContent,DialogContentText,DialogTitle,Fab,} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import {Form} from './';
import { ProgramContext } from '../ProgramStore';

const DialogPane = () => {

    const {programmesByType,} = useContext(ProgramContext)

    const [open,setOpen]=useState(false);

    const handleToggle=() => {
        setOpen(!open)
    }

    const handleFormSubmit= (programme) => {
        this.handleToggle()
        this.props.onCreate(programme)
    }

    return (
            <>
                <Fab 
                    color="secondary" 
                    aria-label="add" 
                    onClick={handleToggle}
                    size="small"
                >
                    <AddIcon />
                </Fab>

                <Dialog 
                    aria-labelledby="form-dialog-title"
                    open={open}
                    onClose={handleToggle}
                    fullWidth
                >

                    <DialogTitle>
                        Create an item
                    </DialogTitle>

                    <DialogContent>
                        <DialogContentText>
                            please fill out the form below......
                        </DialogContentText>

                        <Form />

                    </DialogContent>

                </Dialog>

            </>

        );
}
 
export default DialogPane;

