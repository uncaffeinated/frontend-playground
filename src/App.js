import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import RandomQuoteMachine from './pages/RandomQuoteMachine';
import MarkdownPreviewer from './pages/MarkdownPreviewer';
import DrumMachine from './pages/DrumMachine';
import Calculator from './pages/JavascriptCalculator';
import Clock from './pages/25and5Clock';

function swap(event) {
  event.preventDefault();
  alert(event.target.id);
}

class App extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
  return (
    <Router>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <a className='navbar-brand'><NavLink to="/" className='nav-link'>FRONTEND PLAYGROUND</NavLink></a>
        <ul className='nav nav-pills justify-content-end red'>
          <li className='nav-item'><NavLink to="/pages/RandomQuoteMachine" className='nav-link'>Random Quote Machine</NavLink></li>
          <li className='nav-item'><NavLink to="/pages/MarkdownPreviewer" className='nav-link'>Markdown Previewer</NavLink></li>
          <li className='nav-item'><NavLink to="/pages/DrumMachine" className='nav-link'>Drum Machine</NavLink></li>
          <li className='nav-item'><NavLink to="/pages/JavascriptCalculator" className='nav-link'>Calculator</NavLink></li>
          <li className='nav-item'><NavLink to="/pages/Clock" className='nav-link'>25 + 5 Clock</NavLink></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<h1>Welcome! This page is still heavily under construction.</h1>}/>
        <Route path="/pages/RandomQuoteMachine" element={<RandomQuoteMachine />} />
        <Route path="/pages/MarkdownPreviewer" element={<h1>Welcome! This page is still heavily under construction.</h1>} />
        <Route path="/pages/DrumMachine" element={<h1>Welcome! This page is still heavily under construction.</h1>} />
        <Route path="/pages/JavascriptCalculator" element={<h1>Welcome! This page is still heavily under construction.</h1>} />
        <Route path="/pages/Clock" element={<h1>Welcome! This page is still heavily under construction.</h1>} />
        <Route path="*" element={<h1>404: Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}
}

export default App;
