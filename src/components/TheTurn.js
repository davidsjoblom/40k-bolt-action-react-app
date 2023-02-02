const TheTurn = function () {
  return (
    <>
      <h1>The Turn</h1>
      <hr />
      <h2>Turn Sequence</h2>
      <ol>
        <li>Draw a random order dice from the dice bag.</li>
        <li>
          The player whose dice was drawn chooses one of his units and issues it
          an order by placing the dice next to it.
        </li>
        <li>
          If the unit has pins on it a Discipline test has to be passed or else
          the unit is instead automatically issued a Down order instead.
        </li>
        <li>The unit's order is resolved.</li>
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
