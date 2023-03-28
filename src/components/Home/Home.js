import { Outlet } from "react-router-dom";
import HomeNavbar from "./HomeNavbar";

export default function Home({ setRememberedHomeSection }) {
  return (
    <>
      <HomeNavbar setRememberedHomeSection={setRememberedHomeSection} />
      <Outlet />
    </>
  );
}
