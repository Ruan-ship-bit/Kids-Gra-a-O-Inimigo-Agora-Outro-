import React, { useEffect } from 'react'
import "./PerfilUsuario.css"
import Cabecalho from './Cabecalho'
import CardUsuario from './CardUsuario'

function PerfilUsuario() {
  useEffect(() => {
    document.title = "Perfil do Usuário";
  }, [])
  return (
    
    <div className="perfil-pagina">
      <div className="perfil-decoracao perfil-decoracao-azul"></div>
      <div className="perfil-decoracao perfil-decoracao-laranja"></div>

      <header className="perfil-cabecalho">
        <span className="perfil-etiqueta">ÁREA PESSOAL</span>
        <h1>Meu perfil</h1>
        <p>Suas informações, organizadas em um só lugar.</p>
      </header>

      <section className="perfil-conteudo">
        <CardUsuario />
      </section>

      <footer className="perfil-rodape">
        <span>Minha conta</span>
        <span className="perfil-ponto"></span>
        <span>Seus dados em um só lugar</span>
      </footer>
    </div>
  )
}

export default PerfilUsuario
