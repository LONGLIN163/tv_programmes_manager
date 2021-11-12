import React, { Fragment,useContext } from 'react';
import {List,ListItem ,ListItemText,Typography, ListItemSecondaryAction, IconButton} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { ProgramContext } from '../ProgramStore';


const Playlist = () => {

    const {
        programmesInPlayList,
        category,
        onItemSelect,
        onDeleteItem
    } = useContext(ProgramContext)

    console.log("programmesInPlayList----",programmesInPlayList)

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
            {
            programmesInPlayList.map(([group,programmesInPlayList]) => {
                return(
                    !category || category===group
                    ?<Fragment key={group}>

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
                                                <IconButton edge="end" aria-label="comments" onClick={()=>onDeleteItem(id)}>
                                                    <DeleteIcon />
                                                </IconButton>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                    )
                                })
                            }
                        </List>
                    </Fragment>
                    :null  
                )
            })}
        </>
     )
}
 
export default Playlist;