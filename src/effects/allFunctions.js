import { buildFunctions } from 'effects-as-data/es5';
import { generateFunctionsFromActions } from 'effects-as-data-redux';
import buildHandlers from './handlers';
import * as functions from './functions';
import * as reduxActions from './actions';
import store from './store';

// It is not necessary to generate these functions but is convenient
// so that your application can talk to Redux indirectly through
// effects-as-data.  If your view only talks to effects-as-data,
// and effects-as-data talk to Redux, you'll have a clean unidirectional
// data-flow through the application.
const reduxFunctions = generateFunctionsFromActions(reduxActions);

// Combine functions from project and reduxFunctions generated above
const allFunctions = {
  ...functions,
  ...reduxFunctions,
};

const config = {
  onCommandComplete: console.log, // for telemetry
};

const handlers = buildHandlers(store);

export { allFunctions, config, handlers };

// This will export an object of promise return functions
// that have been generated from the effects-as-data functions
// represented by allFunctions
export default buildFunctions(config, handlers, allFunctions);
