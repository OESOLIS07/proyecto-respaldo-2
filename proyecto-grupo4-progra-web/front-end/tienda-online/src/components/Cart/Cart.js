import React from 'react';
import PropTypes from 'prop-types';
import styles from './Cart.module.css';

const Cart = ({ cart }) => (
  <div className="cart">
    <h2>Carrito de Compras</h2>
    <ul>
      {cart.map((item, index) => (
        <li key={index}>
          <span>{item.name}</span>
          <span>{item.price}</span>
        </li>
      ))}
    </ul>
    <button>Proceder al Pago</button>
  </div>
);

Cart.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

Cart.defaultProps = {};

export default Cart;
