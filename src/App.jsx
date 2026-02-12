import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ProjectDetail from './pages/ProjectDetail';
import Resume from './pages/Resume';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Home />} />

        <Route path='/resume' element={<Resume />} />
       
        <Route path="/about" element={<About />} />

        <Route path='/contact' element={<Contact />} />

        <Route path='/project/:id' element={<ProjectDetail />} />
        
      </Routes>
    </Router>
  );
}

export default App;