import './App.css';

import { default as Home }  from './pages/home/home';
import { default as About } from './pages/about/about';
import { default as Projects } from './pages/projects/projects';

import { Navbar } from './components';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
        </Routes>
        
      </div>
  );
}

export default App;
