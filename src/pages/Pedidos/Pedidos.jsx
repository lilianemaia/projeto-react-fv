import React from 'react';
import styles from '../Pedidos/Pedidos.css';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

function Pedidos() {
  return (
    <>
      <Header />
      <h2>Pedidos</h2>
      <p>Encurtamos distâncias e viabilizamos negócios</p>
      <div className="boxpedidos">
        <div className="alignnone">
          <img src="/img/ft-alimentos.png" alt="" />
          <h4>Alimentos</h4>
          <p>Pizza Família Muçarela</p>
        </div>
        <div className={styles.alignnone}>
          <img src="/img/ft-artesanatos.png" alt="" />
          <h4>Artesanatos</h4>
          <p>Bolsa em crochê Azul e Branca</p>
        </div>
        <div className={styles.alignnone}>
          <img src="/img/ft-eletronicos.png" alt="" />
          <h4>Eletrônicos</h4>
          <p>Tablet, Celular e Relógio Smartwatch</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Pedidos;
