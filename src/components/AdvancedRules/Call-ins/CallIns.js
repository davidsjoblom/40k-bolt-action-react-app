import CallInItem from "./CallInItem";
import callIns from "./call-ins.json";

function CallIns() {
  return (
    <>
      <h1>Call-ins</h1>
      <hr />
      <h2>Call-ins</h2>
      <p>
        Army Generals have the ability to call in artillery and air support or
        to inspire their troops. These abilities are called Call-ins. A Call-in
        can be used once per game only and if the General model is killed before
        he uses his Call-in it is lost.
      </p>
      <p>
        Call-ins are used at the beginning of the turn. If both players has available Call-ins then each rolls a die and the winner has to decide first whether to use his Call-in or not.
      </p>
      <h2>Call-in markers</h2>
      <p>
        Some Call-ins are resolved with markers. Call-in markers are placed
        within Line of Sight of the model with the Call-in. At the beginning of
        subsequent turns if the markers are still on the board they may be moved
        up 12" to a new spot within Line of Sight of the model with the Call-in.
      </p>
      <h2>Materializing Call-ins</h2>
      <p>
        Most Call-ins need to succeed a roll to actually materialize. Rolls to
        see if a Call-in materializes are done at the end of each turn while the
        Call-in markers are still on the board. When it does materialize it is
        resolved and then all of its Call-in markers are removed.
      </p>
      <table>
        <thead>
          <tr>
            <th>Call-in</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {callIns.map((callIn) => (
            <CallInItem callIn={callIn} key={callIn.name} />
          ))}
        </tbody>
      </table>
    </>
  );
}
export default CallIns;
