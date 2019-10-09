import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import configureStore from "./CreateStore";
import rootSaga from "../Sagas/";

import PeopleRedux from "./PeopleRedux";

/* ------------- Assemble The Reducers ------------- */
export const reducers = combineReducers({
  nav: require("./NavigationRedux").reducer,
  people: require("./PeopleRedux").reducer,
  favouritePeople: require("./FavouritePeopleRedux").reducer
});

export default () => {
  let finalReducers = reducers;
  let { store } = configureStore(finalReducers, rootSaga);

  return store;
};
