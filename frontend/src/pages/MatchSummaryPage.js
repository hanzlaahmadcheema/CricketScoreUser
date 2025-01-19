import React from 'react';

const MatchSummaryPage = ({ matchSummary, topPerformers, highlights }) => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Match Summary</h1>
            <div className="bg-white shadow-md rounded p-4 mb-4">
                <p>Total Scores: {matchSummary.totalScores}</p>
                <p>Top Batsman: {topPerformers.topBatsman}</p>
                <p>Top Bowler: {topPerformers.topBowler}</p>
            </div>
            <h2 className="text-xl font-bold mb-2">Highlights</h2>
            <ul className="list-disc pl-5">
                {highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                ))}
            </ul>
        </div>
    );
};

export default MatchSummaryPage;