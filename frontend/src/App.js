import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ScorecardPage from './pages/ScorecardPage';
import PlayerStatsPage from './pages/PlayerStatsPage';
import LeaderboardPage from './pages/LeaderboardPage';
import MatchSummaryPage from './pages/MatchSummaryPage';
import TeamSetupPage from './pages/TeamSetupPage';
import DatabaseManagementPage from './pages/DatabaseManagementPage';
import Playing11Page from './pages/Playing11Page';
import axios from 'axios';

const App = () => {
    const [matchSummary, setMatchSummary] = useState(null);
    const [teamsPlayers, setTeamsPlayers] = useState({ teams: [], players: [] });
    const [overs, setOvers] = useState([]);
    const [topPerformers, setTopPerformers] = useState({});
    const [playerStats, setPlayerStats] = useState([]);
    const [leaderboard, setLeaderboard] = useState([]);
    const [teamScores, setTeamScores] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [
                    matchSummaryRes,
                    teamsPlayersRes,
                    oversRes,
                    topPerformersRes,
                    playerStatsRes,
                    leaderboardRes,
                    teamScoresRes
                ] = await Promise.all([
                    axios.get('http://localhost:5000/api/match-summary'),
                    axios.get('http://localhost:5000/api/teams-players'),
                    axios.get('http://localhost:5000/api/overs'),
                    axios.get('http://localhost:5000/api/top-performers'),
                    axios.get('http://localhost:5000/api/player-stats'),
                    axios.get('http://localhost:5000/api/leaderboard'),
                    axios.get('http://localhost:5000/api/team-scores')
                ]);

                setMatchSummary(matchSummaryRes.data);
                setTeamsPlayers(teamsPlayersRes.data);
                setOvers(oversRes.data);
                setTopPerformers(topPerformersRes.data);
                setPlayerStats(playerStatsRes.data);
                setLeaderboard(leaderboardRes.data);
                setTeamScores(teamScoresRes.data);
            } catch (err) {
                setError('Failed to fetch data');
            }
        };

        fetchData();
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage matchSummary={matchSummary} error={error} />} />
                <Route path="/scorecard" element={<ScorecardPage match={matchSummary} batting={teamsPlayers.players.filter(player => player.role === 'Batsman')} bowling={teamsPlayers.players.filter(player => player.role === 'Bowler')} overs={overs} />} />
                <Route path="/player-stats" element={<PlayerStatsPage playerStats={playerStats} />} />
                <Route path="/leaderboard" element={<LeaderboardPage leaderboard={leaderboard} />} />
                <Route path="/match-summary" element={<MatchSummaryPage matchSummary={matchSummary} topPerformers={topPerformers} highlights={[]} />} />
                <Route path="/team-setup" element={<TeamSetupPage teams={teamsPlayers.teams} />} />
                <Route path="/database-management" element={<DatabaseManagementPage database={{ teams: teamsPlayers.teams, players: teamsPlayers.players, matches: [matchSummary], overs, teamScores }} />} />
                <Route path="/playing-11" element={<Playing11Page teams={teamsPlayers.teams} />} />
            </Routes>
        </Router>
    );
};

export default App;