import { Outlet } from 'react-router-dom';
import GenericUnitsNavbar from './GenericUnitsNavbar';

function GenericUnits() {
  return (
    <>
      <GenericUnitsNavbar />
      <div className="outlet-padding">
        <Outlet />
      </div>
    </>
  );
}
export default GenericUnits;
