import React from 'react';
import styles from './Cadastro.css';

function Cadastro() {
  return;
  <>
    <div className={styles.cadastro}>
      <h2>Cadastro</h2>
      <p>Escolha seu segmento e faça seu cadastro.</p>
      <div className={styles.boxcadastro}>
        <div className={styles.alignnone}>
          <img src="/img/ft-empreendedor.png" alt="" />
          <h4>Empreendedor</h4>
          <a href="/html/cadastroempreendedor.html">
            <button className={styles.btn} type="submit">
              Cadastrar
            </button>
          </a>
        </div>
        <div className={styles.alignnone}>
          <img src="/img/ft-entregador.png" alt="" />
          <h4>Entregador</h4>
          <a href="/html/cadastroentregador.html">
            <button className={styles.btn} type="submit">
              Cadastrar
            </button>
          </a>
        </div>
        <div className={styles.alignnone}>
          <img src="/img/ft-cliente.png" alt="" />
          <h4>Cliente</h4>
          <a href="/html/cadastroclientes.html">
            <button className={styles.btn} type="submit">
              Cadastrar
            </button>
          </a>
        </div>
      </div>
    </div>
    ;
  </>;
}

export default Cadastro;
