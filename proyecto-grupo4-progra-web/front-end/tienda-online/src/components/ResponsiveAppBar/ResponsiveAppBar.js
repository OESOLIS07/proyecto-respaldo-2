import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery } from '@mui/material';
import theme from '../../theme';

const ResponsiveAppBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isSmScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleOpenNavMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleOpenNavMenu}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorEl)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">Inicio</Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">Registro</Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">Carrito</Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">USUARIO</Typography>
            </MenuItem>
          </Menu>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Tienda OnLine
          </Typography>
          {!isSmScreen && ( // Conditionally render the buttons
            <>
              <Button color="inherit" href="/" >Inicio</Button>
              <Button color="inherit" href="/Usuario">Registro</Button>
              <Button color="inherit" href="/cart">Carrito</Button>
              <Button color="inherit" href="/Usuario">USUARIO</Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};

export default ResponsiveAppBar;