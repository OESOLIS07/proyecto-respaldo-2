//import logo from './logo.svg';
import './App.css';
import axios from "axios";
import Usuario from "./components/Usuario/Usuario";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


function App() {
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
            <Button color="inherit" href="/Usuario">REGISTRO</Button>
          </Toolbar>
        </AppBar>
      </Box>
  
      <Router>
        <Routes>
          <Route path="/Usuario" element={<Usuario/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
