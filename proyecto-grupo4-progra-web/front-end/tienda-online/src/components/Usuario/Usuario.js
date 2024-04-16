import React from 'react';
import PropTypes from 'prop-types';
import styles from './Usuario.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {useState} from "react";

const Usuario = () => {
  const [password, setPassword] = useState("");
  const [passwordConfirmacion, setPasswordConfirmacion] = useState("");

  return(
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
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
        <br />
        <br />
        <TextField 
          id="outlined-basic" 
          label="Password Confirmacion" 
          type="Password"
          variant="outlined" 
          onChange={(e) => {
            setPasswordConfirmacion(e.target.value)
          }}
        />
        <br />
        {password === passwordConfirmacion ?(
          <h2></h2>
          ):(
          <h4>El Password NO COINCIDE</h4>
          )
          }
        <br />
        <Button variant="contained">Registrar</Button>
      </form>
    </div>
  )
};

Usuario.propTypes = {};

Usuario.defaultProps = {};

export default Usuario;
