import { createReducer, createActions } from "reduxsauce";
import Immutable from "seamless-immutable";

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getPeopleRequest: null,
  getPeopleSuccess: ["newUser"],
  getPeopleFailure: null
});

export const PeopleTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  processing: false,
  currentPeople: null
});

/* ------------- Reducers ------------- */

export const getPeopleRequest = state => {
  return state.merge({ processing: true, currentPeople: null });
};

export const getPeopleSuccess = (state, { newUser }) => {
  return state.merge({ processing: false, currentPeople: newUser });
};

export const getPeopleFailure = state => {
  return state.merge({ processing: false, currentPeople: null });
};

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_PEOPLE_REQUEST]: getPeopleRequest,
  [Types.GET_PEOPLE_SUCCESS]: getPeopleSuccess,
  [Types.GET_PEOPLE_FAILURE]: getPeopleFailure
});
