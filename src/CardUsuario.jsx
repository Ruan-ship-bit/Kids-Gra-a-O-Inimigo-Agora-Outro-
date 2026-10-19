
import { useEffect, useState } from 'react';
import './CardUsuario.css';
import BotaoEditar from './BotaoEditar';
import { data, replace } from 'react-router-dom';



function CardUsuario({ imagem, cep, email, dataNascimento }) {
  
  const [valorCep, setValorCep] = useState(cep);
  const [valorEmail, setValorEmail] = useState(email);
  const [valorData, setValorData] = useState(dataNascimento);
  const [edicao, setEdicao] = useState(null);
  const [valor, setValor] = useState(null)
  let conteudo1 = valorCep;
  let conteudo2 = valorEmail;
  let conteudo3 = valorData;

  const formatarData = (dataAmericana) => {
    let ano = dataAmericana.slice(0, 4);
    let mes = dataAmericana.slice(5,7); 
    let dia = dataAmericana.slice(8, 10);

    return dia + "/" + mes + "/" + ano;
  }

  const Alteracao = (event) => {
    setValor(event.target.value);
  }

  const iniciarEdicao = (campo, valorInicial) => {
    setValor(valorInicial); 
    setEdicao(campo);      
  };
   const lidarComTeclado = (event) => {
    // Se a tecla pressionada for 'Escape' (Esc)
    if (event.key === 'Escape') {
      setEdicao(null); // Cancela a edição e fecha o input
     
    }
    
    // Se a tecla pressionada for 'Enter'
    if (event.key === 'Enter') {
      switch(edicao) {
        case "cep":
          setValorCep(valor);
          
          break;
        case "email":
          setValorEmail(valor);
          
          break;
        case "data":

          setValorData(formatarData(valor));
          
      }
      setEdicao(null); // Fecha o input
    }
  };


  
    
  

  switch(edicao) {
    case "cep": 
      conteudo1 = (<input type='text' value={valor} onChange={Alteracao} id='cep' placeholder='Pode Digitar. Aperte ENTER para Salvar e Esc para Cancelar.' onKeyDown={lidarComTeclado}/>
        
      );
      break;
    case "email": 
      conteudo2 = (<input type='email' value={valor} onChange={Alteracao} id='email' placeholder='Pode Digitar. Aperte ENTER para Salvar e Esc para Cancelar.' onKeyDown={lidarComTeclado}/>);
      break;
    case "data": 
      conteudo3 = (<input type='date' value={valor} onChange={Alteracao} id='data' onKeyDown={lidarComTeclado} />);
      break;
   

  }

 

  return (
    <div className="card-usuario">
    {/* Icone de Usuário abaixo*/}
    <div className='container-flexbox'>
        <img
        className="card-usuario-imagem"
        src={imagem}
        alt="Foto do usuário"
        draggable= "false"
        
      />
        <BotaoEditar id="botao-que-fica-ao-lado-da-imagem" onclick= {() => setJanela("imagem")}/>
        { }
    </div>
      

      <div className="card-usuario-informacoes">
      {/* Campo do CEP*/ }
        <div className='container-flexbox'>
            <p>
                <strong>CEP: {conteudo1} </strong>
                
            </p>
            <BotaoEditar onclick = {() => iniciarEdicao("cep", cep)}/>
            {  }
        </div>
        {/*Campo do Email */}
        <div className='container-flexbox'>
            <p>
                <strong>E-mail: {conteudo2}</strong> 
            </p>
            <BotaoEditar onclick = {() => iniciarEdicao("email", email)}/>
        </div>

        <div className='container-flexbox'>
            <p>
                <strong>Data de nascimento: {conteudo3}</strong> 
            </p>
            <BotaoEditar onclick = {() => iniciarEdicao("data", dataNascimento)}/>
        </div>
        
        
      </div>
      
    </div>
   
  );
}

export default CardUsuario;
