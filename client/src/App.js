import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserReport from './components/UserReport';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/report/:id" element={<UserReport />} />
            </Routes>
        </Router>
    );
}

export default App;
