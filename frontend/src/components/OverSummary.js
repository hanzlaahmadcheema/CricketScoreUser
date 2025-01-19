const overs = [
    { overNumber: 1, runs: 8, wickets: 0 },
    { overNumber: 2, runs: 5, wickets: 1 },
  ];
  
  const OverSummary = () => {
    return (
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-2">Over Summary</h2>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th>Over</th>
              <th>Runs</th>
              <th>Wickets</th>
            </tr>
          </thead>
          <tbody>
            {overs.map((over, idx) => (
              <tr key={idx}>
                <td>{over.overNumber}</td>
                <td>{over.runs}</td>
                <td>{over.wickets}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default OverSummary;
  