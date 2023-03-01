import squareBaseDiagram from '../../graphics/square-base-diagram.svg';

function SquareBases() {
  return (
    <>
      <h1>Square Bases</h1>
      <hr />
      <h2>Square Bases</h2>
      <p>
        While most models are mounted on round bases some, notably vehicles and
        heavy weapon teams, are mounted on square bases.
      </p>
      <p>
        Square bases differ to round ones in that they have Facings and Arcs.
      </p>
      <p>
        Some square bases are technically rectangular but they are treated the
        same and are all referred to as square bases for rules purposes.
      </p>
      <h2>Facings</h2>
      <p>
        There are 4 Facings, Front, 2 Flank and Rear facing, each corresponding
        to a side of a square base. The Rear facing is directly opposite to the
        Front facing and the Flank facing makes up the remaining sides.
      </p>
      <h3>Square Base Size Interpretation</h3>
      <p>
        The first value of a models Base Size characteristic is the length of
        the Front and Rear facings and the second is the length of the Flank
        facings, e.g. a Base Size of 50x100mm would have a Front and Rear facing
        being 50mm long and 2 Flank facings being 100mm long.
      </p>
      <p>
        It should be made obvious which Facing is which on the model or its
        base.
      </p>
      <h2>Arcs</h2>
      <p>
        Square bases has 4 Arcs; Front, 2 Flank and Rear Arc. Arcs are
        determined by extending a straight line from the corners of the square
        base at a 135 degree angle.
      </p>
      <h2>Square Base Diagram</h2>
      <p>An example diagram of a 50x100mm Base Size.</p>
      <img
        src={squareBaseDiagram}
        alt="square-base-diagram.svg"
        className="square-base-diagram"
      />
    </>
  );
}
export default SquareBases;
