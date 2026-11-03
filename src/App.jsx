import { useState } from 'react'
import { useEffect } from 'react';
import './App.css'
import Cabecalho from './Cabecalho'
import  Produtoscad from './produtoscad'
import { ListaProdutos } from './dados/projetos';
import { useCarrinho } from './ContextoCarrinho';

function App() {

  const { adicionarProduto, quantidadeTotal } = useCarrinho();
  const [termoBusca, setTermoBusca ] = useState("");

  function aoBuscar(termo) {
   setTermoBusca(termo);
}
  const produtosFiltrados = ListaProdutos.filter((produto) =>
  produto.nome.toLowerCase().includes(termoBusca.toLowerCase())
);

  useEffect(() => {
    document.title = "KidsGraça - Home";
  }, []);

  return (

      <div>
        <Cabecalho onBuscar = {aoBuscar}/>
              <main className="lista">
       
        {produtosFiltrados.length === 0 ? (
          <p style={{ gridColumn: "1 / -1", textAlign: "center", fontSize: "1.2rem", marginTop: "20px" }}>
            Nenhum produto encontrado para "{termoBusca}" 
          </p>
        ) : (
          produtosFiltrados.map((p) => (
            <Produtoscad
              key={p.id}
              produto={p}
              onAdicionar={adicionarProduto}
            />
          ))
        )}
      </main>
    </div>
    
  )
    
  
}

export default App
