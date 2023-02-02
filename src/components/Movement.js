const Movement = function () {
  return (
    <>
      <h1>Movement</h1>
      <hr />
      <h2>Moving Units</h2>
      <p>
        A unit is moved by moving each model in the unit one at a time up to a
        certain distance depending on the order being resolved. Models may be
        moved in any direction.
      </p>
      <h2>Moving Through Friendly Models</h2>
      <p>
        A model that is being moved may move through any other friendly models
        in its unit as well as models belonging to other friendly units.
      </p>
      <h2>Moving Through Enemy Models</h2>
      <p>Models may not move through enemy models.</p>
      <h2>Moving Through Terrain</h2>
      <p>Some terrain affect movement, see Terrain chapter for details.</p>
    </>
  );
};
export default Movement;
