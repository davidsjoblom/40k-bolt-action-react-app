function Vehicles() {
  return (
    <>
      <h1>Vehicles</h1>
      <hr />
      <h2>Vehicles and Line of Sight</h2>
      <p>Vehicles block Line of Sight.</p>
      <h2>Vehicles and Moving Through Friendly Models</h2>
      <p>
        Vehicles may not move through friendly models and friendly models may
        not move through Vehicles.
      </p>
      <h2>Vehicles and Down orders</h2>
      <p>
        Vehicles cannot intentionally be issued a Down order and the shooting
        penalty for targeting a Down unit is disregarded if the target unit is a
        Vehicle. Note however that a Vehicle may be forcefully issued a Down
        order to represent it for example being stunned. A Vehicle with a Down
        order may never choose to keep it at the end of turn.
      </p>
      <h2>Vehicles and Advance orders</h2>
      <p>
        A Vehicle may only move either directly forwards or directly backwards
        during an Advance order. It may not move forwards and backwards during
        the same move. It may only change orientation once up to a maximum of 90
        degrees. It may do this change of direction at any point in the move and
        then carry on in the new direction.
      </p>
      <h2>Vehicles and Run orders</h2>
      <p>
        Vehicles may only move directly forward during a Run order and may not
        change its orientation.
      </p>
      <h2>Vehicles and Shooting</h2>
      <p>Vehicles may fire all of its weapons at the same time.</p>
      <h2>Vehicles and Charging</h2>
      <p>Vehicles may not preform charges.</p>
      <h2>Shooting at Vehicles</h2>
      <p>
        When a Vehicle unit is hit and wounded it is not immediately removed but
        instead roll on the Penetration table once per wound caused.
      </p>
      <h2>Vehicles and Cover</h2>
      <p>
        Vehicles do not benefit from cover by being in or behind terrain.
        Vehicles may still be Obscured.
      </p>
      <h2>Charging Vehicles</h2>
      <p>
        Vehicles are charged by other units as normal but may never attack in
        Melee combat. When a Vehicle unit is wounded it is not immediately
        removed but instead roll on the Penetration table once per wound caused.
      </p>
      <h2>Vehicle Penetration table</h2>
      <table>
        <thead>
          <tr>
            <th>D6</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Stunned</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Disabled weapon</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Immobilized</td>
          </tr>
          <tr>
            <td>4-6</td>
            <td>Destroyed</td>
          </tr>
        </tbody>
      </table>
      <h3>Stunned</h3>
      <p>
        The Vehicle takes an additional Pin. If it has already received an order
        this turn flip it to Down. If it has not yet received an order it may
        not be issued one this turn.
      </p>
      <h3>Disabled weapon</h3>
      <p>
        One of the Vehicles weapons chosen by the shooter is disabled and may
        not be used for the remainder of the game.
      </p>
      <h3>Immobilized</h3>
      <p>
        The Vehicle is Immobilized and may not move for the remainder of the
        game.
      </p>
      <h3>Destroyed</h3>
      <p>
        The Vehicle is destroyed. Mark it as a wreck and leave the model on the
        board. Wrecks are considered Impasse terrain features.
      </p>
      <h3>Over-penetration</h3>
      <p>
        If the roll to wound that preceded the roll on the Penetration table
        exceeded the target number by 3 or more then roll an additional time on
        the Penetration table and apply its result as well.
      </p>
    </>
  );
}
export default Vehicles;
