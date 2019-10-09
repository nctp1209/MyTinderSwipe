import { call, put } from "redux-saga/effects";
import FavouritePeopleActions from "../Redux/FavouritePeopleRedux";
import {
  addNewFavouritePeople,
  getListFavouritePeople
} from "../Storage/Services/FavouritePeopleService";

export function* getFavouritePeopleRequest(action) {
  const listUser = yield call(getListFavouritePeople);
  if (listUser) {
    yield put(FavouritePeopleActions.getFavouritePeopleSuccess(listUser));
  } else {
    yield put(FavouritePeopleActions.getFavouritePeopleFailure());
  }
}

export function* addFavouritePeopleRequest(action) {
  const { user } = action;
  if (user) {
    const result = yield call(addNewFavouritePeople, user);
    if (result) {
      yield put(FavouritePeopleActions.addFavouritePeopleSuccess());
    } else {
      yield put(FavouritePeopleActions.addFavouritePeopleFailure());
    }
  }
}
