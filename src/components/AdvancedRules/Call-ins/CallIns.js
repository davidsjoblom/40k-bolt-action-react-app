import CallInItem from './CallInItem';
import callIns from './call-ins.json';

function CallIns() {
  return (
    <>
      <h1>Call-ins</h1>
      <hr />
      <h2>Call-in markers</h2>
      <p>
        Some Call-ins are resolved with markers. Call-in markers are placed at
        the Beginning of turn within Line of Sight of the model with the
        Call-in. At the beginning of subsequent turns if the markers are still
        on the board they may be moved up 12" to a new spot within Line of Sight
        of the model with the Call-in.
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
          {callIns.map(callIn => (
            <CallInItem callIn={callIn} key={callIn.name} />
          ))}
        </tbody>
      </table>
    </>
  );
}
export default CallIns;
