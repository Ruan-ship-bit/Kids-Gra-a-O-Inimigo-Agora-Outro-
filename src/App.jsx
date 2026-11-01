import { useState } from 'react'
import { useEffect } from 'react';
import './App.css'
import Cabecalho from './Cabecalho'
import  produtoscad from './produtoscad'
function App() {

  function adicionar(produto) {alert(`Você adicionou: ${produto.nome}`);}
  useEffect(() => {
    document.title = "KidsGraça - Home";
  }, []);

  return (

      <div>
        <Cabecalho/>
        <main className="lista">
      {products.map((p) => (
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
