import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.css';

const Home = ({ addToCart }) => (
  <div className={styles.Home} data-testid="Home">
    <header className="header">
      <div className="header-logo">
        <h1>TrendNet</h1>
      </div>
      <nav className="header-nav">
        <ul>
          <li>
            <a href="#">Productos</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
          <li>
            <a href="#">Carrito</a>
          </li>
        </ul>
      </nav>
    </header>
    <main className="main-content">
      <section className="product-list">
        <h2>Lámparas</h2>
        <div className="product-items-container">
          <div className="product-item" onClick={() => addToCart({ name: 'Lámpara de Mesa', price: 29617.5 })}>
            <img src="lamp1.jpg" alt="Lámpara" />
            <h3>Lámpara de Mesa</h3>
            <p>€29.617,50</p>
          </div>
          <div className="product-item" onClick={() => addToCart({ name: 'Lámpara Piso Decorativa', price: 46087.5 })}>
            <img src="lamp2.jpg" alt="Lámpara" />
            <h3>Lámpara Piso Decorativa</h3>
            <p>€46.087,50</p>
          </div>
          <div className="product-item" onClick={() => addToCart({ name: 'Lámpara de Escritorio', price: 19492.5 })}>
            <img src="lamp3.jpg" alt="Lámpara" />
            <h3>Lámpara de Escritorio</h3>
            <p>€19.492,50</p>
          </div>
          <div className="product-item" onClick={() => addToCart({ name: 'Lámpara de Mesa Decorativa', price: 27562.5 })}>
            <img src="lamp4.jpg" alt="Lámpara" />
            <h3>Lámpara de Mesa Decorativa</h3>
            <p>€27.562,50</p>
          </div>
          <div className="product-item" onClick={() => addToCart({ name: 'Lámpara de Piso', price: 69937.5 })}>
            <img src="lamp5.jpg" alt="Lámpara" />
            <h3>Lámpara de Piso</h3>
            <p>€69.937,50</p>
            </div>
         </div>
      </section>
    </main>
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 TrendNet. Todos los derechos reservados.</p>
        <ul>
          <li>
            <a href="#">Política de privacidad</a>
          </li>
          <li>
            <a href="#">Términos y condiciones</a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
);

Home.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

Home.defaultProps = {};

export default Home;
