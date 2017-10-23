import cmds from './cmds';

export function* getUser(username = 'tylerbuchea') {
  const user = yield cmds.httpGet(`https://api.github.com/users/${username}`);
  yield cmds.state.setUser(user);
}
