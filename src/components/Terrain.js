function Terrain() {
  return (
    <>
      <h1>Terrain</h1>
      <hr />
      <h2>Terrain Types</h2>
      <h3>Rough Terrain</h3>
      <p>Movement through Rough terrain counts as double.</p>
      <h3>Covering Terrain (Soft / Hard)</h3>
      <p>
        Shooting at models in/or behind Covering terrain suffer penalties to
        hit. The penalty depends on whether its Soft cover or Hard cover where Soft
        gives a -1 penalty and Hard -2 penalty.
      </p>
      <h3>Opaque Terrain</h3>
      <p>
        Line of Sight cannot be drawn through Opaque terrain. Line of Sight can
        be drawn into and out of Opaque terrain.
      </p>
      <h3>Elevated terrain</h3>
      <p>
        Models in Elevated terrain counts as Elevated. Line of Sight drawn to
        and from Elevated models ignores any interviening none-Elevated models.
      </p>
      <h3>Impassible Terrain</h3>
      <p>Impassible terrain blocks all movement.</p>
      <hr />
      <h2>Terrain Features</h2>
      <h3>Forests</h3>
      <p>
        Forests are Rough terrain and Covering terrain(Soft cover) for models
        inside and behind it.
      </p>
      <h3>Fields</h3>
      Fields are Covering terrain(Soft cover) for models inside it.
      <h3>Ruins</h3>
      Ruins are Rough terrain and Covering terrain(Hard cover) for models inside
      and behind it.
      <h3>Mud & Shallow Water</h3>
      Shallow water is Rough terrain.
      <h3>Deep Water</h3>
      <p>Deep water is Impassible terrain.</p>
      <h3>Hills</h3>
      <p>Hills are Opaque and Elevated terrain.</p>
      <h3>Hedge Rows & Wooden Fences</h3>
      <p>Hedge rows are Covering terrain(Soft cover) to models behind and within 1" of them.</p>
      <h3>Stone Walls & Sandbags</h3>
      <p>Walls are Covering terrain(Hard cover) to models behind and within 1" of them.</p>
      <h3>Board Edge</h3>
      <hr />
      <h2>Summary</h2>
      <table>
         <thead>
            <tr>
               <th>Terrain</th>
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
    </>
  );
}
export default Terrain;
