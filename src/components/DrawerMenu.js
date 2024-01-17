// src/components/DrawerMenu.js
import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const DrawerMenu = ({ open, onClose }) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <List>
        <ListItem button component={Link} to="/login">
          <ListItemText primary="Login" />
        </ListItem>
        <ListItem button component={Link} to="/cadastro">
          <ListItemText primary="Cadastro" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default DrawerMenu;
