function WeaponItem({ weapon }) {
  return (
    <>
      <tr>
        <td>{weapon.name}</td>
        <td className="table-cell-center-text">{weapon.range}"</td>
        <td className="table-cell-center-text">{weapon.shots}</td>
        <td className="table-cell-center-text">{weapon.penetration}</td>
        <td>{weapon.specialRules}</td>
      </tr>
    </>
  );
}
export default WeaponItem;
