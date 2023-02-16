const Orders = function () {
  return (
    <>
      <h1>Orders</h1>
      <hr />
      <h2>Fire Order</h2>
      <p>The unit does not move and may preform a Shooting action.</p>
      <h2>Advance Order</h2>
      <p>
        The unit may move up to its Movement speed and then preform a Shooting
        action.
      </p>
      <h2>Run Order</h2>
      <p>
        The unit may either move up to double its Movement speed or it may
        Charge an enemy unit.
      </p>
      <h2>Ambush Order</h2>
      <p>
        The unit does nothing immediately but may choose to at any point during
        a move of an enemy unit spring its Ambush and preform a Shooting action
        against that unit, interrupting its action. The Order dice is then
        flipped to Fire, the unit is no longer in ambush and the target may
        continue its action.
      </p>
      <h2>Rally Order</h2>
      <p>
        Order tests taken when issuing Rally orders ignoring any negative
        Discipline penalties from pins. The unit may remove D6+1 Pins.
      </p>
      <h2>Down Order</h2>
      <p>
        The unit does not move and enemy units targeting the unit suffers a -1
        to hit. Units that keep their Down order at the end of turn may remove
        D3 pin markers.
      </p>
    </>
  );
};

export default Orders;
