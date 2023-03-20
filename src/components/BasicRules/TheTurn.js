const TheTurn = function () {
  return (
    <>
      <h1>The Turn</h1>
      <hr />
      <ol>
        <li>Beginning of Turn</li>
        <li>Randomize Order die</li>
        <li>Owner issues Order</li>
        <li>Discipline test Pinned unit</li>
        <li>Resolve Order</li>
        <li>Repeat until no more Order dice</li>
        <li>End of Turn</li>
      </ol>
      <h2>Beginning of Turn</h2>
      <p>
        Some rules and scenarios may have effects and things to resolve at the
        Beginning of Turn.
      </p>
      <h2>Randomize Order die</h2>
      <p>
        Randomly select an Order die from the Dice bag. The owner of the die may
        use it to issue an order or discard it. If discarded put it to the side
        and randomly select a new die.
      </p>
      <h2>Owner issues Order</h2>
      <p>
        The Owner selects one of his units that have yet to receive an Order
        this turn. There are 6 different Orders a unit can be issued and a unit
        can only be one Order at a time. See the Orders section for available
        orders.
      </p>
      <h2>Discipline test Pinned unit</h2>
      <p>
        If the unit receiving the Order has Pin markers on it it has to take a
        Discipline test. If it passes it may immediately remove one Pin marker
        and then preform the Order as normal. If it fails it is immediately
        issued a Down order instead without removing any Pins.
      </p>
      <h2>Resolve Order</h2>
      <p>See the Orders section.</p>
      <h2>Repeat until no more Order dice</h2>
      <p>
        If there are still Order dice in the Dice bag then go back to Randomize
        Order die step. If there are no more Order dice then proceed to End of
        Turn.
      </p>
      <h2>End of turn</h2>
      <p>
        Return all Order dice back to the Dice bag. Units with Down or Ambush
        orders may choose to retain them into the next turn. A unit that retains
        a Down order may immediately remove D3 Pin tokens.
      </p>
    </>
  );
};

export default TheTurn;
