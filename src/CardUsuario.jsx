
import { useState } from 'react';
import './CardUsuario.css';

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
        <p>
          <strong>CEP:</strong> {cep}
        </p>

        <p>
          <strong>E-mail:</strong> {email}
        </p>

        <p>
          <strong>Data de nascimento:</strong> {dataNascimento}
        </p>
      </div>
    </div>
  );
}

export default CardUsuario;
