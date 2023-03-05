import specialRules from './specialRules.json';
import SpecialRuleItem from './SpecialRuleItem';

function SpecialRules() {
  return (
    <>
      <h1>Special Rules</h1>
      <hr />
      <h2>Special Rules</h2>
      <p>
        Special rules change how a weapon or model plays. Most are listed here
        but some special rules are sizeable enough to warrant their own section,
        like Vehicle, and some their own subsection, like Blast in the Weapons
        section.
      </p>
      <h3>Special Rule application</h3>
      <p>
        Special rules that a model has are always 'active', a model may not
        choose to ignore a Special Rule it has. Special rules that a weapon has
        are applied to the shots fired with that specific weapon.
      </p>
      <table>
        <thead>
          <tr>
            <th>Special Rule</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {specialRules.map(specialRule => (
            <SpecialRuleItem
              specialRule={specialRule}
              key={specialRule.name.toString()}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}
export default SpecialRules;
