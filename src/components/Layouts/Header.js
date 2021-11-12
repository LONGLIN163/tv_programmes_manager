import React from 'react';
import {AppBar,Toolbar,Typography} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {DialogPane} from '../Programmes';


const styles={
    flex:{
        flex:1
    }
}

const Header = ({classes}) => {
    console.log("classes2---",classes)

    return ( 
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h3" color="inherit" className={classes.flex}> 
                    VSN Media Kit
                </Typography>
                <DialogPane />
            </Toolbar>
        </AppBar>
     );
}
 
export default withStyles(styles)(Header);