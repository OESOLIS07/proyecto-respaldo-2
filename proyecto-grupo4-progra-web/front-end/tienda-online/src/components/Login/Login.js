import React from 'react';
import PropTypes from 'prop-types';
import styles from './Login.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Login = () => (
  <div className={styles.Login} data-testid="Login">
    <form>
        <h2>Ingrese su Usuario</h2>
        <br />
        <TextField 
          id="outlined-basic" 
          label="Email" 
          variant="outlined" 
          type="Email"
        />
        <br />
        <br />
        <TextField 
          id="outlined-basic" 
          label="Password" 
          variant="outlined" 
          type="Password"
        />
        <br />
        <br />
        <Button variant="contained">Ingresar</Button>
      </form>
  </div>
);

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
