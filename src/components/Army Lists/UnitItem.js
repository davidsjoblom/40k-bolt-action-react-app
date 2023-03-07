export default function UnitItem({ unit, isActive, onShow }) {
  return isActive ? (
    <>
      <h2>{unit.name}</h2>
      <table>
        <thead>
          <tr>
            <th className="no-border-table-corner"></th>
            <th>Move</th>
            <th>Tough</th>
            <th>Dis</th>
            <th>Base</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>{unit.modelName}</th>
            <td className="center-text">{unit.movement}"</td>
            <td className="center-text">{unit.toughness}+</td>
            <td className="center-text">{unit.discipline}</td>
            <td className="center-text">{unit.baseSize}mm</td>
          </tr>
          <tr>
            <td colSpan={5}>
              <i>Equipment:</i> {unit.equipment}
            </td>
          </tr>
          <tr>
            <td colSpan={5}>
              <i>Special Rules:</i> {unit.specialRules}
            </td>
          </tr>
        </tbody>
      </table>
      <p></p>
      <table>
        <tbody>
          <tr>
            <td>
              <i>Starting Cost:</i> {unit.startingCost}
            </td>
          </tr>
          {unit.options.map(option => (
            <tr key={option.choice}>
              <td>
                {option.choice}
                <ul>
                  {option.alternatives.map(alternative => (
                    <li key={alternative}>{alternative}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  ) : (
    <h2 onClick={onShow}>{unit.name}</h2>
  );
}
