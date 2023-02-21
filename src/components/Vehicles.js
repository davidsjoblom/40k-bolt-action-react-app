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
      <h2>Vehicles and Order tests</h2>
      <p>
        When a Vehicle with Pin markers is issued an order and fails the Order
        test it is given a Down order as normal but must also pivot around its
        center until it directly faces the closest enemy model. This pivot may
        not exceed 90 degrees and if that is not enough then it pivots as close
        as possible to towards the closest enemy model. The Vehicle must then
        move as far as possible directly backwards up to half its Movement
        Speed. Note that if the Vehicle is Immobilized then it is neither
        pivoted or moved.
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
        A Vehicle may only move either directly forward up to its Movement Speed
        or directly backwards up to half its Movement Speed during an Advance
        order. It may not move forwards and backwards during the same move. It
        may only change orientation once up to a maximum of 90 degrees. It may
        do this change of direction at any point in the move and then carry on
        in the new direction.
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
            <th>Effect</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Stunned</td>
            <td>
              The Vehicle takes an additional Pin. If it has already received an
              order this turn flip it to Down. If it has not yet received an
              order it may not be issued one this turn.
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Disabled weapon</td>
            <td>
              One of the Vehicles weapons chosen by the shooter is disabled and
              may not be used for the remainder of the game.
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Immobilized</td>
            <td>
              The Vehicle is Immobilized and may not move for the remainder of
              the game.
            </td>
          </tr>
          <tr>
            <td>4+</td>
            <td>Destroyed</td>
            <td>
              The Vehicle is destroyed. Mark it as a wreck and leave the model
              on the board. Wrecks are considered Impasse terrain features.
            </td>
          </tr>
        </tbody>
      </table>
      <h3>Over-penetration</h3>
      <p>
        If the roll to wound that preceded the roll on the Penetration table
        exceeded the target number by 3 or more then roll an additional time on
        the Penetration table and apply its result as well.
      </p>
      <h2>Vehicles and Terrain</h2>
      <p>
        Some terrain can be risky for a Vehicle to traverse. Only one Dangerous
        terrain test is taken per terrain feature during the same move.
      </p>
      <h3>Vehicles moving through Rough Terrain or Covering Terrain(Hard)</h3>
      <p>
        Vehicles moving through Rough terrain or Covering Terrain(Hard) has to
        take a Dangerous terrain test. The Vehicle temporarily stops upon
        contact with the terrain and a D6 is rolled, a roll of 4+ is a success
        and the Vehicle may continue moving as normal. If the test is failed the
        Vehicle is moved D6" directly forwards as far as possible and then
        immediately Immobilized.
      </p>
      <p>
        A Dangerous terrain test natural roll of 1 is always considered a fail
        and a natural roll of 6 is always considered a success regardless of
        modifiers.
      </p>
      <h4>Vehicles moving through both Rough and Covering Terrain(Hard)</h4>
      <p>
        Vehicles moving through terrain that is both Rough and Covering
        Terrain(Hard) needs to roll 5+ to pass its Dangerous terrain test
        instead.
      </p>
      <h3>Vehicles and Buildings</h3>
      <p>
        Vehicles treat Building terrain features as Impasse terrain features
        instead.
      </p>
    </>
  );
}
export default Vehicles;
