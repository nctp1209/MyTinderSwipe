import { put, call } from "redux-saga/effects";
import { path } from "ramda";

import APIResult from "../APIResult";
import { getPeopleRequest } from "../../App/Sagas/PeopleSagas";
import PeopleActions from "../../App/Redux/PeopleRedux";

const stepper = fn => mock => fn.next(mock).value;

test("first calls API", () => {
  const step = stepper(getPeopleRequest(APIResult));
  // 1: Call API Step and check
  expect(step()).toEqual(call(APIResult.getPeople));
});

test("api return success", () => {
  const response = APIResult.getPeople();
  const step = stepper(getPeopleRequest(APIResult));
  // 1: Call API Step
  step();
  // 2: Return success response && check response
  const stepResponse = step(response);
  const newUser = path(["data", "results"], response);
  expect(stepResponse).toEqual(put(PeopleActions.getPeopleSuccess(newUser)));
});

test("failure path", () => {
  const response = { ok: false };
  const step = stepper(getPeopleRequest(APIResult));
  // 1: Call API Step
  step();
  // 2: Return failed response and check the flow
  const stepResponse = step(response);
  expect(stepResponse).toEqual(put(PeopleActions.getPeopleFailure()));
});
