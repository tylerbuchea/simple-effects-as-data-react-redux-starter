import { testFn, args } from 'effects-as-data/test';
import cmds from 'effects-as-data-universal';
import {} from './functions';

const testGetUser = testFn(getUser);

describe('getUser()', () => {
  it(
    'should get a user return user name',
    testGetUser(() => {
      const user = { name: 'C-3P0' };
      return args(2)
        .yieldCmd(cmds.httpGet(`https://swapi.co/api/people/2`))
        .yieldReturns(user)
        .returns(user.name);
    })
  );
});
