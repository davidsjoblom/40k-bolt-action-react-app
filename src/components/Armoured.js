function Armoured() {
  return (
    <>
      <h1>Armoured</h1>
      <hr />
      <h2>Armoured model bases</h2>
      <p>All Armoured models have Square bases.</p>
      <h2>Shooting at Armoured models</h2>
      <h3>Flank shot</h3>
      <p>
        Models shooting at an Armoured model that has its center in either of
        the Armoured models Flank Arcs gain +1 Penetration.
      </p>
      <h3>Rear shot</h3>
      <p>
        Models shooting at an Armoured model that has its center in the Armoured
        models Rear Arc gain +2 Penetration.
      </p>
      <h3>Flank and Rear shooting with '-' Pen weapons</h3>
      <p>
        Weapons with '-' Penetration do not benefit from additional Pen for
        being in the Flank or Rear Arcs.
      </p>
      <h2>Armoured Shock</h2>
      <p>
        Armoured units issued a Run order may 'run over' enemy units in the way
        as long as it has enough move and space to fully clear all enemy models
        on the other side.
      </p>
      <p>
        Any enemy unit 'run over' suffers a number of hits equal to the number
        of models the Armoured unit passed through during its move. These hits
        are resolved with a Pen value equal to the Armoured units Toughness
        minus 7.
      </p>
    </>
  );
}
export default Armoured;
