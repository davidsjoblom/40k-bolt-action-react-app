function WeaponItem({ weapon }) {
  return (
    <>
      <tr>
        <td>{weapon.name}</td>
        <td>{weapon.range}"</td>
        <td>{weapon.shots}</td>
        <td>{weapon.penetration}</td>
        <td>{weapon.specialRules}</td>
      </tr>
    </>
  );
}
export default WeaponItem;
