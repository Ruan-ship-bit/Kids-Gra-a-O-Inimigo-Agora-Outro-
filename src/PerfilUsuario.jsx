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
        
      <header className="perfil-cabecalho">
        <div className="perfil-marca">
          <span className="perfil-marca-simbolo">K</span>
          <span className="perfil-marca-nome">
            Kids<span>Graça</span>
          </span>
        </div>

        <div className="perfil-titulo">
          <span className="perfil-etiqueta">
            ÁREA DO CLIENTE
          </span>

          <h1>Meu perfil</h1>

          <p>
            Gerencie suas informações e mantenha
            seus dados sempre atualizados.
          </p>
        </div>
      </header>

      <section className="perfil-conteudo">
        <CardUsuario />
      </section>

      <footer className="perfil-rodape">
        <span>KidsGraça</span>
        <span className="perfil-ponto"></span>
        <span>Sua próxima diversão começa aqui.</span>
      </footer>
    </div>
  )
}

export default PerfilUsuario
