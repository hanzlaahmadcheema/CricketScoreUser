import React, { useState, useEffect } from 'react';
import api from '../services/api';

const MatchDetails = () => {
    const [match, setMatch] = useState(null);
    const [players, setPlayers] = useState([]);
    const [overs, setOvers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMatchDetails = async () => {
            try {
                const matchResponse = await api.get('/match');
                setMatch(matchResponse.data);

                const playersResponse = await api.get('/players');
                setPlayers(playersResponse.data);

                const oversResponse = await api.get('/overs');
                setOvers(oversResponse.data);
            } catch (err) {
                setError('Failed to fetch data. Please try again.');
            }
        };

        fetchMatchDetails();
    }, []);

    if (error) {
        return (
            <div>
                <p>{error}</p>
                <button onClick={() => window.location.reload()}>Retry</button>
            </div>
        );
    }

    if (!match) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>{`Match: ${match.team1_id} vs ${match.team2_id}`}</h1>
            <p>{`Score: ${match.runs}/${match.wickets}`}</p>
            <p>{`Overs: ${match.overs}`}</p>
            <div>
                <h2>Players</h2>
                {players.map((player) => (
                    <p key={player.id}>{`${player.name} - ${player.role}`}</p>
                ))}
            </div>
            <div>
                <h2>Overs Summary</h2>
                {overs.map((over) => (
                    <p key={over.id}>{`Over ${over.over_number}: Runs ${over.runs}, Wickets ${over.wickets}`}</p>
                ))}
            </div>
        </div>
    );
};

export default MatchDetails;