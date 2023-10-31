import React from 'react';
import Canvas from './components/Canvas';
import ControlPanel from './components/ControlPanel';
import './App.css';

function App() {
  return (
    <div className="app">
      <Canvas />
      <ControlPanel />
    </div>
  );
}

export default App;
