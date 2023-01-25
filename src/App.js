import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Fundamentals from './components/Fundamentals';
import TheTurn from './components/TheTurn';
import Orders from './components/Orders';
import Movement from './components/Movement';
import Characteristics from './components/Characteristics';
import Psychology from './components/Psychology';

import './style.css';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fundamentals" element={<Fundamentals />} />
          <Route path="/theTurn" element={<TheTurn />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/psychology" element={<Psychology />} />
          <Route path="/movement" element={<Movement />} />
          <Route path="/characteristics" element={<Characteristics />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
