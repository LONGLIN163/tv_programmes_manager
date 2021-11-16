import React, { Fragment,useContext } from 'react';
import {List,ListItem ,ListItemText,Typography, ListItemSecondaryAction, IconButton} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useProgramContext } from '../../ProgramStore';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';


const Catalog = () => {

    const {
        programmesByType,
        category,
        onItemSelect,
        onDeleteItem,
        onEditItem,
        onAddItemToPlayList
    } = useProgramContext()

    return ( 
        <>
            <Typography 
                variant={"h4" }
                style={{marginTop:20}}
                color="secondary"
                gutterBottom
                title="Media Resources"
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
                          title={group}
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
                                        title={title}
                                        onClick={ () => onItemSelect(id)}
                                    >
                                        <ListItemText 
                                            primary={title}
                                        />
                                        <ListItemSecondaryAction>
                                            <IconButton edge="end" title={title} aria-label="comments" onClick={()=>onEditItem(id)}>
                                                <EditIcon /> 
                                            </IconButton> 
                                            <IconButton edge="end" title={title+'del'} aria-label="comments" onClick={()=>onDeleteItem(id)}>
                                                <DeleteIcon />
                                            </IconButton>
                                            <IconButton edge="end" title={title+'add'} aria-label="comments" onClick={()=>onAddItemToPlayList(id)}> 
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