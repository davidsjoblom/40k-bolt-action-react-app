function Objectives() {
  return (
    <>
      <h1>Objectives</h1>
      <hr />
      <ol>
        <li>Flags</li>
        <li>Hold Center</li>
        <li>King of the Hill</li>
        <li>Breakthrough</li>
        <li>Pillage</li>
      </ol>
      <h2>Flags</h2>
      <p>
        The player that killed the most enemy units with Scoring wins the
        Objective. If the players kill the same amount or if neither kill any
        enemy units with Scoring then the Objective is a tie.
      </p>
      <h2>Hold Center</h2>
      <p>
        The player with the most Scoring units within 6" of the center of the
        board at the end of each turn except the first gains an Objective Point.
        If both players have the same number of Scoring units or if nether has
        one within the center of the board no one gets an Objective Point.
      </p>
      <p>
        The player with the most Objective Points at the end of the game wins
        the Objective. If the players has an equal number of Objective Points
        then the Objective is a tie.
      </p>
      <h2>King of the Hill</h2>
      <p>
        Both players place a 'flag' Objective marker anywhere 12" from the board
        edge and 1" away from any Impasse terrain, starting the the player that
        chose deployment zone first.
      </p>
      <p>
        The player that has a Scoring unit within 3" of the marker placed by the
        opposing player at the end of the game wins the Objective. If both or
        neither players has Scoring units within 3" of the marker placed by the
        opposing player at the end of the game the Objective is a tie.
      </p>
      <h2>Breakthrough</h2>
      <p>
        The player with most Scoring unit in the opposing players Deployment
        zone at the end of the game wins the Objective. If the players has an
        equal number of Scoring units in the opposing Deployment zone the
        Objective is a tie.
      </p>
      <h2>Pillage</h2>
      <p>
        3 Loot tokens are placed along the center-line of the board. The first
        token is placed the the middle of the board and then the 2 remaining are
        placed on either side 24" away from the middle along the center-line. If
        any Loot tokens would end up in contact with Impasse terrain then move
        them the shortest necessary distance along the center-line until they
        are 1" clear of it.
      </p>
      <p>
        A Scoring unit can 'pick up' a Loot token it is in contact with at the
        beginning of resolving an Advance Order. The unit is now considered
        'carrying' the Loot token and its actual position doesn't matter while
        carried.
      </p>
      <p>
        A unit carrying a Loot token that is issued a Run Order must immediately
        drop the Loot token anywhere on the board within 1" of the unit and 1"
        away from any Impasse terrain.
      </p>
      <p>
        A unit issued any Order may voluntarily drop a carried Loot token
        anywhere on the board within 1" of the unit and 1" away from any Impasse
        terrain.
      </p>
      <p>
        A unit carrying a Loot token that is destroyed immediately drops the
        Loot token anywhere on the board within 1" of the unit and 1" away from
        any Impasse terrain chosen by the enemy player in this case.
      </p>
      <p>
        The player with the most units carrying Loot tokens at the end of the
        game wins the Objective. If both players has the same number or if
        neither has any then the Objective is a tie
      </p>
    </>
  );
}
export default Objectives;
