
import { useState } from 'react';
import './CardUsuario.css';
import BotaoEditar from './BotaoEditar';

function CardUsuario({ imagem, cep, email, dataNascimento }) {
  const [janela, setJanela] = useState(false);
  return (
    <div className="card-usuario">
      <img
        className="card-usuario-imagem"
        src={imagem}
        alt="Foto do usuário"
        draggable= "false"
      />

      <div className="card-usuario-informacoes">
        <div className='container-flexbox'>
            <p>
                <strong>CEP:</strong> {cep}
            </p>
            <BotaoEditar/>
        </div>
        <div className='container-flexbox'>
            <p>
                <strong>E-mail:</strong> {email}
            </p>
            <BotaoEditar/>
        </div>

        <div className='container-flexbox'>
            <p>
                <strong>Data de nascimento:</strong> {dataNascimento}
            </p>
            <BotaoEditar/>
        </div>
        
        
      </div>
    </div>
  );
}

export default CardUsuario;
