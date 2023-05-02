const Orders = function () {
  return (
    <>
      <h1>Orders</h1>
      <hr />
      <h2>Orders</h2>
      <p>
        There are 6 different Orders a player may issue his units. One Order may
        be issued per Order die either randomized from the Dice bag or collected
        as part of a reaction.
      </p>
      <h2>Running out of Order dice</h2>
      <p>
        If a player 'runs out' of his Order dice during a turn, i.e. he has
        issued 12 Order already this turn, then no more Orders can be issued for
        the rest of the turn including as part of reactions.
      </p>
      <h2>Order list</h2>
      <table>
        <thead>
          <tr>
            <th>Order</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Fire</td>
            <td>The unit may fire their weapons.</td>
          </tr>
          <tr>
            <td>Advance</td>
            <td>
              The unit may move up to its Movement speed and then fire their
              weapons.
            </td>
          </tr>
          <tr>
            <td>Run</td>
            <td>
              The unit may move up to double its Movement speed or it may Charge
              an enemy unit.
            </td>
          </tr>
          <tr>
            <td>Ambush</td>
            <td>
              The unit does nothing immediately but may choose to at
              any point during a move of an enemy unit spring its Ambush and
              preform a Shooting action against that unit, interrupting its
              action. The Order dice is then flipped to Fire, the unit is no
              longer in ambush and the target may continue its action.
            </td>
          </tr>
          <tr>
            <td>Rally</td>
            <td>
              Discipline tests taken when issuing Rally orders ignoring any
              negative Discipline penalties from pins. The unit may remove D6+1
              Pins.
            </td>
          </tr>
          <tr>
            <td>Down</td>
            <td>
              The unit does not move and enemy units targeting the unit suffers
              a -1 to hit. Units that keep their Down order at the end of turn
              may remove D3 pin markers.
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Orders;
