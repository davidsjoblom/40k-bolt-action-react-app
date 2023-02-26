import infantryUnitList from './infantryUnitList.json';
import InfantryUnitListItem from './InfantryUnitListItem';

function InfantryUnits() {
  return (
    <>
      <h1>Infantry Units</h1>
      <hr />
      {infantryUnitList.map(unit => (
        <InfantryUnitListItem unit={unit} key={unit.name} />
      ))}
    </>
  );
}
export default InfantryUnits;
