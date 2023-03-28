export default function Changes() {
  return (
    <>
      <h1>Changes from Bolt Action</h1>
      <hr />
      <h2>General Principles</h2>
      <ul>
        <li>
          Unit Formation; unit models may never be further than 6" away,
          limiting conga-lines
        </li>
        <li>Pre-measuring is allowed now</li>
        <li>
          'True' Line of Sight replaced with flat 2D system measuring from base
          to base
        </li>
        <li>
          Number of Order dice per army is now set to 2 + 1 die per 100pts
          played, no longer tied to number of units in army and no dice are lost
          during play when units are destroyed
        </li>
        <li>
          Unit Types removed and replaced with Special rules like Vehicle,
          Team(X) and Mounted instead.
        </li>
        <li>Proper support for 'multi'-based models added</li>
      </ul>
      <h2>Unit Characteristics</h2>
      <ul>
        <li>
          Inexperienced, Regular and Veteran unit classifications removed in favor of more
          unit specific stats
        </li>
        <li>
          Movement Speed, Toughness and Discipline added as a unit specific
          stat, no longer standardized to unit type
        </li>
        <li>Base Size added as a unit specific stat including for Vehicles</li>
        <li>
          Support for Square Bases added, both for Vehicles and Weapon Teams
        </li>
      </ul>
      <h2>Shooting & Pins</h2>
      <ul>
        <li>
          Units able to target several enemies in a single shooting order now
          can only inflict Pins on one of them.
        </li>
        <li>
          Pinning 7+ and above units streamlined (only pins if able to damage)
        </li>
        <li>Down to hit penalty reduced to -1 from -2</li>
        <li>System added for targeting specific cover 'levels'</li>
        <li>
          Needing 7+ to hit is now a 6 followed by a 5+ instead of a 6 followed
          by a 6 but needing 8 or more is now an auto-miss
        </li>
        <li>Exceptional damage removed for all weapons except Snipers</li>
      </ul>
      <h2>Weapons</h2>
      <ul>
        <li>
          (Most weapons have received changes, only select major changes
          mentioned here)
        </li>
        <li>
          Added another Autocannon so theres now 3 total; light, medium and
          heavy
        </li>
        <li>Added DEW (directed energy) weapons; short range anti tank</li>
        <li>
          removed 'fall off' (-1 Pen at long range) for all weapons (still on
          DEWs though)
        </li>
        <li>
          SMGs and pistols no longer give bonus Melee rules (units can have
          Melee Specialist rule instead)
        </li>
        <li>
          Blast weapon templates removed, replaced by dice determined hits
          instead
        </li>
      </ul>
      <h2>Charging & Melee combat</h2>
      <ul>
        <li>
          Charges are randomized now (2D6 + Move) and a failed charge results in
          a few inches stumble and a Down order instead
        </li>
        <li>
          More detailed and strict rules for moving models into base contact
        </li>
        <li>
          All melee combats can now continue several rounds (Fanatics rule is
          gone), the loser of a round has to pass a Break tests or be destroyed
        </li>
      </ul>
      <h2>Terrain & Cover</h2>
      <ul>
        <li>
          Complete rework of Terrain & Cover system, mostly stolen from T9A
        </li>
        <li>May now Run through Rough terrain</li>
        <li>Rough terrain now halves movement speed</li>
        <li>
          Dangerous terrain checks implemented for Vehicles (and Mounted troops)
        </li>
        <li>
          Buildings now works like a ruin that blocks Line of Sight through it
          and blocks Vehicle movement
        </li>
      </ul>
      <h2>Vehicles</h2>
      <ul>
        <li>
          Coax weapons may now be fired along with the main one
        </li>
        <li>
          Attacking Vehicles in Melee reworked; no need for Tank Fear tests but need 'AT-melee' weapons in order to Pen (satchel charges, power-fists etc). No Pen attacks can still glance 8+ Tough vehicles in Melee
        </li>
        <li>Replaced On Fire damage result with Weapon Disabled result instead</li>
      </ul>
    </>
  );
}
