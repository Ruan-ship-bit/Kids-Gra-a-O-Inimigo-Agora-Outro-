
import { useEffect, useState } from 'react';
import './CardUsuario.css';
import BotaoEditar from './BotaoEditar';
import { data, replace } from 'react-router-dom';



function CardUsuario({ imagem, cep, email, dataNascimento }) {
  
  const [valorCep, setValorCep] = useState(cep);
  const [valorEmail, setValorEmail] = useState(email);
  const [valorData, setValorData] = useState(dataNascimento);
  const [valorImagem, setValorImagem] = useState(imagem)
  const [edicao, setEdicao] = useState(null);
  const [valor, setValor] = useState(null);
  const [urlTemp, setUrlTemp] = useState(null);
  let conteudo1 = valorCep;
  let conteudo2 = valorEmail;
  let conteudo3 = valorData;
  let conteudo4 = (<> </>);

  const formatarData = (dataAmericana) => {
    let ano = dataAmericana.slice(0, 4);
    let mes = dataAmericana.slice(5,7); 
    let dia = dataAmericana.slice(8, 10);

    return dia + "/" + mes + "/" + ano;
  }

  const alteracaoComum = (event) => {
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
          break;
       
          
      }
      setEdicao(null); // Fecha o input
    }
  };


  const alteracaoImagem = (event) => {
    if(event.target.files[0]) {
        let url = URL.createObjectURL(event.target.files[0])  // <-- Ela retorna um array então acessamos o primeiro elemneto deste array
        setValorImagem(url); //a função URL.createObjectURL numa url temporária
        setUrlTemp(url);
        setEdicao(null)
    }
      
      
  }
    
  
//abrindo o estado de edição
  switch(edicao) {
    case "cep": 
      conteudo1 = (<input type='text' value={valor} onChange={alteracaoComum} id='cep' placeholder='Pode Digitar. Aperte ENTER para Salvar e Esc para Cancelar.' onKeyDown={lidarComTeclado}/>
        
      );
      break;
    case "email": 
      conteudo2 = (<input type='email' value={valor} onChange={alteracaoComum} id='email' placeholder='Pode Digitar. Aperte ENTER para Salvar e Esc para Cancelar.' onKeyDown={lidarComTeclado}/>);
      break;
    case "data": 
      conteudo3 = (<input type='date' value={valor} onChange={alteracaoComum} id='data' onKeyDown={lidarComTeclado} />);
      break;
    case "imagem":
      conteudo4 = (
      <>
         <input type='file'  id='imagemUsuarioEntrada' onChange={alteracaoImagem}/>
         <button type="button" onClick= {() => setEdicao(null)} id='cancelar-edicao-imagem'> × </button>
      </> )
     

  }

  useEffect(() => {
  return () => {
    if (urlTemp) {
      URL.revokeObjectURL(urlTemp);
    }
  };
}, [urlTemp]);
 

  return (
    <div className="card-usuario">
    {/* Icone de Usuário abaixo*/}
    <div className='container-flexbox'>
        <img
        className="card-usuario-imagem"
        src={valorImagem}
        alt="Foto do usuário"
        draggable= "false"
        
      />
        {conteudo4}
        <BotaoEditar id="botao-que-fica-ao-lado-da-imagem" onclick= {() => iniciarEdicao("imagem", imagem)}/>
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
