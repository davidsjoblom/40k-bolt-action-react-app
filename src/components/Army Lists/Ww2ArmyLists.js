import { Outlet } from "react-router-dom";
import Ww2ArmyListsNavbar from "./Ww2ArmyListsNavbar";

export default function Ww2ArmyLists({ setRememberedWw2ArmyListsSection }) {
  return (
    <>
      <Ww2ArmyListsNavbar
        setRememberedWw2ArmyListsSection={setRememberedWw2ArmyListsSection}
      />
      <Outlet />
    </>
  );
}
