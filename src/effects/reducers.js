export const user = (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER':
      return action.payload;
    case 'REMOVE_USER':
      return {};
    default:
      return state;
  }
};

export const selectedGame = (state = {}, action) => {
  switch (action.type) {
    case 'REVIEW_GAME':
      return {
        ...state,
        myRating: action.payload.rating,
        myReview: action.payload.review,
      };
    default:
  }
};

export const games = (state = {}, action) => {
  switch (action.type) {
    case 'SET_SEARCH_GAMES':
      return { ...state, search: [...action.payload] };
    case 'ADD_XR_GAMES':
      return { ...state, xr: [...action.payload] };
    case 'ADD_SEARCH_GAMES':
      return { ...state, search: [...(state.search || []), ...action.payload] };
    case 'ADD_TOP_GAMES':
      return { ...state, top: [...(state.top || []), ...action.payload] };
    case 'ADD_LATEST_GAMES':
      return { ...state, latest: [...(state.latest || []), ...action.payload] };
    case 'ADD_CHOICE_GAMES':
      return { ...state, choice: [...(state.choice || []), ...action.payload] };
    default:
      return state;
  }
};
