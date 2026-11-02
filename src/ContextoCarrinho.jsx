
import { createContext, useContext, useState } from 'react';

const CarrinhoContext = createContext();

export function CarrinhoProvider({ children }) {
  const [itens, setItens] = useState([]);

  function adicionarProduto(produto) {
    setItens((atual) => {
      const existente = atual.find(
        (item) => item.id === produto.id
      );

      if (existente) {
        return atual.map((item) =>
          item.id === produto.id
            ? { ...item, quantidade: item.quantidade + 1 }
            : item
        );
      }

      return [...atual, { ...produto, quantidade: 1 }];
    });
  }

  function removerProduto(id) {
    setItens((atual) =>
      atual.filter((item) => item.id !== id)
    );
  }

  function alterarQuantidade(id, quantidade) {
    if (quantidade < 1) return;

    setItens((atual) =>
      atual.map((item) =>
        item.id === id ? { ...item, quantidade } : item
      )
    );
  }

  function limparCarrinho() {
    setItens([]);
  }

  const quantidadeTotal = itens.reduce(
    (total, item) => total + item.quantidade,
    0
  );

  const valorTotal = itens.reduce(
    (total, item) =>
      total + Number(item.preco) * item.quantidade,
    0
  );

  return (
    <CarrinhoContext.Provider
      value={{
        itens,
        adicionarProduto,
        removerProduto,
        alterarQuantidade,
        limparCarrinho,
        quantidadeTotal,
        valorTotal
      }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}

export function useCarrinho() {
  return useContext(CarrinhoContext);
}