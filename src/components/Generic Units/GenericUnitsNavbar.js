import { NavLink } from 'react-router-dom';

function GenericUnitsNavbar({ setRememberedGenericUnitsSection }) {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="infantry-units"
            onClick={() => setRememberedGenericUnitsSection('infantry-units')}
          >
            Infantry Units
          </NavLink>
        </li>
        <li>
          <NavLink
            to="tanks"
            onClick={() => setRememberedGenericUnitsSection('tanks')}
          >
            Tanks
          </NavLink>
        </li>
        <li>
          <NavLink
            to="SPGs"
            onClick={() => setRememberedGenericUnitsSection('SPGs')}
          >
            SPGs
          </NavLink>
        </li>
        <li>
          <NavLink
            to="support-units"
            onClick={() => setRememberedGenericUnitsSection('support-units')}
          >
            Support Units
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default GenericUnitsNavbar;
