import { handlers } from 'effects-as-data-universal';
import { buildReduxHandlers } from 'effects-as-data-redux';

// export a function that takes a Redux store and builds all the handers
export default store => ({
  ...buildReduxHandlers(store),
  ...handlers,
});
