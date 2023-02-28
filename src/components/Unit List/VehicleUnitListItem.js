function VehicleUnitListItem({ unit }) {
  return (
    <>
      <h2>{unit.name}</h2>
      <table>
        <thead>
          <tr>
            <th className="no-border-table-corner"></th>
            <th>Move</th>
            <th>Toughness</th>
            <th>Discipline</th>
            <th>Base</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{unit.shortName}</th>
            <td className="center-text">{unit.movement}"</td>
            <td className="center-text">{unit.toughness}+</td>
            <td className="center-text">{unit.discipline}</td>
            <td className="center-text">{unit.base}mm</td>
          </tr>
          <tr>
            <td colSpan={5}>
              <i>Equipment:</i> {unit.equipment}
            </td>
          </tr>
          <tr>
            <td colSpan={5}>
              <i>Special rules:</i> {unit.special}
            </td>
          </tr>
        </tbody>
      </table>
      <p></p>
      <table>
        <tbody>
          <tr>
            <td colSpan={5}>
              <i>Starting cost:</i> {unit.startingCost}pts
            </td>
          </tr>
          {unit.options.map(option => (
            <tr key={option.option.toString()}>
              <td colSpan={5}>
                {option.option}
                <ul>
                  {option.selections.map(selection => (
                    <li key={selection.toString()}>{selection}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
export default VehicleUnitListItem;
