import * as actions from './actions';
import { generateCmdsFromActions } from 'effects-as-data-redux';
import { cmds } from 'effects-as-data-universal';

const reduxCmds = generateCmdsFromActions(actions);

function httpGet(url, headers, options = {}) {
  return cmds.httpGet(
    url,
    headers,
    Object.assign({ credentials: 'same-origin' }, options)
  );
}

// combine and export universal cmds and the redux cmds generated above
export default {
  state: reduxCmds,
  ...cmds,
  httpGet,
};
