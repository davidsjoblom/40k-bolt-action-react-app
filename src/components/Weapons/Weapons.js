import lightweapons from './lightweapons.json';
import heavyweapons from './heavyweapons.json';
import WeaponItem from './WeaponItem';

const Weapons = function () {
  return (
    <>
      <h1>Weapons</h1>
      <hr />
      <table>
        <thead>
          <tr>
            <th>Light Weapons</th>
            <th>Range</th>
            <th>Shots</th>
            <th>Pen</th>
            <th>Special Rules</th>
          </tr>
        </thead>
        <tbody>
          {lightweapons.map(weapon => (
            <WeaponItem weapon={weapon} />
          ))}
        </tbody>
      </table>
      <p></p>
      <table>
        <thead>
          <tr>
            <th>Heavy Weapons</th>
            <th>Range</th>
            <th>Shots</th>
            <th>Pen</th>
            <th>Special Rules</th>
          </tr>
        </thead>
        <tbody>
          {heavyweapons.map(weapon => (
            <WeaponItem weapon={weapon} />
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Weapons;
