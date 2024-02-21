import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import UserStatus from './UserStatus';


const BasicMenu = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleDrawerOpen = () => {
        setDrawerOpen(true);
    };


    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        CamilaFrios
                    </Typography>
                </Toolbar>
            </AppBar>
        
        </div>
    )
}

export default BasicMenu;