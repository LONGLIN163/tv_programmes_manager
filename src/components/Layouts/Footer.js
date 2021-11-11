import React,{useContext} from 'react';
import {withWidth, AppBar,Tabs,Tab} from '@material-ui/core';

import { ProgramContext } from '../ProgramStore';

const Footer = () => {

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
                scrollButtons="auto">
                {
                    programTypes.map((item,index) => {
                        return (
                            <Tab label={item} key={index+1} />
                        )
                    })
                }
            </Tabs>
        </AppBar>  
    );
    
}
 
export default withWidth()(Footer);