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
import Transports from './components/AdvancedRules/Transports';
import Objectives from './components/AdvancedRules/Objectives';
import Deployment from './components/AdvancedRules/Deployment';
import CallIns from './components/AdvancedRules/Call-ins/CallIns';

import GenericUnits from './components/Generic Units/GenericUnits';
import InfantryUnits from './components/Generic Units/InfantryUnits';
import Tanks from './components/Generic Units/Tanks';
import SPGs from './components/Generic Units/SPGs';
import SupportUnits from './components/Generic Units/SupportUnits';

import ArmyLists from './components/Army Lists/ArmyLists';
import UnitList from './components/Army Lists/UnitList';
import EmpireUnits from './unit-lists/empireUnits.json';
import FederationUnits from './unit-lists/federationUnits.json';
import ClansUnits from './unit-lists/clansUnits.json';
import CultsUnits from './unit-lists/cultsUnits.json';

function App() {
  const [rememberedBasicRulesSection, setRememberedBasicRulesSection] =
    useState('fundamentals');
  const [rememberedAdvancedRulesSection, setRememberedAdvancedRulesSection] =
    useState('special-rules');
  const [rememberedGenericUnitsSection, setRememberedGenericUnitsSection] =
    useState('infantry-units');
  const [rememberedArmyListsSection, setRememberedArmyListsSection] =
    useState('empire-army-list');
  const [activeEmpireItem, setActiveEmpireItem] = useState('');
  const [activeFederationItem, setActiveFederationItem] = useState('');
  const [activeClansItem, setActiveClansItem] = useState('');
  const [activeCultsItem, setActiveCultsItem] = useState('');
  return (
    <>
      <MasterNavbar
        rememberedBasicRulesSection={rememberedBasicRulesSection}
        rememberedAdvancedRulesSection={rememberedAdvancedRulesSection}
        rememberedGenericUnitsSection={rememberedGenericUnitsSection}
        rememberedArmyListsSection={rememberedArmyListsSection}
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
            <Route path="objectives" element={<Objectives />} />
            <Route path="deployment" element={<Deployment />} />
            <Route path="call-ins" element={<CallIns />} />
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
          <Route
            path="army-lists"
            element={
              <ArmyLists
                setRememberedArmyListsSection={setRememberedArmyListsSection}
              />
            }
          >
            <Route
              path="empire-army-list"
              element={
                <UnitList
                  army="Empire"
                  units={EmpireUnits}
                  activeItem={activeEmpireItem}
                  setActiveItem={setActiveEmpireItem}
                />
              }
            />
            <Route
              path="federation-army-list"
              element={
                <UnitList
                  army="Federation"
                  units={FederationUnits}
                  activeItem={activeFederationItem}
                  setActiveItem={setActiveFederationItem}
                />
              }
            />
            <Route
              path="clans-army-list"
              element={
                <UnitList
                  army="Clans"
                  units={ClansUnits}
                  activeItem={activeClansItem}
                  setActiveItem={setActiveClansItem}
                />
              }
            />
            <Route
              path="cults-army-list"
              element={
                <UnitList
                  army="Cults"
                  units={CultsUnits}
                  activeItem={activeCultsItem}
                  setActiveItem={setActiveCultsItem}
                />
              }
            />
          </Route>
        </Routes>
      </main>
      <div className="bottom-spacer"></div>
    </>
  );
}

export default App;
