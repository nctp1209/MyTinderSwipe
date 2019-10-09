import { call, put } from "redux-saga/effects";
import { path } from "ramda";
import PeopleActions from "../Redux/PeopleRedux";

export function* getPeopleRequest(api, action) {
  const response = yield call(api.getPeople);
  console.log("response", response);
  if (response.ok) {
    const newUser = path(["data", "results"], response);
    yield put(PeopleActions.getPeopleSuccess(newUser));
  } else {
    yield put(PeopleActions.getPeopleFailure());
  }
}
