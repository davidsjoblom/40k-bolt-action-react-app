import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretRight } from "@fortawesome/free-solid-svg-icons";

export default function UnitItem({ unit, isActive, onShow, onClose }) {
  return isActive ? (
    <>
      <h2 onClick={onClose} className="cursor-pointer">
        {unit.name} <FontAwesomeIcon icon={faCaretDown} />
      </h2>
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
      <p>
        <i>{unit.description}</i>
      </p>
      <table>
        <tbody>
          <tr>
            <td>
              <i>Starting Cost:</i> {unit.startingCost}
            </td>
          </tr>
          {unit.options.map((option) => (
            <tr key={option.choice}>
              <td>
                {option.choice}
                <ul>
                  {option.alternatives.map((alternative) => (
                    <li key={alternative}>{alternative}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p></p>
    </>
  ) : (
    <h2 onClick={onShow} className="cursor-pointer">
      {unit.name} <FontAwesomeIcon icon={faCaretRight} />
    </h2>
  );
}
