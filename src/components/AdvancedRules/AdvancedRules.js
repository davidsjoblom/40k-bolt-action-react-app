import { Outlet } from 'react-router-dom';
import AdvancedRulesNavbar from './AdvancedRulesNavbar';

function AdvancedRules() {
  return (
    <>
      <AdvancedRulesNavbar />
      <div className="outlet-padding">
        <Outlet />
      </div>
    </>
  );
}
export default AdvancedRules;
