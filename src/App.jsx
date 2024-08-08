import React from 'react';
import ControlPanel from './components/ControlPanel.jsx';
import Display from './components/Display.jsx';
import Timer from './components/Timer.jsx';
import './styles/App.scss';

const App = () => {
  return (
    <div className="App container">
      <header className="App-header">
        <h1>25 + 5 Clock</h1>
      </header>
      <ControlPanel />
      <Display />
      <Timer />
      <footer>
        Designed and Coded by <br /> Mark LaRose
      </footer>
    </div>
  );
};

export default App;