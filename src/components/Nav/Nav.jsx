import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import Logo from '../../img/Logo.png';

export default function Nav() {
  return (
    <nav class="navbar navbar-expand-lg  menu">
      <div class="container-fluid menu">
        <Link to="/">
          <img src={Logo} alt="Logo" className="logo" />
        </Link>
        <div class="navbar-nav navbaixa">
          <Link to="/">
            <a className="nav-link">Home</a>
          </Link>
          <Link to="/Quemsomos">
            <a className="nav-link">Quem somos</a>
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
      </div>
    </nav>
  );
}
