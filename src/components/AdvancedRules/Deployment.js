import deployment from '../../graphics/deployment.svg';

function Deployment() {
  return (
    <>
      <h1>Deployment</h1>
      <hr />
      <h2>Deployment Zones</h2>
      <p>
        A player's deployment zone stretches along their long table edge and 6" straight out.
      </p>
      <h2>Deploying Units</h2>
      <p>
        Put all of both players Order dice into the Dice bag. Randomly draw an
        Order die, the player whose die was drawn deploys one of his units.
        Continue drawing dice and deploying units until the Dice bag is empty. A
        player may choose to discard a drawn die and not deploy a unit.
      </p>
      <p>
        A unit is Deployed by placing it in a legal position fully within ones
        Deployment Zone (i.e. at least 18" away from the Center-line). The
        Deployment Zone extends 6" from the players chosen long board edge.
      </p>
      <h3>Not enough space</h3>
      <p>
        If a unit cannot be deployed into a legal position then it cannot
        deploy.
      </p>
      <h2>Reserves</h2>
      <p>
        Any unit not deployed during Deploying Units are kept in 'reserve'.
        Before the start of turn 2 'reserves' are deployed the same way as the
        initial wave was. Any unit still not deployed after this are considered
        destroyed.
      </p>
      <div className="wrapper-battlefield-example">
        <img
          src={deployment}
          alt="deployment-diagram"
          className="battlefield-example"
        />
      </div>
    </>
  );
}
export default Deployment;
