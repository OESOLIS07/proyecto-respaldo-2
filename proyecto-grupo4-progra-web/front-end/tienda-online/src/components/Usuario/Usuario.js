import React from 'react';
import PropTypes from 'prop-types';
import styles from './Usuario.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Usuario = () => (
  <div className={styles.Usuario} data-testid="Usuario">
      <form>
        <h2>Ingrese sus datos</h2>
        <br />
        <TextField 
          id="outlined-basic" 
          label="Nombre" 
          variant="outlined" 
        />
        <br />
        <br />
        <TextField 
          id="outlined-basic" 
          label="Apellido" 
          variant="outlined" 
        />
        <br />
        <br />
        <TextField 
          id="outlined-basic" 
          label="Email" 
          variant="outlined" 
        />
        <br />
        <br />
        <TextField 
          id="outlined-basic" 
          label="Telefono" 
          variant="outlined" 
        />
        <br />
        <br />
        <TextField 
          id="outlined-basic" 
          label="Password" 
          variant="outlined" 
          type="Password"
          autoComplete="current-password"
        />
        <br />
        <br />
        <TextField 
          id="outlined-basic" 
          label="Password Confirmacion" 
          type="Password"
          variant="outlined" 
        />
        <br />
        <br />
        <Button variant="contained">Registrar</Button>
      </form>
  </div>
);

Usuario.propTypes = {};

Usuario.defaultProps = {};

export default Usuario;
