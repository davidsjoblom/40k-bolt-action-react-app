const Discipline = function () {
  return (
    <>
      <h1>Discipline</h1>
      <h2>Pin Markers</h2>
      <p>
        Units take Pins when fired upon. Pins markers are placed next to a unit
        to show its current number of Pins. A unit with at least one Pin needs
        to take a Discipline test when recieving an order. Units taking
        Discipline tests suffers a -1 penalty per Pin it has to its Discipline.
        Units preform Shooting actions suffer a -1 penalty to hit rolls per Pin.
      </p>
      <h2>Discipline Tests</h2>
      <h2>Routed Units</h2>
      <p>
        When the number of Pins on a unit equals or exceeds that units
        unmodified Discipline it is immediately considered destroyed and
        removed.
      </p>
    </>
  );
};
export default Discipline;
