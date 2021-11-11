import React from 'react';
import {Grid,Paper} from '@material-ui/core';

import {Catalog,Preview} from './'
import { withStyles } from '@material-ui/core/styles';


const styles=theme=> console.log("theme------",theme) || ({
    paperStyle:{
        padding:20 , 
        overflow:'auto',
        [theme.breakpoints.up('sm')]:{
            marginTop:5,
            height:'calc(100%-10px)'
        },
        [theme.breakpoints.down('xs')]:{
            height:'100%'
        }
    },
    '@global':{
        'html, body, #root':{
            height: '100%'
        },
    },
    container:{
        [theme.breakpoints.up('sm')]:{
            height: 'calc(100% - 64px - 48px)' 
        },
        [theme.breakpoints.down('xs')]:{
            height: 'calc(100% - 56px - 48px)'
        }
    },
    item:{
        [theme.breakpoints.down('xs')]:{
            height: '50%'
        }
    }
})

const ContentView = ({classes}) => {
    return(
        <Grid container className={classes.container}>
            <Grid item xs={12} sm={6} className={classes.item}>
                <Paper className={classes.paperStyle}>
                    <Catalog />
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6} className={classes.item}>
               <Paper className={classes.paperStyle}>
                    <Preview />
                </Paper>
            </Grid>
        </Grid>
    )
}

export default withStyles(styles)(ContentView) ;
    

 
