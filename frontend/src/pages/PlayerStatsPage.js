import React, { useState } from 'react';

const PlayerStatsPage = ({ playerStats }) => {
    const [search, setSearch] = useState('');
    const [filteredStats, setFilteredStats] = useState(playerStats);

    const handleSearch = (e) => {
        setSearch(e.target.value);
        setFilteredStats(playerStats.filter(player => player.name.toLowerCase().includes(e.target.value.toLowerCase())));
    };

    const filteredPlayerStats = filteredStats.filter(player => player.runsScored !== 0 || player.ballsFaced !== 0 || player.fours !== 0 || player.sixes !== 0 || player.runsConceded !== 0 || player.wickets !== 0 || player.oversBowled !== 0);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Player Stats</h1>
            <input
                type="text"
                value={search}
                onChange={handleSearch}
                placeholder="Search players..."
                className="mb-4 p-2 border rounded"
            />
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Runs Scored</th>
                        <th>Balls Faced</th>
                        <th>4s</th>
                        <th>6s</th>
                        <th>Runs Conceded</th>
                        <th>Wickets</th>
                        <th>Overs Bowled</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredPlayerStats.map(player => (
                        <tr key={player.id}>
                            <td>{player.name}</td>
                            <td>{player.runsScored}</td>
                            <td>{player.ballsFaced}</td>
                            <td>{player.fours}</td>
                            <td>{player.sixes}</td>
                            <td>{player.runsConceded}</td>
                            <td>{player.wickets}</td>
                            <td>{player.oversBowled}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PlayerStatsPage;