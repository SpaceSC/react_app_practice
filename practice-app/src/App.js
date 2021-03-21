import React, { useState, useEffect } from 'react';
import './App.css';
import Homepage from './components/Homapage/Homepage';
import MenuH from './components/MenuH/MenuH';

function App() {
  

  return (
    <div className="app">
      <MenuH />
      <Homepage />
    </div>
  );
}

export default App;
