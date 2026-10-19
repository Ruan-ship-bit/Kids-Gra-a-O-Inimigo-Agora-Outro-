import { useState } from "react";
import "./Cabecalho.css";
import React from 'react'
import { Link } from "react-router-dom"
// ---------- Ícones SVG ----------
const IconeBusca = (props) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
);
 
const IconeCarrinho = (props) => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <path d="M2 3h2.5l2.2 11.2a2 2 0 0 0 2 1.6h8.6a2 2 0 0 0 2-1.5L21 7H5.6" />
    <circle cx="9.5" cy="20" r="1.4" />
    <circle cx="17.5" cy="20" r="1.4" />
  </svg>
);
 
const IconeUsuario = (props) => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...props}
  >
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1" />
  </svg>
);
 
//SVG é nada mais do que um formato de imagem


export default function Cabecalho(props) {
  const [termoBusca, setTermoBusca] = useState("");
  let quantidadeCarrinho = 0;
  const enviarBusca = (evento) => {
    evento.preventDefault();
    aoBuscar(termoBusca.trim());
  };
  const aoBuscar = () => {};
  const aoClicarCarrinho = () => {};
  const aoClicarUsuario = () => {};
  return (
    <header className="cabecalho">
        <div className="cabecalho__logo"> </div>
        <nav className="cabecalho__busca">
          <IconeBusca/> 
          <input type="text"  className="cabecalho__campo-busca " placeholder="Digite o que Deseja Pesquisar"/>
          
        </nav>
        <button
          type="button"
          className="cabecalho__botao"
          onClick={aoClicarCarrinho}
          aria-label={`Carrinho com ${quantidadeCarrinho} itens`}
        >
          <IconeCarrinho />
          <span className="cabecalho__texto-carrinho">Carrinho</span>
          <span className="cabecalho__contador">{quantidadeCarrinho}</span>
        </button>

       
        <Link
          to={"/user"}
          //type="button"
          className="cabecalho__botao"
          //onClick={aoClicarUsuario}
          aria-label="Minha conta"
        >
          <IconeUsuario />
        </Link>

    </header>
  )
}

