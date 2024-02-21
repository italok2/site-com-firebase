// src/components/DrawerMenu.js
import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';


const DrawerMenu = ({ open, onClose }) => {
  
  return (
      <Drawer anchor="left" open={open} onClose={onClose}>
      <List>
      <ListItem button component={Link} to="/Pedidos">
          <ListItemText primary="Pedidos" />
        </ListItem>
        <ListItem button component={Link} to="/CadastrarProduto">
          <ListItemText primary="Produtos" />
        </ListItem>
        <ListItem button component={Link} to="/CadastrarProduto">
          <ListItemText primary="Cadastrar Produtos" />
        </ListItem>
        <ListItem button component={Link} to="/CadastrarProduto">
          <ListItemText primary="Atualizar Produtos" />
        </ListItem>
        <ListItem button component={Link} to="/Vendedores">
          <ListItemText primary="Vendedores" />
        </ListItem>
        <ListItem button component={Link} to="/cadastrarVendedores">
          <ListItemText primary="Cadastrar Vendedores" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default DrawerMenu;
