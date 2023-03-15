import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faBook,
  faBookSkull,
  faPersonMilitaryRifle,
} from "@fortawesome/free-solid-svg-icons";

function MasterNavbar({
  rememberedBasicRulesSection,
  rememberedAdvancedRulesSection,
  rememberedArmyListsSection,
}) {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">
            <FontAwesomeIcon icon={faHouse} />
            &nbsp; Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"basic-rules/" + rememberedBasicRulesSection}>
            <FontAwesomeIcon icon={faBook} />
            &nbsp; Basic Rules
          </NavLink>
        </li>
        <li>
          <NavLink to={"advanced-rules/" + rememberedAdvancedRulesSection}>
            <FontAwesomeIcon icon={faBookSkull} />
            &nbsp; Advanced Rules
          </NavLink>
        </li>
        <li>
          <NavLink to={"army-lists/" + rememberedArmyListsSection}>
            <FontAwesomeIcon icon={faPersonMilitaryRifle} />
            &nbsp; Army Lists
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default MasterNavbar;
