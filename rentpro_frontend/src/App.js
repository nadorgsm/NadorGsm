// src/App.js
import React from 'react';
import './App.css'; 
import VehicleList from './components/VehicleList';

function App() {
    return (
        <div className="App">
            <header className="App-header" style={{ backgroundColor: '#282c34', padding: '20px', color: 'white', textAlign: 'center' }}>
                <h1>RentPro Vehicle Management</h1>
            </header>
            <main style={{ padding: '20px' }}>
                <VehicleList />
            </main>
            <footer style={{ textAlign: 'center', padding: '10px', marginTop: '20px', borderTop: '1px solid #eee' }}>
                <p>&copy; {new Date().getFullYear()} RentPro CMS</p>
            </footer>
        </div>
    );
}

export default App;
