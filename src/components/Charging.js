const MeleeCombat = function () {
  return (
    <>
      <h1>Charging</h1>
      <hr />
      <ol>
        <li>Declare charge</li>
        <li>Target reacts</li>
        <li>Roll charge distance</li>
        <li>Move charging models</li>
        <li>Pile in charged models</li>
        <li>Resolve the Melee Combat</li>
      </ol>
      <h2>Declare charge</h2>
      <p>
        In order for a unit to engage an enemy in Melee combat it has to be
        issued a Run order and then choose which enemy unit it intends to
        Charge. This enemy unit has to be visible and within the charging units
        Movement Speed + 12".
      </p>
      <h2>Target reacts</h2>
      <p>
        If the enemy unit targeted by the Charge has not yet received an order
        this turn and the distance to the charging unit is more than the
        Movement characteristic of the charging unit, it may be issued a Fire
        order by collecting an Order die of its army from the dice bag. This
        Fire order must target the charging unit only and is resolved
        immediately.
      </p>
      <h3>Charger fails Discipline test</h3>
      <p>
        Should this Fire order trigger a morale check which is then failed the
        charging unit immediately abandons its charge attempt and goes Down
        instead by flipping its Order die to Down.
      </p>
      <h2>Roll charge distance</h2>
      <p>
        Roll 2D6 and add them to the charging units Movement Speed. If the
        result is equal or greater than the distance between the charging unit
        and the unit being charged then the charge is successful.
      </p>
      <p>
        If the result is less than the distance between the charging unit and
        the unit being charged then the charge fails and the charging unit is
        immediately issued a Down order instead.
      </p>
      <h2>Move charging models</h2>
      <p>
        Charging models are moved in order of proximity to the charged unit,
        i.e. move the closest charging model first, then the second closest etc.
      </p>
      <p>
        Charging models are moved in a straight line the shortest distance
        needed to make base contact with a model in the charged unit.
      </p>
      <p>
        If unable to make direct base contact it is instead moved in a straight
        line the shortest distance needed to make base contact with a friendly
        charging model that is already in base contact with a model in the
        charged unit.
      </p>
      <p>
        If unable to make direct base contact nor second hand base contact with
        a straight move the model is moved the shortest necessary distance (this
        does not have to be in a straight line) needed up to its Move
        characteristic in order to then move in a straight line into either
        direct or second hand base contact.
      </p>
      <p>
        If a model is still unable to make it into base contact it is moved the
        shortest necessary distance to get within 1" of another charging model
        that has already moved to maintain Unit Cohesion.
      </p>
      <p>
        Note that the final distance moved by charging models is not limited by
        the Roll charge distance total, charging models are simply moved as far
        as they have to. This means that charges are not slowed down by Rough
        terrain.
      </p>
      <h3>Disrupted Charge</h3>
      <p>
        Any charging model that moved through Rough terrain or a Wall during its charge
        move counts as a Disrupted Charge.
      </p>
      <h2>Pile in charged models</h2>
      <p>
        Any model in the charged unit that is not in direct or second hand base
        contact with an enemy are now be moved. This is done the same way as
        when moving charging models.
      </p>
      <h2>Resolve the Melee combat</h2>
      <p>See Melee Combat section.</p>
    </>
  );
};
export default MeleeCombat;
