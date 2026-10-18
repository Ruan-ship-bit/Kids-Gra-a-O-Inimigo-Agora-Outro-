
import { useState } from 'react';
import './CardUsuario.css';
import BotaoEditar from './BotaoEditar';

function CardUsuario({ imagem, cep, email, dataNascimento }) {
  const [janela, setJanela] = useState(false);
  return (
    <div className="card-usuario">
    <div className='container-flexbox'>
        <img
        className="card-usuario-imagem"
        src={imagem}
        alt="Foto do usuário"
        draggable= "false"
      />
        <BotaoEditar id="botao-que-fica-ao-lado-da-imagem"/>
    </div>
      

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
