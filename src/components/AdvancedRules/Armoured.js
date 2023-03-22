function Armoured() {
  return (
    <>
      <h1>Armoured</h1>
      <hr />
      <h2>Shooting at Armoured Vehicles</h2>
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
      <h2>Attacking Armoured in Close Combat</h2>
      <p>
        Attacks against Armoured model in Close Combat gain an additional +1 to
        wound.
      </p>
      <h2>Glancing hits</h2>
      <p>
        To wound rolls against Armoured that equal the target number needed to
        penetrate counts as a Glancing hit instead of a normal penetration.
        These wounds suffer a -3 when rolling on the Vehicle Penetration Table.
      </p>
      <h2>Armoured Advance</h2>
      <p>
        Armoured models may move through enemy non-Vehicle models as long as
        long as it has enough move to clear them completely.
      </p>
    </>
  );
}
export default Armoured;
