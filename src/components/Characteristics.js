function Characteristics() {
  return (
    <>
      <h1>Characteristics</h1>
      <h2>Movement Speed</h2>
      <p>
        How fast a model moves. A number of 0 or more and typically written with
        the inch unit symbol (") after it.
      </p>
      <h2>Toughness</h2>
      <p>
        How difficult a model is to take out of action. Written as a number
        followed by a '+' symbol. Higher numbers means tougher models.
      </p>
      <h2>Discipline</h2>
      <p>
        How motivated and/or professional a model is when it comes to carrying
        out orders and staying in the fight despite danger. Written as a plain
        number usually around 6 to 10. Higher number means a more disciplined
        model.
      </p>
      <h2>Points Cost</h2>
      <p>
        How many points a model costs to include in an army. Higher Cost
        generally means a more capable model.
      </p>
      <h2 className="centered-h2">Example Statline</h2>
      <div className="example-stat-table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Movement</th>
              <th>Toughness</th>
              <th>Discipline</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Rifleman</td>
              <td className="stat-table-cell">6"</td>
              <td className="stat-table-cell">4+</td>
              <td className="stat-table-cell">9</td>
              <td>10pts</td>
            </tr>
            <tr>
              <td colSpan={5} className="statline-special-rules-cell">
                Rifle
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
export default Characteristics;
