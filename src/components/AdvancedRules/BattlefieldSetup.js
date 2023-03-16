import battlefield from "../../graphics/battlefield.svg";
export default function BattlefieldSetup() {
  return (
    <>
      <h1>Battlefield Setup</h1>
      <hr />
      <h2>Board Size</h2>
      <p>The game is played on a board that is 72" wide and 48" deep.</p>
      <h2>Battlefield Terrain</h2>
      <p>
        While the game can be played with just an open board it is highly
        encouraged to place at least some terrain features on the board.
      </p>
      <p>
        There are many ways to populate a board with terrain; use a
        predetermined layout, the players alternate placing features or have a
        third party arrange the board.
      </p>
      <p>
        As a rule of thumb at least 6 pieces of terrain on a standard size
        72x48" board, one piece for each 24" square, is recommended. If one
        wishes the number of placed pieces can be randomized by rolling 2D3+4.
      </p>
      <h2>Example Battlefield</h2>
      <div className="wrapper-battlefield-example">
        <img src={battlefield} alt="abo" className="battlefield-example" />
      </div>
    </>
  );
}
