import React, { Fragment,useContext } from 'react';
import {List,ListItem ,ListItemText,Typography, ListItemSecondaryAction, IconButton} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { ProgramContext } from '../ProgramStore';


const Playlist = () => {

    const {
        programmesInPlayList,
        category,
        onItemSelect,
        onDeleteItemFromPlayList
    } = useContext(ProgramContext)

    //console.log("programmesInPlayList----",programmesInPlayList)
    //console.log("programmesInPlayList-category---",category)

    return ( 
        <>
            <Typography 
                variant={"h4" }
                style={{marginTop:20}}
                color="secondary"
                gutterBottom
            >
                PlayList
            </Typography>
            

            <Fragment>
                <List component="nav" >
                    {
                        programmesInPlayList.map( ({id,title}) => {
                            return (
                                <ListItem 
                                    button 
                                    key={id} 
                                    onClick={ () => onItemSelect(id)}
                                >
                                    <ListItemText 
                                        primary={title}
                                    />
                                    <ListItemSecondaryAction>
                                        <IconButton edge="end" aria-label="comments" onClick={()=>onDeleteItemFromPlayList(id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            )
                        })
                    }
                </List>
            </Fragment>

        </>
     )
}
 
export default Playlist;