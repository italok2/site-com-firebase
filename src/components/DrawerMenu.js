// src/components/DrawerMenu.js
import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const DrawerMenu = ({ open, onClose }) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <List>
        <ListItem button component={Link} to="cadastro">
          <ListItemText primary="Pedido" />
        </ListItem>
        <ListItem button component={Link} to="/cadastro">
          <ListItemText primary="Produtos" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default DrawerMenu;
