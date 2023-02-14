import battlefield from '../graphics/battlefield.svg';

function Terrain() {
  return (
    <>
      <h1>Terrain</h1>
      <hr />
      <h2>Terrain Types</h2>
      <h3>Covering Terrain (Soft / Hard)</h3>
      <p>
        Shooting at models in/or behind Covering terrain suffer penalties to
        hit. The penalty depends on whether its Soft cover or Hard cover where
        Soft gives a -1 penalty and Hard -2 penalty.
      </p>
      <h3>Elevated terrain</h3>
      <p>
        Models in Elevated terrain counts as Elevated. Line of Sight drawn to
        and from Elevated models ignores any interviening none-Elevated models.
      </p>
      <h3>Impassible Terrain</h3>
      <p>Impassible terrain blocks all movement.</p>
      <h3>Opaque Terrain</h3>
      <p>
        Line of Sight cannot be drawn through Opaque terrain. Line of Sight can
        be drawn into and out of Opaque terrain.
      </p>
      <h3>Rough Terrain</h3>
      <p>Movement through Rough terrain counts as double.</p>
      <hr />
      <h2>Terrain Features</h2>
      <h3>Buildings</h3>
      <p>
        Buildings are Rough terrain, Opaque terrain and Covering terrain(Hard
        cover) for models inside them.
      </p>
      <h3>Forests</h3>
      <p>
        Forests are Rough terrain and Covering terrain(Soft cover) for models
        inside and behind it.
      </p>
      <h3>Fields</h3>
      <p>Fields are Covering terrain(Soft cover) for models inside it.</p>
      <h3>Hills</h3>
      <p>Hills are Opaque and Elevated terrain.</p>
      <h3>Hedge Rows & Fences</h3>
      <p>
        Hedge rows and fences are Covering terrain(Soft cover) to models behind
        and within 1" of them.
      </p>
      <h3>Impass & Board Edge</h3>
      <p>
        Impass terrain and the Board edge are Impassible and Opaque terrain.
      </p>
      <h3>Mud</h3>
      <p>Mud is Rough terrain.</p>
      <h3>Ruins</h3>
      <p>
        Ruins are Rough terrain and Covering terrain(Hard cover) for models
        inside and behind it.
      </p>
      <h3>Trenches</h3>
      <p>Trenches are Covering terrain(Hard cover) for models inside them.</p>
      <h3>Walls</h3>
      <p>
        Walls are Covering terrain(Hard cover) to models behind and within 1" of
        them.
      </p>
      <h3>Water</h3>
      <p>Water is Impassible terrain.</p>
      <hr />
      <h2>Terrain Summary</h2>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            <th>Movement</th>
            <th>Cover</th>
            <th>Line of Sight</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Forest</td>
            <td>Half</td>
            <td>Soft</td>
            <td></td>
          </tr>
          <tr>
            <td>Fields</td>
            <td></td>
            <td>Soft</td>
            <td></td>
          </tr>
          <tr>
            <td>Ruins</td>
            <td>Half</td>
            <td>Hard</td>
            <td></td>
          </tr>
          <tr>
            <td>Mud</td>
            <td>Half</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Water</td>
            <td>None</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Hills</td>
            <td></td>
            <td></td>
            <td>Not through</td>
          </tr>
          <tr>
            <td>Hedges</td>
            <td></td>
            <td>Soft</td>
            <td></td>
          </tr>
          <tr>
            <td>Walls</td>
            <td></td>
            <td>Hard</td>
            <td></td>
          </tr>
          <tr>
            <td>Impass</td>
            <td>None</td>
            <td></td>
            <td>None</td>
          </tr>
          <tr>
            <td>Smoke</td>
            <td></td>
            <td>Soft</td>
            <td>Not through</td>
          </tr>
        </tbody>
      </table>
      <h2>Example Battlefield</h2>
      <div className="wrapper-battlefield-example">
        <img src={battlefield} alt="abo" class="battlefield-example" />
      </div>
    </>
  );
}
export default Terrain;
