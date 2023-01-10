import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav id="navbar">
      <h1>
        <NavLink to="/">Home</NavLink>
      </h1>
      <ul>
        <li>
          <NavLink to="/fundamentals">Fundamentals</NavLink>
        </li>
        <li>
          <NavLink to="/theTurn">The Turn</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
