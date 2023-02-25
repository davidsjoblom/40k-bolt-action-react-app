import infantryUnitList from './infantryUnitList.json';
import TankUnitList from './tankUnitList.json';
import SpgUnitList from './spgUnitList.json';

import InfantryUnitListItem from './InfantryUnitListItem';
import VehicleUnitListItem from './VehicleUnitListItem';

function UnitList() {
  return (
    <>
      <h1>Unit List</h1>
      <hr />
      {infantryUnitList.map(unit => (
        <InfantryUnitListItem unit={unit} key={unit.name} />
      ))}
      {TankUnitList.map(unit => (
        <VehicleUnitListItem unit={unit} key={unit.name} />
      ))}
      {SpgUnitList.map(unit => (
        <VehicleUnitListItem unit={unit} key={unit.name} />
      ))}
    </>
  );
}
export default UnitList;
