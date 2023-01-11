const Orders = function () {
  return (
    <>
      <h1>Orders</h1>
      <p>
        There are 6 different orders a unit can be given. A unit can only be
        given one order per turn.
      </p>
      <h2>Fire Order</h2>
      <p>The unit does not move and may preform a Shooting action.</p>
      <h2>Advance Order</h2>
      <p>
        The unit may preform a Move action up to its Movement speed and then
        preform a Shooting action.
      </p>
      <h2>Run Order</h2>
      <p>
        The unit may either preform a Move action up to double its Movement
        speed or it may declare a Charge action.
      </p>
      <h2>Ambush Order</h2>
      <p>
        The unit does nothing immediately but may choose to at any point during
        a Move action of an enemy unit spring its Ambush and preform a Shooting
        action against that unit, interrupting its action. The Order dice is
        then flipped to Fire, the unit is no longer in ambush and the target may
        continue its action.
      </p>
      <h2>Rally Order</h2>
      <p>
        Order tests taken when issuing Rally orders igoring any negative
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
