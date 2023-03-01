import { Outlet } from 'react-router-dom';
import BasicRulesNavbar from './BasicRulesNavbar';

function BasicRules() {
  return (
    <>
      <BasicRulesNavbar />
      <div className="outlet-padding">
        <Outlet />
      </div>
    </>
  );
}
export default BasicRules;
