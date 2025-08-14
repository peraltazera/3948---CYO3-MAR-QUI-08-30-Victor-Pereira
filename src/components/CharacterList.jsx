export default function CharacterList({ characters, onDelete, onEdit }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Lista de Personagens</h2>
      <ul className="space-y-2">
        {characters.map((char) => (
          <li
            key={char.id}
            className="border p-3 rounded bg-gray-100 shadow-sm flex justify-between items-center"
          >
            <div>
              <span className="font-bold">{char.name}</span> — {char.classType} (Nível {char.level})
            </div>
            { <div className="space-x-2">
              <button
                onClick={() => onEdit(char)}
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
              >
                Editar
              </button>
              <button
                onClick={() => onDelete(char.id)}
                className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
              >
                Deletar
              </button>
            </div>}
          </li>
        ))}
      </ul>
    </div>
  );
}
