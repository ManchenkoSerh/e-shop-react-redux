import React from "react"
import {AppBar,Tabs,Tab,Grid,Typography,IconButton,Toolbar} from "@material-ui/core";



const Header=()=>{
    return(
        <AppBar position="static">
            <Toolbar variant="dense">
                <IconButton edge="start"  color="inherit" aria-label="menu">
                    Tool
                </IconButton>
                <Typography variant="h6" color="inherit">
                    Photos
                </Typography>
            </Toolbar>
        </AppBar>
    )
}
export default Header
