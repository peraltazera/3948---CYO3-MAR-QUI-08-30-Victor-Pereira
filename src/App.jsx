import { useState, useEffect } from 'react'
import CharacterForm from './components/CharacterForm';
import CharacterList from './components/CharacterList';
import api from './api';

function App() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    async function fetchData(){
      const res = await api.get('/characters')
      //Mudar res para res.data
      //npm install autoprefixer --save-dev
      setCharacters(res.data);
    }
    fetchData()
  }, [])

  const addCharacter = (char) => {
    setCharacters([...characters, char])
  }

  return (
    <div>
        <h1>
          RPG - Cadastro de Personagens
        </h1>
        <CharacterForm onAdd={addCharacter}/>
        <CharacterList characters={characters}/>
    </div>
  )
}

export default App
