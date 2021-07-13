export const REQUEST_VALUES = 'REQUEST_VALUES';
export const RECEIVE_VALUES = 'RECEIVE_VALUES';
export const INPUT_USER = 'INPUT_USER';
export const REQUEST_REPOS = 'REQUEST_REPOS';
export const RECEIVE_REPOS = 'RECEIVE_REPOS';
export const REQUEST_VALUESUSER = 'REQUEST_VALUESUSER';
export const RECEIVE_VALUESUSER = 'RECEIVE_VALUESUSER';
export const ADD_FAVORITES = 'ADD_FAVORITES';
export const REMOVE_FAVORITES ='REMOVE_FAVORITES';

const requestValues = () => ({
  type: REQUEST_VALUES,
});

const receiveValues = (values) => ({
  type: RECEIVE_VALUES,
  values,
});


export function fetchValues(myUser) {
  const endpoint = `https://api.github.com/search/users?q=${myUser}`;
  return (dispatch) => {
    dispatch(requestValues());
    return fetch(endpoint)
    .then((response) => response.json())
    .then((obj) => dispatch(receiveValues(obj)));
  };
}

const requestValuesUser = () => ({
  type: REQUEST_VALUESUSER,
});

const receiveValuesUser = (valuesUser) => ({
  type: RECEIVE_VALUESUSER,
  valuesUser,
});

export function fetchValueUser(myUser) {
  const endpoint = `https://api.github.com/users/${myUser}`;
  return (dispatch) => {
    dispatch(requestValuesUser());
    return fetch(endpoint)
      .then((response) => response.json())
      .then((obj) => dispatch(receiveValuesUser(obj)));
  };
}

const requestRepos = () => ({
  type: REQUEST_REPOS,
});

const receiveRepos = (repos) => ({
  type: RECEIVE_REPOS,
  repos,
});

export function fetchRepo(user) {
  const endpoint = `https://api.github.com/users/${user}/repos`;
  return (dispatch) => {
    dispatch(requestRepos());
    return fetch(endpoint)
      .then((response) => response.json())
      .then((obj) => dispatch(receiveRepos(obj)));
  };
}

export const favoriteUser = (favorite) => ({
  type: ADD_FAVORITES,
  favorite,
});

export const removeFavoriteUser = (remove) => ({
  type: REMOVE_FAVORITES,
  remove,
});
