import React from 'react';

const TeamSetupPage = ({ teams }) => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Team Setup</h1>
            {teams.map(team => (
                <div key={team.id} className="bg-white shadow-md rounded p-4 mb-4">
                    <h2 className="text-xl font-bold mb-2">{team.name}</h2>
                    <ul className="list-disc pl-5">
                        {team.players.map(player => (
                            <li key={player.id}>
                                {player.name} - {player.role}
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default TeamSetupPage;