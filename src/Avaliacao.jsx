
import { useState } from 'react';
import './Avaliacao.css';

export default function Avaliacao() {
  const [nota, setNota] = useState(0);
  const [comentario, setComentario] = useState('');
  const [avaliacoes, setAvaliacoes] = useState([]);

  function enviarAvaliacao(evento) {
    evento.preventDefault();

    if (nota === 0 || comentario.trim() === '') {
      alert('Escolha uma nota e escreva um comentário!');
      return;
    }

    setAvaliacoes((atual) => [
      ...atual,
      { nota, comentario }
    ]);

    setNota(0);
    setComentario('');
  }

  return (
    <section className="avaliacao">
      <h4>Avalie este produto</h4>

      <div className="avaliacao__estrelas">
        {[1, 2, 3, 4, 5].map((estrela) => (
          <button
            key={estrela}
            type="button"
            onClick={() => setNota(estrela)}
            className={estrela <= nota ? 'estrela selecionada' : 'estrela'}
          >
            ★
          </button>
        ))}
      </div>

      <form onSubmit={enviarAvaliacao}>
        <textarea
          placeholder="Escreva sua opinião..."
          value={comentario}
          onChange={(evento) => setComentario(evento.target.value)}
        />

        <button type="submit">
          Enviar avaliação
        </button>
      </form>

      <div className="avaliacao__lista">
        {avaliacoes.map((avaliacao, indice) => (
          <article key={indice}>
            <p className="avaliacao__nota">
              {'★'.repeat(avaliacao.nota)}
              {'☆'.repeat(5 - avaliacao.nota)}
            </p>

            <p>{avaliacao.comentario}</p>
          </article>
        ))}
      </div>
    </section>
  );
}