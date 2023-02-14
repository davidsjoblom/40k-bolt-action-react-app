import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import Fundamentals from './components/Fundamentals';
import TheTurn from './components/TheTurn';
import Orders from './components/Orders';
import Movement from './components/Movement';
import Characteristics from './components/Characteristics';
import Psychology from './components/Psychology';
import Shooting from './components/Shooting';
import Weapons from './components/Weapons';
import CloseCombat from './components/CloseCombat';
import Terrain from './components/Terrain';
import SpecialRules from './components/SpecialRules';
import Vehicles from './components/Vehicles';

import 'normalize.css';
import './styles/style.css';
import './styles/numberheadings.css';

function App() {
  return (
    <>
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
          <Route path="/shooting" element={<Shooting />} />
          <Route path="/weapons" element={<Weapons />} />
          <Route path="/closecombat" element={<CloseCombat />} />
          <Route path="/terrain" element={<Terrain />} />
          <Route path="/specialrules" element={<SpecialRules />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
