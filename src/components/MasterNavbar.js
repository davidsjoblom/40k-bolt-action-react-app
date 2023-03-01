import { NavLink } from 'react-router-dom';

function MasterNavbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="basic-rules">Basic Rules</NavLink>
        </li>
        <li>
          <NavLink to="advanced-rules">Advanced Rules</NavLink>
        </li>
        <li>
          <NavLink to="generic-units">Generic Units</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default MasterNavbar;
