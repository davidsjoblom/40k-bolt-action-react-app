import SupportUnitList from './supportUnitList.json';

import VehicleUnitListItem from './VehicleUnitListItem';

function SupportUnits() {
  return (
    <>
      <h1>Support Units</h1>
      <hr />
      {SupportUnitList.map(unit => (
        <VehicleUnitListItem unit={unit} key={unit.name} />
      ))}
    </>
  );
}
export default SupportUnits;
