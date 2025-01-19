import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = ({ matchSummary, error }) => {
    if (error) {
        return <div className="error-banner">{error}</div>;
    }

    if (!matchSummary) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Match Summary</h1>
            <div className="bg-white shadow-md rounded p-4 mb-4">
                <p>Status: {matchSummary.status}</p>
                <p>Score: {matchSummary.runs}/{matchSummary.wickets}</p>
                <p>Overs: {matchSummary.overs}</p>
            </div>
            <nav className="bg-gray-800 p-4 rounded">
                <ul className="flex space-x-4">
                    <li><Link to="/scorecard" className="text-white">Scorecard</Link></li>
                    <li><Link to="/player-stats" className="text-white">Player Stats</Link></li>
                    <li><Link to="/leaderboard" className="text-white">Leaderboard</Link></li>
                    <li><Link to="/commentary" className="text-white">Commentary</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default HomePage;