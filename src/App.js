import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VendingMachine from './components/VendingMachine';
import Snack from './components/SnackList'; // Updated import
import SnackItem from './components/SnackList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<VendingMachine />} />
        <Route path="/snack/:name" element={<SnackItem />} />
      </Routes>
    </Router>
  );
}

export default App;
