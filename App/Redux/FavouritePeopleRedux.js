import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getFavouritePeopleRequest: null,
  getFavouritePeopleSuccess: ["listFavouritePeople"],
  getFavouritePeopleFailure: null,

  addFavouritePeopleRequest: ["user"],
  addFavouritePeopleSuccess: null,
  addFavouritePeopleFailure: null
});

export const FavouritePeopleTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  processing: false,
  addProcessing: false,
  listFavouritePeople: []
});

/* ------------- Reducers ------------- */

export const getFavouritePeopleRequest = state => {
  return state.merge({ processing: true });
};

export const getFavouritePeopleSuccess = (state, { listFavouritePeople }) => {
  return state.merge({ processing: false, listFavouritePeople });
};

export const getFavouritePeopleFailure = state => {
  return state.merge({ processing: false });
};

export const addFavouritePeopleRequest = state => {
  return state.merge({ addProcessing: true });
};

export const addFavouritePeopleSuccess = (state, { listFavouritePeople }) => {
  return state.merge({ addProcessing: false, listFavouritePeople });
};

export const addFavouritePeopleFailure = state => {
  return state.merge({ addProcessing: false, listFavouritePeople: [] });
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_FAVOURITE_PEOPLE_REQUEST]: getFavouritePeopleRequest,
  [Types.GET_FAVOURITE_PEOPLE_SUCCESS]: getFavouritePeopleSuccess,
  [Types.GET_FAVOURITE_PEOPLE_FAILURE]: getFavouritePeopleFailure,

  [Types.ADD_FAVOURITE_PEOPLE_REQUEST]: addFavouritePeopleRequest,
  [Types.ADD_FAVOURITE_PEOPLE_SUCCESS]: addFavouritePeopleSuccess,
  [Types.ADD_FAVOURITE_PEOPLE_FAILURE]: addFavouritePeopleFailure
});
