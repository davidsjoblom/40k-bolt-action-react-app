function Transports() {
  return (
    <>
      <h1>Transports</h1>
      <hr />
      <h2>Transport(X)</h2>
      <p>
        Some units have the ability to transport friendly units. No more than X
        models may be transported at the same time.
      </p>
      <h2>Entering a Transport</h2>
      <p>
        A unit that make base contact with a Transport during an Advance move
        may enter it as long as there is sufficient space for all the units
        models in the Transport. Remove the unit from the board and mark the
        Transport as transporting it.
      </p>
      <p>
        A unit entering a Transport may not shoot during that Advance Order.
      </p>
      <h2>Exiting a Transport</h2>
      <p>
        A unit inside a Transport may exit it by being issued an Advance Order.
        Place each model in base contact with the Transport one at a time and
        move them up to their Move stat as normal.
      </p>
      <h2>Transports issued Run orders</h2>
      <p>Transports issued Run orders may not be entered or exited.</p>
      <h2>Deploying inside a Transport</h2>
      <p>
        A unit may choose to deploy inside a Transport that is already on the
        board, fully within its Deployment Zone and has sufficient space.
      </p>
      <h2>Charging out of a Transport</h2>
      <p>
        A unit may not exit a Transport by a Run Order and may not declare
        Charges.
      </p>
      <h2>Shooting out of a Transport</h2>
      <p>
        Models inside a Transport without Open-topped may not shoot. A number of
        models, up to half (rounded up) of an Open-topped Transports maximum
        transport capacity, may shoot out of a transport per turn. Models
        shooting out of an Open-topped Transport may draw Line of Sight from any
        point of the Transports base and always counts as Moving and Shooting.
      </p>
      <h2>Units in Destroyed Transports</h2>
      <p>
        Units inside a Transport that is destroyed immediately takes a hit per
        model with Pen '-'. The unit is then placed on the board with all its
        models withing 1" of the wreck or as close as possible in a legal
        formation and may not be issued any Order except for Down for the rest
        of the turn.
      </p>
      <h2>Units in Stunned Transports</h2>
      <p>
        Units inside a Transport that suffers the Stunned Penetration result may
        not exit or shoot out of the Transport this turn.
      </p>
      <h2>Units in Transports taking Pins</h2>
      <p>
        Whenever a Transport takes Pin markers all units it is transporting take
        the same number of Pins.
      </p>
      <h2>What models may be Transported</h2>
      <p>Mounted, Cumbersome and/or Tall models may not be Transported.</p>
    </>
  );
}
export default Transports;
