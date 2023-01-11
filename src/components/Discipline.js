const Discipline = function () {
  return (
    <>
      <h1>Discipline</h1>
      <h2>Discipline Test</h2>
      <p>
        A unit preforms a Discipline test by rolling 2D6, adding the results
        together and if the sum is equal or less to its Discipline
        characteristic the test is passed.
      </p>
      <h2>Pin Markers</h2>
      <p>
        Units take Pins when fired upon. Pins markers are placed next to a unit
        to show its current number of Pins. A unit with at least one Pin needs
        to take a Discipline test when recieving an order. Units taking
        Discipline tests suffers a -1 penalty per Pin it has to its Discipline.
        Units preform Shooting actions suffer a -1 penalty to hit rolls per Pin.
      </p>
      <h2>Order Test</h2>
      <p>
        When a unit with Pins is issued an order it has to pass a Discipline
        test or automatically be issued a Down order instead. A unit that passes
        a Discipline test when recieving an order may remove a single Pin
        marker. A Down order does not require a Discipline test when issued but
        does not remove a Pin.
      </p>
      <h2>Routing Units</h2>
      <p>
        When the number of Pins on a unit equals or exceeds that units
        unmodified Discipline characteristic it is immediately considered
        destroyed and removed.
      </p>
      <h2>Squad Leaders</h2>
      <p>
        Units with Squad leaders that lose them suffers a -1 penalty to their
        Discipline characteristic for the rest of the game.
      </p>
    </>
  );
};
export default Discipline;
