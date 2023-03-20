export default function Terrain() {
  return (
    <>
      <h1>Terrain</h1>
      <hr />
      <h2>Terrain</h2>
      <p>
        Very few battles take place on completely flat and firm terrain.
        Battlefields tend to be littered with things that obstruct view or
        hinder movement. These are referred to as Terrain Features.
      </p>
      <p>
        A Terrain feature is a clearly demarcated area of the board that usually
        have some sort of decorative pieces on it to make it evident that type
        of Terrain it is meant to represent. A forest for example would consist
        of a 'base' to show where it begins and ends as well as a few trees to
        demonstrate that it is a Forest terrain feature.
      </p>
      <p>
        For rules purposes only the demarcated area of the Terrain features are
        actually relevant to interpreting the rules. Any decorative piece is
        simply ignored for rules purposes and may be moved out of the way
        whenever necessary. Note that this also applies to Hedges and Walls.
      </p>
      <h2>Terrain and Model Interpretation</h2>
      <h3>Inside Terrain</h3>
      <p>
        A model is considered to be inside a terrain feature if the center of
        its base is inside the terrain feature.
      </p>
      <h3>Behind Terrain</h3>
      <p>
        A model is considered to be behind a terrain feature from the point of
        another model if the straight line drawn from center of its base to the
        center of the other models base contacts the terrain feature at any
        point.
      </p>
      <h3>Obscured</h3>
      <p>
        A model is considered Obscured from the point of another model if the
        straight line drawn line drawn from center of it to the center of the
        other models base contacts a Line of Sight blocker.
      </p>
      <h2>Terrain Types</h2>
      <h3>Covering Terrain (Soft / Hard)</h3>
      <p>
        Models in or behind (depending on the terrain feature) benefit from
        either Soft or Hard cover (depending on the type of Covering terrain).
      </p>
      <h3>Elevated terrain</h3>
      <p>
        Models in Elevated terrain counts as Elevated. Line of Sight drawn to
        and from Elevated models ignores any intervening none-Elevated models.
      </p>
      <h3>Impassable Terrain</h3>
      <p>Impassable terrain blocks all movement.</p>
      <h3>Opaque Terrain</h3>
      <p>
        Line of Sight drawn through Opaque terrain is blocked. Line of Sight
        drawn into and out of Opaque terrain is not blocked.
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
        Forests are Opaque terrain, Rough terrain and Covering terrain(Soft
        cover) for models inside them.
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
      <h3>Impasse & Board Edge</h3>
      <p>Impasse and the Board edge are Impassible and Opaque terrain.</p>
      <h3>Mud</h3>
      <p>Mud is Rough terrain.</p>
      <h3>Ruins</h3>
      <p>
        Ruins are Rough terrain and Covering terrain(Hard cover) for models
        inside and behind it.
      </p>
      <h3>Trenches</h3>
      <p>Trenches are Covering terrain(Hard cover) for models inside them.</p>
      <h4>Charging through Trenches</h4>
      <p>
        Charging models moving through a Trench during its charge move is
        considered a Disrupted Charge.
      </p>
      <h3>Walls</h3>
      <p>
        Walls are Covering terrain(Hard cover) to models behind and within 1" of
        them.
      </p>
      <h4>Charging over Walls</h4>
      <p>
        Charging models moving over a Wall during a charge move is considered a
        Disrupted Charge unless the charging model started its charging move
        within 1" of the Wall.
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
            <th>Vehicles</th>
            <th>Cover inside</th>
            <th>Cover behind</th>
            <th>LoS through</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Building</td>
            <td>Halved</td>
            <td>Blocked</td>
            <td>Hard</td>
            <td>Hard</td>
            <td>Blocked</td>
          </tr>
          <tr>
            <td>Forest</td>
            <td>Halved</td>
            <td>Dangerous(4+)</td>
            <td>Soft</td>
            <td>Hard</td>
            <td>Blocked</td>
          </tr>
          <tr>
            <td>Field</td>
            <td></td>
            <td></td>
            <td>Soft</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Hill</td>
            <td></td>
            <td></td>
            <td></td>
            <td>Hard</td>
            <td>Blocked</td>
          </tr>
          <tr>
            <td>Hedge</td>
            <td></td>
            <td></td>
            <td></td>
            <td>Soft</td>
            <td></td>
          </tr>
          <tr>
            <td>Impasse</td>
            <td>Blocked</td>
            <td>Blocked</td>
            <td></td>
            <td></td>
            <td>Blocked</td>
          </tr>
          <tr>
            <td>Mud</td>
            <td>Halved</td>
            <td>Dangerous(4+)</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Ruin</td>
            <td>Halved</td>
            <td>Dangerous(5+)</td>
            <td>Hard</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Trench</td>
            <td></td>
            <td>Dangerous(4+)</td>
            <td>Hard</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Wall</td>
            <td></td>
            <td>Dangerous(4+)</td>
            <td></td>
            <td>Hard</td>
            <td></td>
          </tr>
          <tr>
            <td>Water</td>
            <td>Blocked</td>
            <td>Blocked</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
