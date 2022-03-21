import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/Header.css';
import '../../index.css';
import Logo from '../../img/logo.png';

export default function Header() {
  return (
    <>
      <header className="Header">
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid men ">
            <Link to="/">
              <img src={Logo} alt="Logo" className="logo" />
            </Link>
            <div
              class="collapse navbar-collapse justify-content-end"
              id="navbarNavAltMarkup"
            >
              <div class="navbar-nav navbaixa">
                <Link to="/">
                  <a className="nav-link ">Home</a>
                </Link>
                <Link to="/Quemsomos">
                  <a className="nav-link">Quem Somos</a>
                </Link>
                <Link to="/Pedidos">
                  <a className="nav-link">Pedidos</a>
                </Link>
                <Link to="/Cadastro">
                  <a className="nav-link">Cadastro</a>
                </Link>
                <Link to="/Contato">
                  <a className="nav-link">Contato</a>
                </Link>
              </div>
              <div class="icons">
                <a href="https://pt-br.facebook.com/">
                  <i class="bi bi-facebook"></i>
                </a>
                <a href="https://www.instagram.com/">
                  <i class="bi bi-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
