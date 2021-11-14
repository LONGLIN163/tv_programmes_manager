import React, { Fragment,useContext } from 'react';
import {List,ListItem ,ListItemText,Typography, ListItemSecondaryAction, IconButton} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
//import { ProgramStore } from '../ProgramStore';
import { useProgramContext } from '../ProgramStore';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';


const Catalog = () => {

    const {
        programmesByType,
        category,
        onItemSelect,
        onDeleteItem,
        onEditItem,
        onAddItemToPlayList
    //} = useContext(ProgramContext)
    } = useProgramContext()

    //console.log("programmesByType----",programmesByType)

    return ( 
        <>
            <Typography 
                variant={"h4" }
                style={{marginTop:20}}
                color="secondary"
                gutterBottom
            >
                Media Resources
            </Typography>
           
            {
            programmesByType.map(([group,programmesByType]) => {
                return(
                    !category || category===group
                    ?<Fragment key={group}>
                        <Typography 
                          variant="h6" 
                          color="secondary"
                          style={{textTransform:'capitalize'}}
                        >
                           {group}
                        </Typography>

                        <List component="nav" >
                            {
                                programmesByType.map( ({id,title}) => {
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
                                            <IconButton edge="end" aria-label="comments" onClick={()=>onEditItem(id)}>
                                                <EditIcon /> 
                                            </IconButton> 
                                            <IconButton edge="end" aria-label="comments" onClick={()=>onDeleteItem(id)}>
                                                <DeleteIcon />
                                            </IconButton>
                                            <IconButton edge="end" aria-label="comments" onClick={()=>onAddItemToPlayList(id)}> 
                                                <PlaylistAddIcon />
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
 
export default Catalog;