import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Rules from './components/Rules';
import Fundamentals from './components/Fundamentals';

import './styles.css';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/fundamentals" element={<Fundamentals />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
