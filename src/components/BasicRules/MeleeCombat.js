function MeleeCombat() {
  return (
    <>
      <h1>Melee Combat</h1>
      <ol>
        <li>Charging models attacks</li>
        <ol>
          <li>Calculate hits</li>
          <li>Roll to Wound</li>
          <li>Remove casualties</li>
        </ol>
        <li>Defending and Disrupted Charge models attacks</li>
        <ol>
          <li>Calculate hits</li>
          <li>Roll to Wound</li>
          <li>Remove casualties</li>
        </ol>
        <li>Determine winner</li>
        <li>Loser tests Discipline</li>
        <ol>
          <li>If Loser holds then fight again</li>
          <li>If Loser fails then winner Regroups</li>
        </ol>
      </ol>
      <h2>Charging unit attacks</h2>
      <p>
        For the first round of combat charging models attacks first unless they
        did a Disrupted Charge.
      </p>
      <h3>Calculate hits</h3>
      <p>
        All models in base contact with an enemy model or in base contact with a
        friendly model that is in base contact with an enemy may attack.
      </p>
      <p>All models that may attack causes a Hit on the enemy unit.</p>
      <h3>Roll to wound</h3>
      <p>
        Roll a die for each hit caused and each that equals or exceeds the
        targets Toughness inflicts a casualty.
      </p>
      <p>
        A natural roll of 1 to wound is always considered a failed roll regardless of
        modifiers.
      </p>
      <h3>Remove casualties</h3>
      <p>
        For each casualty inflicted remove a model chosen by the units owner.
      </p>
      <h2>Defending and Disrupted Charge models attacks</h2>
      <p>
        After the charging models have attacked and casualties have been removed
        any remaining Defending and Disrupted Charge models may attack. These
        attacks are resolved simultaneously and in the same manner as Charging
        units attacks.
      </p>
      <h2>Determine winner</h2>
      <p>
        The unit that caused the most casualties on the opposing unit is
        considered the winner.
      </p>
      <p>
        If either side had all its models removed as casualties then the
        remaining unit is automatically considered the winner and may make a
        move up to D6".
      </p>
      <h2>Loser tests Discipline</h2>
      <p>
        The losing unit has to take a Discipline tests with an additional
        penalty equal to the difference in casualties caused that round.
      </p>
      <h3>If Loser holds then fight again</h3>
      <p>
        If the loser passes the Discipline test it stays in the fight. Resolve
        another round of combat but this time all attacks are resolved
        simultaneously.
      </p>
      <h3>If Loser fails then winner Regroups</h3>
      <p>
        If the loser fails the Discipline test it is immediately destroyed and
        all models are removed. The winning unit now makes a move up to D6" in
        any direction.
      </p>
    </>
  );
}
export default MeleeCombat;
