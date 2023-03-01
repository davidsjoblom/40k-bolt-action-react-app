import { NavLink } from 'react-router-dom';

function AdvancedRulesNavbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="weapons">Weapons</NavLink>
        </li>
        <li>
          <NavLink to="terrain">Terrain</NavLink>
        </li>
        <li>
          <NavLink to="special-rules">Special Rules</NavLink>
        </li>
        <li>
          <NavLink to="vehicles">Vehicles</NavLink>
        </li>
        <li>
          <NavLink to="armoured">Armoured</NavLink>
        </li>
        <li>
          <NavLink to="HQ">HQ</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default AdvancedRulesNavbar;
