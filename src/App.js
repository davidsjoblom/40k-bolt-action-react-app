import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Fundamentals from './components/Fundamentals';
import TheTurn from './components/TheTurn';
import Orders from './components/Orders';
import Movement from './components/Movement';

import './styles.css';
import Discipline from './components/Discipline';

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
          <Route path="/discipline" element={<Discipline />} />
          <Route path="/movement" element={<Movement />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
