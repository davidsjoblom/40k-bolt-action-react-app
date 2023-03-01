import { NavLink } from 'react-router-dom';

function MasterNavbar({
  rememberedBasicRulesSection,
  rememberedAdvancedRulesSection,
  rememberedGenericUnitsSection,
}) {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to={'basic-rules/' + rememberedBasicRulesSection}>
            Basic Rules
          </NavLink>
        </li>
        <li>
          <NavLink to={'advanced-rules/' + rememberedAdvancedRulesSection}>
            Advanced Rules
          </NavLink>
        </li>
        <li>
          <NavLink to={'generic-units/' + rememberedGenericUnitsSection}>
            Generic Units
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default MasterNavbar;
