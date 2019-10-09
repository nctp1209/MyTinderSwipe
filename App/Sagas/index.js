import { takeLatest, all } from "redux-saga/effects";
import Api from "../Services/Api";

/* ------------- Types ------------- */

import { PeopleTypes } from "../Redux/PeopleRedux";
import { FavouritePeopleTypes } from "../Redux/FavouritePeopleRedux";

/* ------------- Sagas ------------- */

import { getPeopleRequest } from "./PeopleSagas";
import {
  getFavouritePeopleRequest,
  addFavouritePeopleRequest
} from "./FavouritePeopleSagas";

/* ------------- API ------------- */
const api = Api.create();

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    // Sagas for People Actions
    takeLatest(PeopleTypes.GET_PEOPLE_REQUEST, getPeopleRequest, api),

    // Sagas for Favourite People Actions
    takeLatest(
      FavouritePeopleTypes.GET_FAVOURITE_PEOPLE_REQUEST,
      getFavouritePeopleRequest
    ),

    takeLatest(
      FavouritePeopleTypes.ADD_FAVOURITE_PEOPLE_REQUEST,
      addFavouritePeopleRequest
    )
  ]);
}
