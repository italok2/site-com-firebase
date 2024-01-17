import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DrawerMenu from './DrawerMenu';

const Menu = () => {
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
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleDrawerOpen}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        italok2
                    </Typography>
                    <NavLink to="/login" >
                        Login
                    </NavLink>
                </Toolbar>
            </AppBar>
            <DrawerMenu open={drawerOpen} onClose={handleDrawerClose} />
        </div>
    )
}

export default Menu;