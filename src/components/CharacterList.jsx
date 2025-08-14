export default function CharacterList({ characters }){
    return (
        <div>
            <h2 className="text-xl font-semibold mb-2">Lista de Personagens</h2>
            <ul className="space-y-2">
                {console.log(characters)}
                {
                    characters.map((char) => (
                    <li key={char.id}
                        className="border p-3 rounded bg-gray-100 shadow-sm flex justify-between items-center"
                    >
                        <div>
                            <span className="font-bold">{char.name}</span> — {char.classType} (Nível {char.level})
                        </div>
                    </li>
                    ))
                }
            </ul>
        </div>
    )
}