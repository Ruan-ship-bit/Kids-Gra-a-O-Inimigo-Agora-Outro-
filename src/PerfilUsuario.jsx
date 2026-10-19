import React, { useEffect } from 'react'
import "./PerfilUsuario.css"
import Cabecalho from './Cabecalho'
import CardUsuario from './CardUsuario'

function PerfilUsuario() {
  useEffect(() => {
    document.title = "Perfil do Usuário";
  }, [])
  return (
    //header, spann, footer e section são tags semanticas, na pratica são divs com outros nomes
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
        <CardUsuario  imagem={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F7855%2F7855833.png&f=1&nofb=1&ipt=a1b2de4e873e8f3db1b03956fad9de69366462ec0a6ba1cd996569c971eef8c1&ipo=images"}/>
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
