import React from 'react';

const ScorecardPage = ({ match, batting, bowling, overs }) => {
    const filteredBatting = batting.filter(player => player.runs !== 0 || player.ballsFaced !== 0 || player.fours !== 0 || player.sixes !== 0);
    const filteredBowling = bowling.filter(player => player.oversBowled !== 0 || player.runsConceded !== 0 || player.wickets !== 0);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Scorecard</h1>
            <div className="bg-white shadow-md rounded p-4 mb-4">
                <p>Score: {match.runs}/{match.wickets}</p>
                <p>Overs: {match.overs}</p>
            </div>
            <h2 className="text-xl font-bold mb-2">Batting</h2>
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th>Batsman</th>
                        <th>Runs</th>
                        <th>Balls</th>
                        <th>4s</th>
                        <th>6s</th>
                        <th>Strike Rate</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredBatting.map(player => (
                        <tr key={player.id}>
                            <td>{player.name}</td>
                            <td>{player.runs}</td>
                            <td>{player.ballsFaced}</td>
                            <td>{player.fours}</td>
                            <td>{player.sixes}</td>
                            <td>{(player.runs / player.ballsFaced * 100).toFixed(2)}</td>
                            <td>{player.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h2 className="text-xl font-bold mb-2">Bowling</h2>
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th>Bowler</th>
                        <th>Overs</th>
                        <th>Runs</th>
                        <th>Wickets</th>
                        <th>Economy</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredBowling.map(player => (
                        <tr key={player.id}>
                            <td>{player.name}</td>
                            <td>{player.oversBowled}</td>
                            <td>{player.runsConceded}</td>
                            <td>{player.wickets}</td>
                            <td>{(player.runsConceded / player.oversBowled).toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h2 className="text-xl font-bold mb-2">Over Summary</h2>
            <table className="min-w-full bg-white">
                <thead>
                    <tr>
                        <th>Over Number</th>
                        <th>Runs</th>
                        <th>Wickets</th>
                    </tr>
                </thead>
                <tbody>
                    {overs.map(over => (
                        <tr key={over.over_number}>
                            <td>{over.over_number}</td>
                            <td>{over.runs}</td>
                            <td>{over.wickets}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ScorecardPage;