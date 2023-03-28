import { Outlet } from "react-router-dom";
import ArmyListsNavbar from "./ArmyListsNavbar";

export default function ArmyLists({ setRememberedArmyListsSection }) {
  return (
    <>
      <ArmyListsNavbar
        setRememberedArmyListsSection={setRememberedArmyListsSection}
      />
      <Outlet />
    </>
  );
}
