const TheTurn = function () {
  return (
    <>
      <h1>The Turn</h1>
      <p>
        40k Bolt Action is played in turns. A full game lasts for 6 turns.
        Before the first turn place all of each player's order dice in the dice
        bag.
      </p>
      <h2>Turn Sequence</h2>
      <ol>
        <li>Draw a random order dice from the dice bag.</li>
        <li>
          The player whose dice was drawn chooses one of his units and issues it
          an order by placing the dice next to it.
        </li>
        <li>
          If necessary a Discipline test is taken to determine if the unit
          follows the order.
        </li>
        <li>The player resolves the unit's order.</li>
        <li>Repeate until the dice bag is empty.</li>
      </ol>
      <h2>End of Turn</h2>
      <p>
        Return all order dice to the dice bag except for those units wishing to
        retain an Ambush or Down order.
      </p>
    </>
  );
};

export default TheTurn;
