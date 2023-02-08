const Movement = function () {
  return (
    <>
      <h1>Movement</h1>
      <hr />
      <h2>Moving Units</h2>
      <p>
        A unit is moved by moving each of its models one at a time in any
        direction up to a certain distance depending on the units Movement
        characteristic and Order being resolved. A model may move in a straight
        line for the whole move or change direction at any point and move in an
        new direction.
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
      <h2>Unit Cohesion</h2>
      <p>
        A unit consisting of more than one model has to end a move in either a
        clump or line formation with all models within 1" of at least one other
        friendly model.
      </p>
      <h2>Unit Spacing</h2>
      <p>
        A model may never end a move within 1" of an enemy model unless
        Charging.
      </p>
    </>
  );
};
export default Movement;
