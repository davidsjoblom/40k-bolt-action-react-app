import { Route, Routes } from "react-router-dom";
import { useState } from "react";

import MasterNavbar from "./components/MasterNavbar";
import Home from "./components/Home/Home";
import Start from "./components/Home/Start";

import BasicRules from "./components/BasicRules/BasicRules";
import GeneralPrinciples from "./components/BasicRules/GeneralPrinciples";
import TheTurn from "./components/BasicRules/TheTurn";
import Orders from "./components/BasicRules/Orders";
import Movement from "./components/BasicRules/Movement";
import Characteristics from "./components/BasicRules/Characteristics";
import Psychology from "./components/BasicRules/Psychology";
import Shooting from "./components/BasicRules/Shooting";
import MeleeCombat from "./components/BasicRules/MeleeCombat";
import Charging from "./components/BasicRules/Charging";
import SquareBases from "./components/BasicRules/SquareBases";
import Weapons from "./components/BasicRules/Weapons/Weapons";

import AdvancedRules from "./components/AdvancedRules/AdvancedRules";
import Terrain from "./components/AdvancedRules/Terrain";
import SpecialRules from "./components/AdvancedRules/Special Rules/SpecialRules";
import Vehicles from "./components/AdvancedRules/Vehicles";
import Armoured from "./components/AdvancedRules/Armoured";
import Transports from "./components/AdvancedRules/Transports";
import Objectives from "./components/AdvancedRules/Objectives";
import Deployment from "./components/AdvancedRules/Deployment";
import CallIns from "./components/AdvancedRules/Call-ins/CallIns";
import ArmyBuilding from "./components/AdvancedRules/ArmyBuilding";
import PlayingTheGame from "./components/AdvancedRules/PlayingTheGame";
import BattlefieldSetup from "./components/AdvancedRules/BattlefieldSetup";

import ArmyLists from "./components/Army Lists/ArmyLists";
import UnitList from "./components/Army Lists/UnitList";
import EmpireUnits from "./unit-lists/empireUnits.json";
import FederationUnits from "./unit-lists/federationUnits.json";
import ClansUnits from "./unit-lists/clansUnits.json";
import CultsUnits from "./unit-lists/cultsUnits.json";

import Ww2ArmyLists from "./components/Army Lists/Ww2ArmyLists";
import UsUnits from "./ww2-unit-lists/usUnits.json";
import GermanyUnits from "./ww2-unit-lists/germanyUnits.json";
import BritainUnits from "./ww2-unit-lists/britainUnits.json";
import SovietUnits from "./ww2-unit-lists/sovietUnits.json";
import JapanUnits from "./ww2-unit-lists/japanUnits.json";

function App() {
  const [rememberedHomeSection, setRememberedHomeSection] = useState("start");
  const [rememberedBasicRulesSection, setRememberedBasicRulesSection] =
    useState("general-principles");
  const [rememberedAdvancedRulesSection, setRememberedAdvancedRulesSection] =
    useState("special-rules");
  const [rememberedArmyListsSection, setRememberedArmyListsSection] =
    useState("empire-army-list");
  const [activeEmpireItem, setActiveEmpireItem] = useState("");
  const [activeFederationItem, setActiveFederationItem] = useState("");
  const [activeClansItem, setActiveClansItem] = useState("");
  const [activeCultsItem, setActiveCultsItem] = useState("");
  const [rememberedWw2ArmyListsSection, setRememberedWw2ArmyListsSection] =
    useState("us-army-list");
  const [activeUsItem, setActiveUsItem] = useState("");
  const [activeGermanyItem, setActiveGermanyItem] = useState("");
  const [activeBritainItem, setActiveBritainItem] = useState("");
  const [activeSovietItem, setActiveSovietItem] = useState("");
  const [activeJapanItem, setActiveJapanItem] = useState("");
  return (
    <>
      <MasterNavbar
        rememberedHomeSection={rememberedHomeSection}
        rememberedBasicRulesSection={rememberedBasicRulesSection}
        rememberedAdvancedRulesSection={rememberedAdvancedRulesSection}
        rememberedArmyListsSection={rememberedArmyListsSection}
        rememberedWw2ArmyListsSection={rememberedWw2ArmyListsSection}
      />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/"
            element={
              <Home setRememberedHomeSection={setRememberedHomeSection} />
            }
          >
            <Route path="start" element={<Start />} />
          </Route>
          <Route
            path="basic-rules"
            element={
              <BasicRules
                setRememberedBasicRulesSection={setRememberedBasicRulesSection}
              />
            }
          >
            <Route path="general-principles" element={<GeneralPrinciples />} />
            <Route path="the-turn" element={<TheTurn />} />
            <Route path="orders" element={<Orders />} />
            <Route path="psychology" element={<Psychology />} />
            <Route path="characteristics" element={<Characteristics />} />
            <Route path="square-bases" element={<SquareBases />} />
            <Route path="movement" element={<Movement />} />
            <Route path="shooting" element={<Shooting />} />
            <Route path="charging" element={<Charging />} />
            <Route path="melee-combat" element={<MeleeCombat />} />
            <Route path="weapons" element={<Weapons />} />
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
            <Route path="terrain" element={<Terrain />} />
            <Route path="special-rules" element={<SpecialRules />} />
            <Route path="vehicles" element={<Vehicles />} />
            <Route path="armoured" element={<Armoured />} />
            <Route path="transports" element={<Transports />} />
            <Route path="objectives" element={<Objectives />} />
            <Route path="deployment" element={<Deployment />} />
            <Route path="call-ins" element={<CallIns />} />
            <Route path="army-building" element={<ArmyBuilding />} />
            <Route path="playing-the-game" element={<PlayingTheGame />} />
            <Route path="battlefield-setup" element={<BattlefieldSetup />} />
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
          <Route
            path="ww2-army-lists"
            element={
              <Ww2ArmyLists
                setRememberedWw2ArmyListsSection={
                  setRememberedWw2ArmyListsSection
                }
              />
            }
          >
            <Route
              path="us-army-list"
              element={
                <UnitList
                  army="Us"
                  units={UsUnits}
                  activeItem={activeUsItem}
                  setActiveItem={setActiveUsItem}
                />
              }
            />
            <Route
              path="germany-army-list"
              element={
                <UnitList
                  army="Germany"
                  units={GermanyUnits}
                  activeItem={activeGermanyItem}
                  setActiveItem={setActiveGermanyItem}
                />
              }
            />
            <Route
              path="soviet-army-list"
              element={
                <UnitList
                  army="Soviet"
                  units={SovietUnits}
                  activeItem={activeSovietItem}
                  setActiveItem={setActiveSovietItem}
                />
              }
            />
            <Route
              path="japan-army-list"
              element={
                <UnitList
                  army="Japan"
                  units={JapanUnits}
                  activeItem={activeJapanItem}
                  setActiveItem={setActiveJapanItem}
                />
              }
            />
            <Route
              path="britain-army-list"
              element={
                <UnitList
                  army="Britain"
                  units={BritainUnits}
                  activeItem={activeBritainItem}
                  setActiveItem={setActiveBritainItem}
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
