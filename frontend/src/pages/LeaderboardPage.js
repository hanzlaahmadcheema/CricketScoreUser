import React from 'react';

const LeaderboardPage = ({ leaderboard }) => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Leaderboard</h1>
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Matches</th>
                        <th>Total Runs</th>
                        <th>Wickets</th>
                        <th>Highest Score</th>
                        <th>Best Bowling</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboard.map(player => (
                        <tr key={player.id}>
                            <td>{player.name}</td>
                            <td>{player.matches}</td>
                            <td>{player.totalRuns}</td>
                            <td>{player.wickets}</td>
                            <td>{player.highestScore}</td>
                            <td>{player.bestBowling}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LeaderboardPage;