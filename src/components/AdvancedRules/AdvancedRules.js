import { Outlet } from 'react-router-dom';
import AdvancedRulesNavbar from './AdvancedRulesNavbar';

function AdvancedRules({setRememberedAdvancedRulesSection}) {
  return (
    <>
      <AdvancedRulesNavbar setRememberedAdvancedRulesSection={setRememberedAdvancedRulesSection}/>
      <div className="outlet-padding">
        <Outlet />
      </div>
    </>
  );
}
export default AdvancedRules;
