import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

const Home = ({ addToCart }) => (
  <div className={styles.Home} data-testid="Home">
    
    <main className={styles['main-content']}>
      <section className={styles['product-list']}>
        <h2>Lámparas</h2>
        <div className={styles['product-items-container']}>
          {products.map((product) => (
            <div className={styles['product-item']} key={product.id}>
              <img src={product.image} alt={product.name} />
              <div className={styles['product-details']}>
                <h3>{product.name}</h3>
                <p>Precio: {product.price}</p>
                <button>
                  <Link to={`/product/${product.id}`}>Ver detalles</Link>
                </button>
                <button onClick={() => addToCart(product)}>Agregar al carrito</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
    <footer className={styles.footer}>
      <div className={styles['footer-content']}>
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
  {
    id: 3,
    name: 'Pantalon',
    price: 16087.5,
    image: 'pantalon1.jpg',
    description: '... Pantalon',
  },
  {
    id: 4,
    name: 'Camisa',
    price: 86087.5,
    image: 'camisa1.jpg',
    description: '... camisa',
  },
];

export { Home, products };
