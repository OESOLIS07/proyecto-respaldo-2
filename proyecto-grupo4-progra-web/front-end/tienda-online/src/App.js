//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group'; 
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
import ResponsiveAppBar from './components/ResponsiveAppBar/ResponsiveAppBar';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="App">
      <ResponsiveAppBar />
      <Router>
        <TransitionGroup> 
          <Routes>
            <Route path="/Usuario" element={<Usuario />} />
            <Route path="/cart" element={<Cart cart={cart} />} />
            <Route path="/" element={({ location }) => (
              <CSSTransition key={location.key} classNames="fade" timeout={300}>
                <Home addToCart={addToCart} />
              </CSSTransition>
            )} />
          </Routes>
        </TransitionGroup>
      </Router>
    </div>
  );
}


export default App;