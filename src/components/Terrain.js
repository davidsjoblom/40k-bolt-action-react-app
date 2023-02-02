function Terrain() {
  return (
    <>
      <h1>Terrain</h1>
      <hr />
      <h2>Terrain Types</h2>
      <h3>Rough Terrain</h3>
      <p>Movement through Rough terrain counts as double.</p>
      <h3>Covering Terrain (Soft/Hard cover)</h3>
      <p>
        Shooting at models in/or behind Covering terrain suffer penalties to
        hit. The penalty depends on whether its Soft or Hard cover where Soft
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
      <h3>Shallow Water</h3>
      Shallow water is Rough terrain.
      <h3>Deep Water</h3>
      <p>Deep water is Impassible terrain.</p>
      <h3>Hills</h3>
      <p>Hills are Opaque and Elevated terrain.</p>
      <h3>Walls</h3>
      <h3>Board Edge</h3>
    </>
  );
}
export default Terrain;
