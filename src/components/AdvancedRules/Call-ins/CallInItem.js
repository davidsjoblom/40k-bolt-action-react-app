function CallInItem({ callIn }) {
  return (
    <>
      <tr>
        <td>{callIn.name}</td>
        <td>{callIn.description}</td>
      </tr>
    </>
  );
}
export default CallInItem;
