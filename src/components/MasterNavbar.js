import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faBook,
  faBookSkull,
  faPersonRifle,
  faPersonMilitaryRifle,
} from '@fortawesome/free-solid-svg-icons';

function MasterNavbar({
  rememberedBasicRulesSection,
  rememberedAdvancedRulesSection,
  rememberedGenericUnitsSection,
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
          <NavLink to={'basic-rules/' + rememberedBasicRulesSection}>
            <FontAwesomeIcon icon={faBook} />
            &nbsp; Basic Rules
          </NavLink>
        </li>
        <li>
          <NavLink to={'advanced-rules/' + rememberedAdvancedRulesSection}>
            <FontAwesomeIcon icon={faBookSkull} />
            &nbsp; Advanced Rules
          </NavLink>
        </li>
        <li>
          <NavLink to={'generic-units/' + rememberedGenericUnitsSection}>
            <FontAwesomeIcon icon={faPersonRifle} />
            &nbsp; Generic Units
          </NavLink>
        </li>
        <li>
          <NavLink to={'army-lists/' + rememberedArmyListsSection}>
            <FontAwesomeIcon icon={faPersonMilitaryRifle} />
            &nbsp; Army Lists
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default MasterNavbar;
