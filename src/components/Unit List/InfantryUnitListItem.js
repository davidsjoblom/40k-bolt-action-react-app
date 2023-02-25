function InfantryUnitListItem({ unit }) {
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
            <th>{unit.modelName}</th>
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
              <i>Special:</i> {unit.special}
            </td>
          </tr>
        </tbody>
      </table>
      <h3>Unit Selection</h3>
      <table>
        <tbody>
          <tr>
            <td>
              <i>Starting size:</i> {unit.startingSize}
            </td>
          </tr>
          <tr>
            <td>
              <i>Additional models:</i> {unit.additionalModels}
            </td>
          </tr>
          {unit.options.map(option => (
            <tr key={option.replace.toString()}>
              <td>
                {option.replace}
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
export default InfantryUnitListItem;
