import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSkull,
  faDove,
  faFistRaised,
  faHamsa,
} from "@fortawesome/free-solid-svg-icons";

function ArmyListsNavbar({ setRememberedArmyListsSection }) {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="empire-army-list"
            onClick={() => setRememberedArmyListsSection("empire-army-list")}
          >
            <FontAwesomeIcon icon={faSkull} />
            &nbsp; Empire
          </NavLink>
        </li>
        <li>
          <NavLink
            to="federation-army-list"
            onClick={() =>
              setRememberedArmyListsSection("federation-army-list")
            }
          >
            <FontAwesomeIcon icon={faDove} />
            &nbsp; Federation
          </NavLink>
        </li>
        <li>
          <NavLink
            to="clans-army-list"
            onClick={() => setRememberedArmyListsSection("clans-army-list")}
          >
            <FontAwesomeIcon icon={faFistRaised} />
            &nbsp; Clans
          </NavLink>
        </li>
        <li>
          <NavLink
            to="cults-army-list"
            onClick={() => setRememberedArmyListsSection("cults-army-list")}
          >
            <FontAwesomeIcon icon={faHamsa} />
            &nbsp; Cults
          </NavLink>
        </li>
        <li>
          <NavLink
            to="us-army-list"
            onClick={() => setRememberedArmyListsSection("us-army-list")}
          >
            US (WW2)
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default ArmyListsNavbar;
