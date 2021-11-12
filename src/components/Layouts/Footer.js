import React,{useContext} from 'react';
import {withWidth, AppBar,Tabs,Tab} from '@material-ui/core';

import { ProgramContext } from '../ProgramStore';
import { withStyles } from '@material-ui/core/styles';


const styles = {
    tabsCenter: {
      flexGrow: 1,
    }
  };
  

const Footer = ({classes}) => {

    const {programTypes,category,onCatSelect} = useContext(ProgramContext)

    const onIndexSelect = (e,index) => {
        onCatSelect(index===0 ? '': programTypes[index-1])
    }

    const getIndex=()=>{
        return category ? programTypes.findIndex(item=>item===category)+1:0
    }


    return ( 
        <AppBar position='static'>
            <Tabs
                value={getIndex()}
                onChange={onIndexSelect}
                indicatorColor="secondary"
                textColor="secondary"
                variant="scrollable"
                scrollButtons="auto"
                
            >
                <Tab label="All" key={0} className={classes.tabsCenter}/>
                {
                    programTypes.map((item,index) => {
                        return (
                            <Tab label={item} key={index+1} className={classes.tabsCenter}/>
                        )
                    })
                }
            </Tabs>
        </AppBar>  
    );
    
}
 
export default withStyles(styles)(Footer);withWidth()(Footer);