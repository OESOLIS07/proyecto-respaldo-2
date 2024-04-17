import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

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
          {products.map((product) => (
            <div className="product-item" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Precio: {product.price}</p>
              <button>
                <Link to={`/product/${product.id}`}>Ver detalles</Link>
              </button>
              <button onClick={() => addToCart(product)}>Agregar al carrito</button>
            </div>
          ))}
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

const products = [
  {
    id: 1,
    name: 'Lámpara de Mesa',
    price: 29617.5,
    image: 'lamp1.jpg',
    description: 'Lámpara de mesa de diseño moderno',
  },
  {
    id: 2,
    name: 'Lámpara Piso Decorativa',
    price: 46087.5,
    image: 'lamp2.jpg',
    description: 'Lámpara de piso decorativa de diseño moderno',
  },
  //...
];

export default Home;