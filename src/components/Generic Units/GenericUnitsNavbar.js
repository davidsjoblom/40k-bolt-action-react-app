import { NavLink } from 'react-router-dom';

function GenericUnitsNavbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="infantry-units">Infantry Units</NavLink>
        </li>
        <li>
          <NavLink to="tanks">Tanks</NavLink>
        </li>
        <li>
          <NavLink to="SPGs">SPGs</NavLink>
        </li>
        <li>
          <NavLink to="support-units">Support Units</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default GenericUnitsNavbar;
