import React from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.sass';

function App() {
    return (
        <Router>
            <div className="app">
                <div className="nav-container" >
                    <Navigation />
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/gallery" element={<Gallery />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
