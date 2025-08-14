import { useEffect, useState } from 'react';
import CharacterForm from './components/CharacterForm';
import CharacterList from './components/CharacterList';
import api from './api';

export default function App() {
  const [characters, setCharacters] = useState([]);
  const [editingCharacter, setEditingCharacter] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await api.get('/characters');
      setCharacters(res.data);
    }
    fetchData();
  }, []);

  const addCharacter = (char) => {
    setCharacters([...characters, char]);
  };

  
  const deleteCharacter = async (id) => {
    await api.delete(`/characters/${id}`);
    setCharacters(characters.filter((char) => char.id !== id));
  };


  const startEditCharacter = (char) => {
    setEditingCharacter(char);
  };

  const updateCharacter = async (updatedChar) => {
    const res = await api.put(`/characters/${updatedChar.id}`, updatedChar);
    setCharacters(characters.map((char) => (char.id === updatedChar.id ? res.data : char)));
    setEditingCharacter(null);
  };

  const cancelEdit = () => {
    setEditingCharacter(null);
  };


  return (
      <div className="max-w-xl w-full p-6 bg-white rounded shadow">
        <h1 className="text-2xl font-bold text-center mb-6">
          RPG - Cadastro de Personagens
        </h1>
        <CharacterForm
          onAdd={addCharacter}
          editingCharacter={editingCharacter}
          onUpdate={updateCharacter}
          onCancel={cancelEdit}
        />
        <CharacterList
          characters={characters}
           onDelete={deleteCharacter}
          onEdit={startEditCharacter}
        />
      </div>
  );
}

        
