import React, { Fragment,useContext, useEffect,useState } from 'react';
import {List,ListItem ,ListItemText,Typography, ListItemSecondaryAction, IconButton,Button} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { ProgramContext } from '../ProgramStore';
import { DataGrid } from '@mui/x-data-grid';



const Playlist = () => {

    const {
        programmesInPlayList,
    } = useContext(ProgramContext)
    
    
    const [rows, setRows] = useState(programmesInPlayList);
    useEffect(() => {
        setRows(programmesInPlayList)
    },[programmesInPlayList])
    const isEmpty= Object.keys(rows).length === 0
    
    // *******hard code first(there bugs for updating...)******
    const columns=[
        { field: 'id',headerName:'ID',minWidth: 150}, 
        { field: 'title',headerName:'Title',minWidth: 150},
        { field: 'type',headerName:'Type',minWidth: 150},
        { field: 'duration',headerName:'Duration',minWidth: 150},
        { field: 'episode',headerName:'Episode',minWidth: 150},
        { 
            field: 'chapter',
            headerName:'Chapter',
            minWidth: 150,
        }
    ]

      let haha=[]
    
      const handlePurge = () => {

        setRows(rows.filter(item => { return !haha.includes(item.id); }))

      };

  

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
                {
                    !isEmpty
                    ?<>
                        <div style={{ height: 600, width: '100%' }}>
                            <DataGrid
                                columns={columns}
                                rows={rows}
                                checkboxSelection
                                disableSelectionOnClick
                                hideFooterPagination
                                onSelectionModelChange={itm => haha=itm}
                            />
                        </div>
                        <br />
                        <Button variant="contained" color="primary" onClick={handlePurge}>
                            Purge
                        </Button>
                      </>
                    :null
                }
            </Fragment>

        </>
     )
}
 
export default Playlist;



{/* <Fragment>
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
</Fragment> */}