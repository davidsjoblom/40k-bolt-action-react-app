import { Outlet } from 'react-router-dom';
import ArmyListsNavbar from './ArmyListsNavbar';

function ArmyLists({ setRememberedArmyListsSection }) {
  return (
    <>
      <ArmyListsNavbar
        setRememberedArmyListsSection={setRememberedArmyListsSection}
      />
      <Outlet />
    </>
  );
}
export default ArmyLists;
