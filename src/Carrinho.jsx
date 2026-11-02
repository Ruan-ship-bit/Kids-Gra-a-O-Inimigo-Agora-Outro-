
import { useCarrinho } from './ContextoCarrinho';
import './Carrinho.css';

export default function Carrinho() {
  const {
    itens,
    removerProduto,
    alterarQuantidade,
    limparCarrinho,
    valorTotal
  } = useCarrinho();

  return (
    <main className="pagina-carrinho">
      <h1>Meu Carrinho</h1>

      {itens.length === 0 ? (
        <p>Seu carrinho está vazio!</p>
      ) : (
        <>
          <section className="lista-carrinho">
            {itens.map((produto) => (
              <article key={produto.id} className="item-carrinho">
                <h3>{produto.nome}</h3>

                <p>
                  Preço: R$ {Number(produto.preco).toFixed(2)}
                </p>

                <div className="quantidade-carrinho">
                  <button
                    onClick={() =>
                      alterarQuantidade(
                        produto.id,
                        produto.quantidade - 1
                      )
                    }
                    disabled={produto.quantidade <= 1}
                  >
                    -
                  </button>

                  <span>{produto.quantidade}</span>

                  <button
                    onClick={() =>
                      alterarQuantidade(
                        produto.id,
                        produto.quantidade + 1
                      )
                    }
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removerProduto(produto.id)}
                >
                  Remover
                </button>
              </article>
            ))}
          </section>

          <section className="resumo-carrinho">
            <h2>Resumo da compra</h2>

            <h3>
              Total: R$ {valorTotal.toFixed(2)}
            </h3>

            <button onClick={limparCarrinho}>
              Limpar carrinho
            </button>
          </section>
        </>
      )}
    </main>
  );
}