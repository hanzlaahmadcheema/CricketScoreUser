import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MatchDetails from './pages/MatchDetails';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MatchDetails />} />
            </Routes>
        </Router>
    );
};

export default App;