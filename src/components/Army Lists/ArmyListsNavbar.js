import { NavLink } from 'react-router-dom';

function ArmyListsNavbar({ setRememberedAdvancedRulesSection }) {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="empire-army-list"
            onClick={() =>
              setRememberedAdvancedRulesSection('empire-army-list')
            }
          >
            Empire Army List
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default ArmyListsNavbar;
