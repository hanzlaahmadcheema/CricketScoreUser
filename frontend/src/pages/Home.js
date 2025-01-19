import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/matches')
            .then((response) => setMatches(response.data))
            .catch((error) => console.error(error));
    }, []);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Matches</h1>
            <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Match ID</th>
                        <th className="px-4 py-2">Teams</th>
                        <th className="px-4 py-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {matches.map((match) => (
                        <tr key={match.id}>
                            <td className="border px-4 py-2">{match.id}</td>
                            <td className="border px-4 py-2">
                                {match.team1_id} vs {match.team2_id}
                            </td>
                            <td className="border px-4 py-2">{match.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Home;
