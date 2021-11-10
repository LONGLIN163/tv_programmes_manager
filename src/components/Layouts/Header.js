import React,{ useContext } from 'react';
import {AppBar,Toolbar,Typography} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import { ProgramContext } from '../ProgramStore';

const styles={
    flex:{
        flex:1
    }
}

const Header = ({classes}) => {
    const {title} = useContext(ProgramContext)

    return ( 
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h3" color="inherit" className={classes.flex}> 
                    h3---{title}
                </Typography>
                {/* <DialogPane /> */}
            </Toolbar>
        </AppBar>
     );
}
 
export default withStyles(styles)(Header);