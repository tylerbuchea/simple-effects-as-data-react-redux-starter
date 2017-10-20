// const userActions = {
//   SET_USER: 'SET_USER',
// };

// const gameActions = {
//   SET_SEARCH_GAMES: 'SET_SEARCH_GAMES',
//   ADD_SEARCH_GAMES: 'ADD_SEARCH_GAMES',
//   ADD_TOP_GAMES: 'ADD_TOP_GAMES',
//   ADD_LATEST_GAMES: 'ADD_LATEST_GAMES',
//   ADD_CHOICE_GAMES: 'ADD_CHOICE_GAMES',
// };

// const actionTypes = {
//   ...userActions,
//   ...gameActions,
// };

// const actionCreators = Object.keys(actionTypes).map((key, val) => {})

export const setUser = payload => ({
  type: 'SET_USER',
  payload,
});

export const reviewGame = payload => ({
  type: 'REVIEW_GAME',
  payload,
});

export const setSearchGames = payload => ({
  type: 'SET_SEARCH_GAMES',
  payload,
});

export const addSearchGames = payload => ({
  type: 'ADD_SEARCH_GAMES',
  payload,
});

export const addXrGames = payload => ({
  type: 'ADD_XR_GAMES',
  payload,
});

export const addTopGames = payload => ({
  type: 'ADD_TOP_GAMES',
  payload,
});

export const addLatestGames = payload => ({
  type: 'ADD_LATEST_GAMES',
  payload,
});

export const addChoiceGames = payload => ({
  type: 'ADD_CHOICE_GAMES',
  payload,
});
