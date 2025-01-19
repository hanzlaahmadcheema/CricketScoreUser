const Header = () => {
    return (
      <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Match Status: Ongoing</h1>
          <p>Team A vs Team B</p>
        </div>
        <div>
          <p>Score: 120/3 (15.3 Overs)</p>
          <p>Run Rate: 7.5</p>
        </div>
      </div>
    );
  };
  
  export default Header;
  