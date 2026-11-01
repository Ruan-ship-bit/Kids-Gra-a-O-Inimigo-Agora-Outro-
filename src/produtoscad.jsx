import { useState } from 'react';
import './produtoscad.css';

// Componente reutilizável: recebe qualquer "produto" via props.
export default function Produtoscad({ produto, onAdicionar }) {
  const [hover, setHover] = useState(false); // controla o hover

  return (
    <article
      className={`card ${hover ? 'card--hover' : ''}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Wrapper com overflow: hidden para o zoom ficar contido */}
      <div className="card__img-wrapper">
        <img
          src={produto.imagem}
          alt={produto.nome}
          className="card__img"
        />
      </div>

      <h3 className="card__nome">{produto.nome}</h3>
      <p className="card__preco">R$ {produto.preco.toFixed(2)}</p>
      <p className="card__descricao">{produto.descricao}</p>
      <p className="card__cor">{produto.cor}</p>
      <p className="card__stock">Estoque: {produto.stock}</p>
   
   <button
        className="card__btn"
        onClick={() => onAdicionar(produto)}
      >
        Adicionar ao carrinho
      </button>
    </article>
  );
}