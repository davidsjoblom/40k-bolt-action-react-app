export default function PlayingTheGame() {
  return (
    <>
      <h1>Playing the Game</h1>
      <hr />
      <ul>
        <li>Assemble Army</li>
        <li>Set up Battlefield</li>
        <li>Assign Table edge</li>
        <li>Select Objective</li>
        <li>Deploy Units</li>
        <li>Play 6 Turns</li>
        <li>Determine Winner</li>
      </ul>
      <h2>Assemble Army</h2>
      <p>See Army Building section.</p>
      <h2>Set up Battlefield</h2>
      <p>See Battlefield Setup section.</p>
      <h2>Assign Table Edge</h2>
      <p>Randomly assign a long table edge to each player.</p>
      <h2>Select Objective</h2>
      <p>
        Either the players agree on an objective, play a predetermined one or
        randomize from the Objectives list (see Objectives section).
      </p>
      <h2>Deploy Units</h2>
      <p>See Deployment section.</p>
      <h2>Play 6 Turns</h2>
      <p>Play 6 complete Turns (see The Turn section).</p>
      <h2>Determine Winner</h2>
      <p>
        At the end of the game 20 Victory points are divide up between the
        players depending on the difference in units killed and the Objective.
      </p>
      <h3>Kill points</h3>
      <p>
        At the end of the game both players total the points value of all enemy
        units destroyed during the game. Enemy units left with 25% or less
        models it started with grant 50% of its value.
      </p>
      <p>
        Then compare the difference in both players total score to the table
        below. The player with more Kill points is considered the 'Winner' but
        not necessarily of the whole game.
      </p>
      <table>
        <thead>
          <tr>
            <th colSpan={2}>Kill Point Difference</th>
            <th colSpan={2}>Victory Points</th>
          </tr>
          <tr>
            <th>% of Game Size</th>
            <th>1000pts Game</th>
            <th>Winner</th>
            <th>Loser</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0-5%</td>
            <td>0-50</td>
            <td>10</td>
            <td>10</td>
          </tr>
          <tr>
            <td>5-10%</td>
            <td>51-100</td>
            <td>11</td>
            <td>9</td>
          </tr>
          <tr>
            <td>10-20%</td>
            <td>101-200</td>
            <td>12</td>
            <td>8</td>
          </tr>
          <tr>
            <td>20-30%</td>
            <td>201-300</td>
            <td>13</td>
            <td>7</td>
          </tr>
          <tr>
            <td>30-40%</td>
            <td>301-400</td>
            <td>14</td>
            <td>6</td>
          </tr>
          <tr>
            <td>40-50%</td>
            <td>401-500</td>
            <td>15</td>
            <td>5</td>
          </tr>
          <tr>
            <td>50-60%</td>
            <td>501-600</td>
            <td>16</td>
            <td>4</td>
          </tr>
          <tr>
            <td>{">"}70%</td>
            <td>601-700</td>
            <td>17</td>
            <td>3</td>
          </tr>
        </tbody>
      </table>
      <h3>Objective Victory points</h3>
      <p>
        The player that wins the Objective gains 3 Victory points and the losing
        player loses 3 Victory points. In case of a tied Objective neither
        player gains any points.
      </p>
      <h3>Winner of the Game</h3>
      <p>
        The player with most Victory points is considered the winner of the
        game.
      </p>
    </>
  );
}
