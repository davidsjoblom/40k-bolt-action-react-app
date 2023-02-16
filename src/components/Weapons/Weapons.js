import lightWeapons from './lightWeapons.json';
import heavyWeapons from './heavyWeapons.json';
import WeaponItem from './WeaponItem';

const Weapons = function () {
  return (
    <>
      <h1>Weapons</h1>
      <hr />
      <h2>Light Weapons</h2>
      <p>Light weapons are weapons that can be carried and operated by infantrymen and are either the main armament of a squad or integrated support weapons.</p>
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
          {lightWeapons.map(weapon => (
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
          {heavyWeapons.map(weapon => (
            <WeaponItem weapon={weapon} />
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Weapons;
