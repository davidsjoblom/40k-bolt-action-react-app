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
import Weapons from './components/Weapons/Weapons';
import Terrain from './components/Terrain';
import SpecialRules from './components/Special Rules/SpecialRules';
import Vehicles from './components/Vehicles';
import MeleeCombat from './components/MeleeCombat';
import Charging from './components/Charging';
import SquareBases from './components/SquareBases';
import Armoured from './components/Armoured';
import UnitList from './components/Unit List/UnitList';

import 'normalize.css';
import './styles/style.css';
import './styles/numberHeadings.css';

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
          <Route path="/characteristics" element={<Characteristics />} />
          <Route path="/square-bases" element={<SquareBases />} />
          <Route path="/movement" element={<Movement />} />
          <Route path="/shooting" element={<Shooting />} />
          <Route path="/weapons" element={<Weapons />} />
          <Route path="/charging" element={<Charging />} />
          <Route path="/melee-combat" element={<MeleeCombat />} />
          <Route path="/terrain" element={<Terrain />} />
          <Route path="/special-rules" element={<SpecialRules />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/armoured" element={<Armoured />} />
          <Route path="/unit-list" element={<UnitList />} />
        </Routes>
      </main>
      <div className="bottom-spacer"></div>
    </>
  );
}

export default App;
