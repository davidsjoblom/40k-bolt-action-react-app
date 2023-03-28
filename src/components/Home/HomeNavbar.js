import { NavLink } from "react-router-dom";

export default function HomeNavbar({ setRememberedHomeSection }) {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="start"
            onClick={() => setRememberedHomeSection("start")}
          >
            Start
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
