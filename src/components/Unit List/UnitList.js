import infantryUnitList from './infantryUnitList.json';
import InfantryUnitListItem from './InfantryUnitListItem';

function UnitList() {
  return (
    <>
      <h1>Unit List</h1>
      <hr />
      {infantryUnitList.map(unit => (
        <InfantryUnitListItem unit={unit} key={unit.name} />
      ))}
    </>
  );
}
export default UnitList;
