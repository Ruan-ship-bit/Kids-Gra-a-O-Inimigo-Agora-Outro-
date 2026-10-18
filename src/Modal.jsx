
import './Modal.css';

function Modal( props) {
  let conteudo = null;
  if(props.tipo === "text") {
    conteudo = (
      
        <div className="modal-texto">
        <div className="modal-cabecalho">
            <h2>Editar informação</h2>
            <p>Atualize seus dados de perfil.</p>
        </div>

        <div className="modal-campo">
            <label htmlFor="campo-edicao">Nova informação</label>
            <input
            id="campo-edicao"
            type="text"
            defaultValue={props.valor}
            placeholder="Digite a nova informação"
            />
        </div>

        <div className="modal-acoes">
            <button className="modal-btn-cancelar" onClick={props.onclose}>
            Cancelar
            </button>
            <button className="modal-btn-salvar">
            Salvar alterações
            </button>
        </div>
        </div>

    )
  }
  else if (props.tipo === "image") {
    conteudo = (
     
        <div className="modal-imagem">
        <div className="modal-cabecalho">
            <h2>Foto de perfil</h2>
            <p>Veja sua imagem em tamanho ampliado.</p>
        </div>

        <div className="modal-imagem-visualizacao">
            <img
            src={props.valor}
            alt="Foto de perfil do usuário"
            />
        </div>

        <div className="modal-acoes">
            <button className="modal-btn-cancelar" onClick={props.onclose}>
            Fechar
            </button>
            <button className="modal-btn-salvar">
            Alterar foto
            </button>
        </div>
        </div>

    )
  }
  else conteudo = ( <p> Deu Erro. Fudeu foi tudo.</p>);
  return (
      <div className="modal-fundo" onClick={props.onclose}>
            <div
            className="modal-conteudo"
            onClick={(e) => e.stopPropagation()}
            >
            <button
                className="modal-fechar"
                onClick={props.onclose}
                aria-label="Fechar modal"
            >
                &times;
            </button>

            {conteudo}
            </div>
      </div>
  )
  
}

export default Modal;
