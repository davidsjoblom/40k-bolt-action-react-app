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
      <h3>Special Rule stacking</h3>
      <p>
        Several instances of the same Special Rule do not 'stack' i.e. they are
        only applied once. In case of several Special Rule(X) with differing X
        values only apply the most significant modifier of the available values.
      </p>
      <p>
        Different Special Rules providing the same type of modifier does stack,
        for example would Impact(1) and Crushing Strength(1) provide a +2 to
        wound modifier while Crushing Strength(1) and Crushing Strength(2) would
        not provide a +3 to wound modifier.
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
