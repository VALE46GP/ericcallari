import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Photo from './pages/Photo';
import Footer from './components/Footer';
import './App.sass';

function App() {
    return (
        <Router>
            <AppContent />
        </Router>,
        document.getElementById('root')
    );
}

function AppContent() {
    const location = useLocation();
    const [isHomePage, setIsHomePage] = useState(location.pathname === '/');

    useEffect(() => {
        setIsHomePage(location.pathname === '/');
    }, [location.pathname]);

    return (
        <div className={`app ${isHomePage ? 'home-page' : ''}`}>
            {!isHomePage && (
                <div className='nav-container'>
                    <Navigation />
                </div>
            )}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/photo' element={<Photo />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
