import { NavLink } from 'react-router-dom';

function BasicRulesNavbar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="fundamentals">Fundamentals</NavLink>
        </li>
        <li>
          <NavLink to="theTurn">The Turn</NavLink>
        </li>
        <li>
          <NavLink to="orders">Orders</NavLink>
        </li>
        <li>
          <NavLink to="characteristics">Characteristics</NavLink>
        </li>
        <li>
          <NavLink to="square-bases">Square Bases</NavLink>
        </li>
        <li>
          <NavLink to="psychology">Psychology</NavLink>
        </li>
        <li>
          <NavLink to="movement">Movement</NavLink>
        </li>
        <li>
          <NavLink to="shooting">Shooting</NavLink>
        </li>
        <li>
          <NavLink to="charging">Charging</NavLink>
        </li>
        <li>
          <NavLink to="melee-combat">Melee Combat</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default BasicRulesNavbar;
