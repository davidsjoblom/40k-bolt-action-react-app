import WeaponItem from './WeaponItem';
import smallArms from './smallArms.json';
import support from './support.json';
import machineGuns from './machineGuns.json';
import autocannons from './autocannons.json';
import ATguns from './ATguns.json';
import mortars from './mortars.json';
import howitzers from './howitzers.json';

const Weapons = function () {
  return (
    <>
      <h1>Weapons</h1>
      <hr />
      <h2>Weapon list</h2>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Range</th>
            <th>Shots</th>
            <th>Pen</th>
            <th>Special Rules</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Small Arms</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          {smallArms.map(weapon => (
            <WeaponItem weapon={weapon} key={weapon.name.toString()} />
          ))}
          <tr>
            <th>Support</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          {support.map(weapon => (
            <WeaponItem weapon={weapon} key={weapon.name.toString()} />
          ))}
          <tr>
            <th>Machine Guns</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          {machineGuns.map(weapon => (
            <WeaponItem weapon={weapon} key={weapon.name.toString()} />
          ))}
          <tr>
            <th>Autocannons</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          {autocannons.map(weapon => (
            <WeaponItem weapon={weapon} key={weapon.name.toString()} />
          ))}
          <tr>
            <th>Anti-tank Guns</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          {ATguns.map(weapon => (
            <WeaponItem weapon={weapon} key={weapon.name.toString()} />
          ))}
          <tr>
            <th>Mortars</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          {mortars.map(weapon => (
            <WeaponItem weapon={weapon} key={weapon.name.toString()} />
          ))}
          <tr>
            <th>Howitzers</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          {howitzers.map(weapon => (
            <WeaponItem weapon={weapon} key={weapon.name.toString()} />
          ))}
        </tbody>
      </table>
      <h2>Blast weapons</h2>
      <h3>Blast Hit multiplier</h3>
      <p>
        Hits from Blast weapons are multiplied by its Hit multiplier depending
        on its Size. A single Blast hit cannot cause more hits than there are
        models in the target unit. Blast hits are resolved with the Blast Pen
        instead of the Pen of the weapon that fired the Blast.
      </p>
      <h3>Vehicles hit by blast</h3>
      <table>
        <thead>
          <tr>
            <th>Size</th>
            <th>Pen</th>
            <th>Hit multiplier</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Small</td>
            <td>-</td>
            <td>D3</td>
          </tr>
          <tr>
            <td>Medium</td>
            <td>1</td>
            <td>D3+1</td>
          </tr>
          <tr>
            <td>Large</td>
            <td>2</td>
            <td>2D3</td>
          </tr>
          <tr>
            <td>Huge</td>
            <td>3</td>
            <td>2D3+1</td>
          </tr>
        </tbody>
      </table>
      <h2>'or'</h2>
      <p>
        Some weapons have several firing modes. Rules separated by 'or' are only
        applied one at a time, chosen by the controlling player when choosing
        target for a shooting attack.
      </p>
    </>
  );
};
export default Weapons;
