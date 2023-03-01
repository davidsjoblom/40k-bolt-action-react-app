import { Outlet } from 'react-router-dom';
import GenericUnitsNavbar from './GenericUnitsNavbar';

function GenericUnits({ setRememberedGenericUnitsSection }) {
  return (
    <>
      <GenericUnitsNavbar
        setRememberedGenericUnitsSection={setRememberedGenericUnitsSection}
      />
      <div className="outlet-padding">
        <Outlet />
      </div>
    </>
  );
}
export default GenericUnits;
