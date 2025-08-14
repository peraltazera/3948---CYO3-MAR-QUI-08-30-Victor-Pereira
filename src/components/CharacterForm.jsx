import { useState  } from 'react';
import api from '../api';

export default function CharacterForm({ onAdd }){
    const [name, setName] = useState("")
    const [classType, setClassType] = useState("")
    const [level, setLevel] = useState(1)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(!name || !classType) return

        const characterData = {name, classType, level}

        const res = await api.post('/characters', characterData)
        onAdd(res.data)

        setName("")
        setClassType("")
        setLevel(1)
    }

    return (
         <form onSubmit={handleSubmit} className="mb-6">
           <h2 className="text-xl font-semibold mb-4">
                Cadastrar Personagem
            </h2>
            <input
                type="text"
                placeholder="Nome"
                className="border p-2 w-full mb-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
             <input
                type="text"
                placeholder="Classe (ex: Mago, Guerreiro)"
                className="border p-2 w-full mb-2"
                value={classType}
                onChange={(e) => setClassType(e.target.value)}
            />
              <input
                    type="number"
                    placeholder="Nível"
                    min="1"
                    className="border p-2 w-full mb-4"
                    value={level}
                    onChange={(e) => setLevel(Number(e.target.value))}
                />
                 <div className="flex space-x-2">
                     <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                        >
                            Adicionar
                        </button>
                 </div>
        </form>
    )
}