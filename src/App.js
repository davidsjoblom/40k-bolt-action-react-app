import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import MasterNavbar from './components/MasterNavbar';
import Home from './components/Home';

import BasicRules from './components/BasicRules/BasicRules';
import Fundamentals from './components/BasicRules/Fundamentals';
import TheTurn from './components/BasicRules/TheTurn';
import Orders from './components/BasicRules/Orders';
import Movement from './components/BasicRules/Movement';
import Characteristics from './components/BasicRules/Characteristics';
import Psychology from './components/BasicRules/Psychology';
import Shooting from './components/BasicRules/Shooting';
import MeleeCombat from './components/BasicRules/MeleeCombat';
import Charging from './components/BasicRules/Charging';
import SquareBases from './components/BasicRules/SquareBases';

import AdvancedRules from './components/AdvancedRules/AdvancedRules';
import Weapons from './components/AdvancedRules/Weapons/Weapons';
import Terrain from './components/AdvancedRules/Terrain';
import SpecialRules from './components/AdvancedRules/Special Rules/SpecialRules';
import Vehicles from './components/AdvancedRules/Vehicles';
import Armoured from './components/AdvancedRules/Armoured';
import HQ from './components/AdvancedRules/HQ';
import Transports from './components/AdvancedRules/Transports';
import Objectives from './components/AdvancedRules/Objectives';
import Deployment from './components/AdvancedRules/Deployment';

import GenericUnits from './components/Generic Units/GenericUnits';
import InfantryUnits from './components/Generic Units/InfantryUnits';
import Tanks from './components/Generic Units/Tanks';
import SPGs from './components/Generic Units/SPGs';
import SupportUnits from './components/Generic Units/SupportUnits';

import 'normalize.css';
import './styles/style.css';
import './styles/numberHeadings.css';

function App() {
  const [rememberedBasicRulesSection, setRememberedBasicRulesSection] =
    useState('fundamentals');
  const [rememberedAdvancedRulesSection, setRememberedAdvancedRulesSection] =
    useState('weapons');
  const [rememberedGenericUnitsSection, setRememberedGenericUnitsSection] =
    useState('infantry-units');
  return (
    <>
      <MasterNavbar
        rememberedBasicRulesSection={rememberedBasicRulesSection}
        rememberedAdvancedRulesSection={rememberedAdvancedRulesSection}
        rememberedGenericUnitsSection={rememberedGenericUnitsSection}
      />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="basic-rules"
            element={
              <BasicRules
                setRememberedBasicRulesSection={setRememberedBasicRulesSection}
              />
            }
          >
            <Route path="fundamentals" element={<Fundamentals />} />
            <Route path="theTurn" element={<TheTurn />} />
            <Route path="orders" element={<Orders />} />
            <Route path="psychology" element={<Psychology />} />
            <Route path="characteristics" element={<Characteristics />} />
            <Route path="square-bases" element={<SquareBases />} />
            <Route path="movement" element={<Movement />} />
            <Route path="shooting" element={<Shooting />} />
            <Route path="charging" element={<Charging />} />
            <Route path="melee-combat" element={<MeleeCombat />} />
          </Route>
          <Route
            path="advanced-rules"
            element={
              <AdvancedRules
                setRememberedAdvancedRulesSection={
                  setRememberedAdvancedRulesSection
                }
              />
            }
          >
            <Route path="weapons" element={<Weapons />} />
            <Route path="terrain" element={<Terrain />} />
            <Route path="special-rules" element={<SpecialRules />} />
            <Route path="vehicles" element={<Vehicles />} />
            <Route path="armoured" element={<Armoured />} />
            <Route path="transports" element={<Transports />} />
            <Route path="HQ" element={<HQ />} />
            <Route path="objectives" element={<Objectives />} />
            <Route path="deployment" element={<Deployment />} />
          </Route>
          <Route
            path="generic-units"
            element={
              <GenericUnits
                setRememberedGenericUnitsSection={
                  setRememberedGenericUnitsSection
                }
              />
            }
          >
            <Route path="infantry-units" element={<InfantryUnits />} />
            <Route path="tanks" element={<Tanks />} />
            <Route path="SPGs" element={<SPGs />} />
            <Route path="support-units" element={<SupportUnits />} />
          </Route>
        </Routes>
      </main>
      <div className="bottom-spacer"></div>
    </>
  );
}

export default App;
