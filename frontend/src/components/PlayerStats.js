const players = [
    { name: 'Player A', runs: 50, balls: 30, fours: 4, sixes: 3, wickets: 0, overs: 0 },
    { name: 'Player B', runs: 30, balls: 25, fours: 3, sixes: 1, wickets: 0, overs: 0 },
  ];
  
  const PlayerStats = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {['Team A', 'Team B'].map((team, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">{team}</h2>
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <th>Player Name</th>
                  <th>Runs</th>
                  <th>Balls</th>
                  <th>4s</th>
                  <th>6s</th>
                  <th>Wickets</th>
                  <th>Overs</th>
                </tr>
              </thead>
              <tbody>
                {players.map((player, idx) => (
                  <tr key={idx}>
                    <td>{player.name}</td>
                    <td>{player.runs}</td>
                    <td>{player.balls}</td>
                    <td>{player.fours}</td>
                    <td>{player.sixes}</td>
                    <td>{player.wickets}</td>
                    <td>{player.overs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    );
  };
  
  export default PlayerStats;
  