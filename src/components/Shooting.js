const Shooting = function () {
  return (
    <>
      <h1>Shooting</h1>
      <hr />
      <ol>
        <li>Choose target</li>
        <li>Target reacts</li>
        <li>Measure range & Line of Sight</li>
        <li>Roll to Hit & place Pins</li>
        <li>Roll to Wound</li>
        <li>Remove casualties</li>
        <li>Target checks morale</li>
      </ol>
      <h2>Choose target</h2>
      <p>The unit shooting chooses one enemy unit to shoot at.</p>
      <h2>Target reacts</h2>
      <p>
        If the unit targeted has not yet recieved an order it may immediately be
        issued an out of sequence Down order. Collect an Order dice from the
        Dice bag and issue the Down order as normal.
      </p>
      <h3>Target in Ambush</h3>
      <p>
        If the targeted unit has been issued an Ambush order it may choose to
        immediately change it to an Down order in response to being targeted.
      </p>
      <h2>Measure range & Line of Sight</h2>
      <p>
        Measure the distance from each model shooting to the target unit. If the
        distance is equal to or less than the Range of the weapon the model is
        shooting with then it is considered to be in range. Any model that is in
        range and has Line of Sight to the target may shoot its weapon.
      </p>
      <h2>Roll to Hit & place Pins</h2>
      <p>
        Each model shooting rolls a die per Shot its weapon has. In order to
        score a Hit a 3 or more(3+) needs to be rolled but there's a multitude
        of modifiers which affect this target number. A negative modifier raises
        the target number while a positive one lowers it.
      </p>
      <p>
        Each model has the applicable modifiers applied to its own dice and
        different models in the same unit may have different modifiers applied
        to its target number.
      </p>
      <p>
        The target number can never be less than 2+. If the target number
        exceeds 7+ then the shot automatically misses.
      </p>
      <p>
        If at least one hit is scored place Pin markers depending on the weapon
        that caused the hit. If several hits are scored only one of them apply
        Pin markers choosen by the player controlling the unit shooting.
      </p>
      <table>
        <thead>
          <tr>
            <th colSpan={2}>Hit Modifiers</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Point blank</td>
            <td>+1</td>
          </tr>
          <tr>
            <td>Long range</td>
            <td>-1</td>
          </tr>
          <tr>
            <td>Moving and Shooting</td>
            <td>-1</td>
          </tr>
          <tr>
            <td>X Pins on Shooter</td>
            <td>-X</td>
          </tr>
          <tr>
            <td>Target is Down</td>
            <td>-1</td>
          </tr>
          <tr>
            <td>Soft Cover</td>
            <td>-1</td>
          </tr>
          <tr>
            <td>Hard Cover</td>
            <td>-2</td>
          </tr>
        </tbody>
      </table>
      <h3>Point blank</h3>
      <p>
        If the Target is within 6" it is considered to be at Point blank range.
      </p>
      <h3>Long range</h3>
      <p>
        If the target is outside of half of the weapons maximum range it's Long
        range.
      </p>
      <h3>Moving and Shooting</h3>
      <p>
        If the model is shooting as part of an Advance order it is Moving and
        Shooting.
      </p>
      <h3>Pins on Shooter</h3>
      <p>Each Pin on the models unit shooting incurs a cumulative penalty.</p>
      <p></p>
      <h3>Target is Down</h3>
      <p>The target has been issued a Down Order.</p>
      <h3>Soft Cover</h3>
      <p>
        If the majority of half of the models(rounded up) in the target unit
        that are closest to the shooter are visible and is in at least Soft
        cover the whole unit is considered to be in Soft Cover.
      </p>
      <h3>Hard Cover</h3>
      <p>
        If the majority of half of the models(rounded up) in the target unit
        that are closest to the shooter are either not visible or is in Hard
        cover the whole unit is considered to be in Hard Cover.
      </p>
      <h2>Roll to Wound</h2>
      <p>
        Each die that scored a hit is now rolled again with the target number
        being the Toughness of the target unit modified by the Penetration of
        the weapon. Each successful to Wound roll results in a casualty.
      </p>
      <h2>Remove casualties</h2>
      <p>
        For each causalty inflicted a model is removed in the targeted unit
        chosen by its controlling player. If all models in the unit are
        removed the unit is considered destroyed and any excess casualties
        caused are disregarded.
      </p>
      <h2>Target checks morale</h2>
      <p>
        If half or more of the target units models were removed as casualties
        due to a single shooting attack it has to take a Discipline test. If it
        fails this test it immediately takes an additional Pin marker.
      </p>
    </>
  );
};
export default Shooting;
