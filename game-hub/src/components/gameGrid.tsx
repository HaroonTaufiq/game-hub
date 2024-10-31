import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';

interface Game {
    id: number;
    name: string;
}

interface FetchGamesResponse {
    count: number;
    results: Game[];
}

const GameGrid = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        apiClient.get<FetchGamesResponse>('/games')
        .then(response => setGames(response.data.results))
        .catch((error) => setError(error.message))
    })

  return (
    <>
    {error && <p>{error}</p>}
    <ul>
        {games.map(game => (
            <li key={game.id}>
                <h2>{game.name}</h2>
            </li>
        ))}
    </ul>
    </>
  )
}

export default GameGrid