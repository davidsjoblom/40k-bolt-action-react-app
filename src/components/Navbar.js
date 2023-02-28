import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav id="navbar">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/fundamentals">Fundamentals</NavLink>
        </li>
        <li>
          <NavLink to="/theTurn">The Turn</NavLink>
        </li>
        <li>
          <NavLink to="/orders">Orders</NavLink>
        </li>
        <li>
          <NavLink to="/characteristics">Characteristics</NavLink>
        </li>
        <li>
          <NavLink to="/square-bases">Square Bases</NavLink>
        </li>
        <li>
          <NavLink to="/psychology">Psychology</NavLink>
        </li>
        <li>
          <NavLink to="/movement">Movement</NavLink>
        </li>
        <li>
          <NavLink to="/shooting">Shooting</NavLink>
        </li>
        <li>
          <NavLink to="/weapons">Weapons</NavLink>
        </li>
        <li>
          <NavLink to="/charging">Charging</NavLink>
        </li>
        <li>
          <NavLink to="/melee-combat">Melee Combat</NavLink>
        </li>
        <li>
          <NavLink to="/terrain">Terrain</NavLink>
        </li>
        <li>
          <NavLink to="/special-rules">Special Rules</NavLink>
        </li>
        <li>
          <NavLink to="/vehicles">Vehicles</NavLink>
        </li>
        <li>
          <NavLink to="/armoured">Armoured</NavLink>
        </li>
        <li>
          <NavLink to="/infantry-units">Infantry Units</NavLink>
        </li>
        <li>
          <NavLink to="/tanks">Tanks</NavLink>
        </li>
        <li>
          <NavLink to="/SPGs">SPGs</NavLink>
        </li>
        <li>
          <NavLink to="/support-units">Support Units</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
