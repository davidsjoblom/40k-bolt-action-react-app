export default function PlayingTheGame() {
  return (
    <>
      <h1>Playing the Game</h1>
      <hr />
      <ul>
        <li>Assemble Army</li>
        <li>Set up Battlefield</li>
        <li>Pick Objective</li>
        <li>Deploy Units</li>
        <li>Play 6 Turns</li>
        <li>Determine Winner</li>
      </ul>
      <h2>Assemble Army</h2>
      <p>
        Each player chooses one Army List from which to pick their units from.
        Then they select units from that Army List up to the total points level
        agreed upon.
      </p>
      <h3>Army Lists</h3>
      <p>
        There are several different Army List from which one can put together an
        Army. An Army can only contain unit from a single Army List.
      </p>
      <h3>Points Level</h3>
      <p>
        The default points level is 1000pts but players are free to agree on
        another points level. The total points cost of an army may not exceed
        the points level but may be less.
      </p>
      <h3>Mandatory Units</h3>
      <p>
        An Army must contain one model with Commanding Presence which serves as
        the Army General.
      </p>
      <p>
        An Army must also include at least 3 units with Scoring. This may
        include the Army Generals unit.
      </p>
      <h3>Unit Restrictions</h3>
      <p>Units may not be duplicated, i.e. selected twice, in an army</p>
    </>
  );
}
