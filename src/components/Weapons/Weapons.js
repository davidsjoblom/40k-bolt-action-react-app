import lightWeapons from './lightWeapons.json';
import heavyWeapons from './heavyWeapons.json';
import WeaponItem from './WeaponItem';

const Weapons = function () {
  return (
    <>
      <h1>Weapons</h1>
      <hr />
      <table>
        <thead>
          <tr>
            <th>Weapons</th>
            <th>Range</th>
            <th>Shots</th>
            <th>Pen</th>
            <th>Special Rules</th>
          </tr>
        </thead>
        <tbody>
          {lightWeapons.map(weapon => (
            <WeaponItem weapon={weapon} key={weapon.name.toString()} />
          ))}
          {heavyWeapons.map(weapon => (
            <WeaponItem weapon={weapon} key={weapon.name.toString()} />
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Weapons;
