import UnitItem from './UnitItem';

export default function UnitList({ army, units, activeItem, setActiveItem }) {
  return (
    <>
      <h1 className="left-padding">{army} Army List</h1>
      {units.map(unit => (
        <div className="accordion-item" key={unit.name}>
          <UnitItem
            unit={unit}
            isActive={activeItem === unit.name}
            onShow={() => setActiveItem(unit.name)}
            onClose={() => setActiveItem('')}
          />
        </div>
      ))}
    </>
  );
}
