const CloseCombat = function () {
  return (
    <>
      <h1>Close Combat</h1>
      <hr />
      <ol>
        <li>Declare charge</li>
        <li>Target reacts</li>
        <li>Roll charge distance</li>
        <li>Move charging models</li>
        <li>Pile in charged models</li>
        <li>First round of combat</li>
        <li>Further rounds until one side is routed</li>
        <li>Winner regroups</li>
      </ol>
      <h2>Declare charge</h2>
      <p>
        In order for a unit to engage an enemy in Close Combat it has to be
        issued a Run order and then choose which enemy unit it intends to
        Charge. This enemy unit has to be visible and within the charging units
        Movement Speed + 12".
      </p>
      <h2>Target reacts</h2>
      <p>
        If the enemy unit targeted by the Charge has not yet recieved an order
        this turn it may be issued a Fire order by collecting an Order die of
        its army from the dice bag. This Fire order must target the charging
        unit only and is resolved immediately.
      </p>
      <p>
        Should this Fire order trigger a morale check which is then failed the
        charging unit immediately abandons its charge attempt and goes Down
        instead by flipping its Order die to Down.{' '}
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
        immediately issued a Down order instead
      </p>
      <h2>Move charging models</h2>
      <p>
        Move all charging models the shortest distance needed in order to either
        make base contact with the enemy unit being charged.
      </p>
    </>
  );
};
export default CloseCombat;
