import cmds from './cmds';

export function* getUser(id = '') {
  const user = yield cmds.httpGet(`https://api.github.com/users/tylerbuchea`);
  yield cmds.state.setUser(user);
}
