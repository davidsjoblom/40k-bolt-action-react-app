import WeaponItem from './WeaponItem';
import smallArms from './smallArms.json';
import support from './support.json';
import machineGuns from './machineGuns.json';
import autocannons from './autocannons.json';
import ATguns from './ATguns.json';
import mortars from './mortars.json';
import howitzers from './howitzers.json';
import DEW from './DEW.json';

const Weapons = function () {
  return (
    <>
      <h1>Weapons</h1>
      <hr />
      <h2>Weapon list</h2>
      <table>
        <thead>
          <tr>
            <th className="no-border-table-corner"></th>
            <th>Rng</th>
            <th>Sht</th>
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
          <tr>
            <th>Directed Energy</th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          {DEW.map(weapon => (
            <WeaponItem weapon={weapon} key={weapon.name.toString()} />
          ))}
        </tbody>
      </table>
      <h2>Blast weapons</h2>
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
      <h3>Blast Hit multiplier</h3>
      <p>
        Hits from Blast weapons are multiplied by its Hit multiplier depending
        on its Size. A single Blast hit cannot cause more hits than there are
        models in the target unit. Blast hits are resolved with the Blast Pen
        instead of the Pen of the weapon that fired the Blast.
      </p>
      <h3>Blast Partial hits</h3>
      <p>
        Missed to hit rolls from Blast weapons may be rerolled. If this second
        roll is a hit it causes no damage but may be the hit selected for
        placing Pin markers.
      </p>
      <h3>Blast vs Downed targets</h3>
      <p>
        Blast weapons ignore the to hit penalty for targeting units with Down
        orders but the number of hits per Blast hit is halved rounding up.
      </p>
      <h2>Indirect(X)</h2>
      <p>
        Indirect weapons may shoot through friendly units, ignore all to hit
        penalties and always hit on a 6+.
      </p>
      <h3>Zeroing</h3>
      <p>
        Indirect weapons targeting a unit that it had missed or partially hit
        during its previous Order gains a cumulative +1 to hit modifier for each
        miss or partial hit in a row. Indirect weapons targeting a unit that it
        has previously hit gains +5 to hit instead. A targeted unit may 'shake'
        the zero by moving at least 6" away from its previous location,
        resetting all the Indirect weapons modifiers.
      </p>
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
