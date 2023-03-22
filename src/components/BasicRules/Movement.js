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
        A unit has to end a move Cohesive (see General Principles Unit
        Cohesion). If a unit is unable to achieve Cohesion it must move as close
        as possible to fulfilling it.
      </p>
      <h2>Unit Spacing</h2>
      <p>
        A model may never end a move within 1" of an enemy model unless
        Charging. If unable to move outside of 1" it must move as close as
        possible to achieve this.
      </p>
    </>
  );
};
export default Movement;
