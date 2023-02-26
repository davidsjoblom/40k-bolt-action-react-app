import spgUnitList from './spgUnitList.json';
import VehicleUnitListItem from './VehicleUnitListItem';

function SPGs() {
  return (
    <>
      <h1>Self-propelled Guns</h1>
      <hr />
      {spgUnitList.map(unit => (
        <VehicleUnitListItem unit={unit} key={unit.name} />
      ))}
    </>
  );
}
export default SPGs;
