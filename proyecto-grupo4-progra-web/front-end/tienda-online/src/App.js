//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import axios from "axios";
import Usuario from "./components/Usuario/Usuario";
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function App() {
  const [cart, setCart] = useState([]);

  // Función para agregar un producto al carrito
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Tienda OnLine
            </Typography>

            <Button color="inherit" to="/" >Inicio</Button>

            <Button color="inherit" to="/Usuario">Registro</Button>

            <Button color="inherit" to="/cart">Carrito</Button>
          </Toolbar>
        </AppBar>
      </Box>
  
      <Router>
        <Routes>
          <Route path="/Usuario" element={<Usuario />} />
          <Route path="/cart" element={<Cart cart={cart} />} />
          <Route path="/" element={<Home addToCart={addToCart} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;