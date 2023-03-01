function SpecialRuleItem({ specialRule }) {
  return (
    <>
      <tr>
        <td>{specialRule.name}</td>
        <td>{specialRule.description}</td>
      </tr>
    </>
  );
}
export default SpecialRuleItem;
