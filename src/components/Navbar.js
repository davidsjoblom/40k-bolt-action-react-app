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
          <NavLink to="/closecombat">Close Combat</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
