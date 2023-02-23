import specialRules from './specialRules.json';
import SpecialRuleItem from './SpecialRuleItem';

function SpecialRules() {
  return (
    <>
      <h1>Special Rules</h1>
      <hr />
      <ul>
        <li>Quick to Fire</li>
        <li>Unwieldy</li>
        <li>Heavy</li>
        <li>Anti-tank</li>
        <li>Blast(X)</li>
        <li>Hard Target(X)</li>
        <li>Accurate</li>
        <li>Indirect</li>
        <li>All-terrain</li>
        <li>Crushing Strength</li>
        <li>Impact</li>
        <li>Commanding Presence</li>
        <li>Fearless</li>
        <li>Unthinking</li>
      </ul>
      <table>
        <thead>
          <tr>
            <th>Rule</th>
            <th>Description</th>
          </tr>
        </thead>
        {specialRules.map(specialRule => (
          <SpecialRuleItem
            specialRule={specialRule}
            key={specialRule.name.toString()}
          />
        ))}
      </table>
    </>
  );
}
export default SpecialRules;
