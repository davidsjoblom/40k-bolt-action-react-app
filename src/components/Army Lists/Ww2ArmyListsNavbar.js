import { NavLink } from "react-router-dom";

function ArmyListsNavbar({ setRememberedWw2ArmyListsSection }) {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="us-army-list"
            onClick={() => setRememberedWw2ArmyListsSection("us-army-list")}
          >
            US
          </NavLink>
        </li>
        <li>
          <NavLink
            to="germany-army-list"
            onClick={() => setRememberedWw2ArmyListsSection("germany-army-list")}
          >
            Germany
          </NavLink>
        </li>
        <li>
          <NavLink
            to="britain-army-list"
            onClick={() => setRememberedWw2ArmyListsSection("britain-army-list")}
          >
            Britain
          </NavLink>
        </li>
        <li>
          <NavLink
            to="soviet-army-list"
            onClick={() => setRememberedWw2ArmyListsSection("soviet-army-list")}
          >
            Soviet
          </NavLink>
        </li>
        <li>
          <NavLink
            to="japan-army-list"
            onClick={() => setRememberedWw2ArmyListsSection("japan-army-list")}
          >
            Japan
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default ArmyListsNavbar;
