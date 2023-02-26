import TankUnitList from './tankUnitList.json';

import VehicleUnitListItem from './VehicleUnitListItem';

function Tanks() {
  return (
    <>
      <h1>Tanks</h1>
      <hr />
      {TankUnitList.map(unit => (
        <VehicleUnitListItem unit={unit} key={unit.name} />
      ))}
    </>
  );
}
export default Tanks;
