import React from 'react';

const DatabaseManagementPage = ({ database }) => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Database Management</h1>
            <div className="bg-white shadow-md rounded p-4 mb-4">
                <h2 className="text-xl font-bold mb-2">Teams</h2>
                <pre>{JSON.stringify(database.teams, null, 2)}</pre>
            </div>
            <div className="bg-white shadow-md rounded p-4 mb-4">
                <h2 className="text-xl font-bold mb-2">Players</h2>
                <pre>{JSON.stringify(database.players, null, 2)}</pre>
            </div>
            <div className="bg-white shadow-md rounded p-4 mb-4">
                <h2 className="text-xl font-bold mb-2">Matches</h2>
                <pre>{JSON.stringify(database.matches, null, 2)}</pre>
            </div>
            <div className="bg-white shadow-md rounded p-4 mb-4">
                <h2 className="text-xl font-bold mb-2">Overs</h2>
                <pre>{JSON.stringify(database.overs, null, 2)}</pre>
            </div>
        </div>
    );
};

export default DatabaseManagementPage;