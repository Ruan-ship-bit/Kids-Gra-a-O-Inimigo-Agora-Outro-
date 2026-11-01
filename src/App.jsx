import { useState } from 'react'
import { useEffect } from 'react';
import './App.css'
import Cabecalho from './Cabecalho'
import  Produtoscad from './produtoscad'
import { ListaProdutos } from './dados/projetos';


function App() {

  function adicionar(produto) {alert(`Você adicionou: ${produto.nome}`);}
  useEffect(() => {
    document.title = "KidsGraça - Home";
  }, []);

  return (

      <div>
        <Cabecalho/>
        <main className="lista">
      {ListaProdutos.map((p) => (
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
