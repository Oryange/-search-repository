import { REQUEST_VALUES, RECEIVE_VALUES, REQUEST_REPOS,
  RECEIVE_REPOS, REQUEST_VALUESUSER, RECEIVE_VALUESUSER, ADD_FAVORITES, REMOVE_FAVORITES } from '../actions/index';
const INITIAL_STATE = {
  values: [],
  repos: [],
  valuesUser: [],
  isFetching: false,
  fetching: false,
  favorites: [],
};

export default function reducerUser(state = INITIAL_STATE, action) {
  switch (action.type) {
  case REQUEST_VALUES:
    return ({
      ...state,
      isFetching: true,
    });
  case RECEIVE_VALUES:
    return ({
      ...state,
      isFetching: false,
      values: action.values,
    });
    case REQUEST_REPOS:
      return ({
        ...state,
        fetching: true,
      });
    case RECEIVE_REPOS:
      return ({
        ...state,
        fetching: false,
        repos: action.repos,
      });
      case REQUEST_VALUESUSER:
        return ({
          ...state,
          fetching: true,
        });
      case RECEIVE_VALUESUSER:
        return ({
          ...state,
          fetching: false,
          valuesUser: action.valuesUser,
        });
      case ADD_FAVORITES:
        return ({
          ...state,
          favorites: [...state.favorites.filter((e) => e.login !== action.favorite.login), action.favorite ],
        })
      case REMOVE_FAVORITES:
        return({
          ...state,
          favorites:[...state.favorites.filter((e) => e.login !== action.remove.login)]
        })
      default:
    return state;
  }
}
