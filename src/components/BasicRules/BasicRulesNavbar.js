import { NavLink } from "react-router-dom";

function BasicRulesNavbar({ setRememberedBasicRulesSection }) {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="general-principles"
            onClick={() => setRememberedBasicRulesSection("general-principles")}
          >
            General Principles
          </NavLink>
        </li>
        <li>
          <NavLink
            to="the-turn"
            onClick={() => setRememberedBasicRulesSection("the-turn")}
          >
            The Turn
          </NavLink>
        </li>
        <li>
          <NavLink
            to="orders"
            onClick={() => setRememberedBasicRulesSection("orders")}
          >
            Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="characteristics"
            onClick={() => setRememberedBasicRulesSection("characteristics")}
          >
            Characteristics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="square-bases"
            onClick={() => setRememberedBasicRulesSection("square-bases")}
          >
            Bases
          </NavLink>
        </li>
        <li>
          <NavLink
            to="psychology"
            onClick={() => setRememberedBasicRulesSection("psychology")}
          >
            Psychology
          </NavLink>
        </li>
        <li>
          <NavLink
            to="movement"
            onClick={() => setRememberedBasicRulesSection("movement")}
          >
            Movement
          </NavLink>
        </li>
        <li>
          <NavLink
            to="shooting"
            onClick={() => setRememberedBasicRulesSection("shooting")}
          >
            Shooting
          </NavLink>
        </li>
        <li>
          <NavLink
            to="charging"
            onClick={() => setRememberedBasicRulesSection("charging")}
          >
            Charging
          </NavLink>
        </li>
        <li>
          <NavLink
            to="melee-combat"
            onClick={() => setRememberedBasicRulesSection("melee-combat")}
          >
            Melee Combat
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default BasicRulesNavbar;
