import { useState, useEffect } from 'react';
import axios from 'axios';
import './app.scss';

export default function App() {
  const [personagens, setPersonagens] = useState([]); // Uma caixinha para guardar todos os personagens.

  const pegarDados = async () => {
    try {
      const resposta = await axios.get('https://rickandmortyapi.com/api/character');
      setPersonagens(resposta.data.results); // Acessa o array de personagens em "results".
    } catch (error) {
      console.error("Erro ao buscar dados da API:", error);
    }
  };

  useEffect(() => {
    pegarDados(); // Chama a função para buscar os dados quando a página carrega.
  }, []);

  return (
    <>
      <h1>Rick and Morty - Personagens</h1>
      <ul>
        {personagens.map((personagem) => (
          <li key={personagem.id}>
            <img src={personagem.image} alt={personagem.name} />
            <h2>{personagem.name}</h2>
            <p>Status: {personagem.status}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
