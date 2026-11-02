import { useState } from 'react'
import { useEffect } from 'react';
import './App.css'
import Cabecalho from './Cabecalho'
import  Produtoscad from './produtoscad'
import { ListaProdutos } from './dados/projetos';


function App() {

  function adicionar(produto) {alert(`Você adicionou: ${produto.nome}`);}
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
      {produtosFiltrados.map((p) => (
        <Produtoscad
          key={p.id}
          produto={p}
          onAdicionar={adicionar}
        />
      ))}
    </main>
    </div>
    
  )
    
  
}

export default App
