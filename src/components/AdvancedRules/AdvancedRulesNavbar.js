import { NavLink } from 'react-router-dom';

function AdvancedRulesNavbar({ setRememberedAdvancedRulesSection }) {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="special-rules"
            onClick={() => setRememberedAdvancedRulesSection('special-rules')}
          >
            Special Rules
          </NavLink>
        </li>
        <li>
          <NavLink
            to="weapons"
            onClick={() => setRememberedAdvancedRulesSection('weapons')}
          >
            Weapons
          </NavLink>
        </li>
        <li>
          <NavLink
            to="terrain"
            onClick={() => setRememberedAdvancedRulesSection('terrain')}
          >
            Terrain
          </NavLink>
        </li>
        <li>
          <NavLink
            to="vehicles"
            onClick={() => setRememberedAdvancedRulesSection('vehicles')}
          >
            Vehicles
          </NavLink>
        </li>
        <li>
          <NavLink
            to="armoured"
            onClick={() => setRememberedAdvancedRulesSection('armoured')}
          >
            Armoured
          </NavLink>
        </li>
        <li>
          <NavLink
            to="transports"
            onClick={() => setRememberedAdvancedRulesSection('transports')}
          >
            Transports
          </NavLink>
        </li>
        <li>
          <NavLink
            to="call-ins"
            onClick={() => setRememberedAdvancedRulesSection('call-ins')}
          >
            Call-ins
          </NavLink>
        </li>
        <li>
          <NavLink
            to="objectives"
            onClick={() => setRememberedAdvancedRulesSection('objectives')}
          >
            Objectives
          </NavLink>
        </li>
        <li>
          <NavLink
            to="deployment"
            onClick={() => setRememberedAdvancedRulesSection('deployment')}
          >
            Deployment
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default AdvancedRulesNavbar;
