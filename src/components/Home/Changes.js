export default function Changes() {
  return (
    <>
      <h1>Changes from Bolt Action</h1>
      <hr />
      <h2>General Principles Changes</h2>
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
          Movement Speed, Toughness and Discipline added as a unit specific
          stat, no longer standardized to unit type
        </li>
        <li>Base Size added as a unit specific stat including for Vehicles</li>
        <li>
          Support for Square Bases added, both for Vehicles and Weapon Teams
        </li>
      </ul>
    </>
  );
}
