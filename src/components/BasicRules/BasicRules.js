import { Outlet } from 'react-router-dom';
import BasicRulesNavbar from './BasicRulesNavbar';

function BasicRules({ setRememberedBasicRulesSection }) {
  return (
    <>
      <BasicRulesNavbar
        setRememberedBasicRulesSection={setRememberedBasicRulesSection}
      />
      <div className="outlet-padding">
        <Outlet />
      </div>
    </>
  );
}
export default BasicRules;
