import { put, call } from "redux-saga/effects";
import { path } from "ramda";

import APIResult from "../APIResult";
import {
  getFavouritePeopleRequest,
  addFavouritePeopleRequest
} from "../../App/Sagas/FavouritePeopleSagas";
import {
  addNewFavouritePeople,
  getListFavouritePeople
} from "../../App/Storage/Services/FavouritePeopleService";
import FavouritePeopleActions from "../../App/Redux/FavouritePeopleRedux";

const stepper = fn => mock => fn.next(mock).value;

/*--------TEST GETTING LIST FAVOURITE PEOPLE ----------*/
test("First call to get list favourite people", () => {
  const step = stepper(getFavouritePeopleRequest());
  // 1: Call to get list
  expect(step()).toEqual(call(getListFavouritePeople));
});

test("Success to get list favourite people", () => {
  const step = stepper(getFavouritePeopleRequest());
  // 1: Call to get list
  step();
  // 2: Return success response && check response
  const listUser = getListFavouritePeople();
  const stepResponse = step(listUser);
  expect(stepResponse).toEqual(
    put(FavouritePeopleActions.getFavouritePeopleSuccess(listUser))
  );
});

test("Failure to get list favourite people", () => {
  const step = stepper(getFavouritePeopleRequest());
  // 1: Call API Step
  step();
  // 2: Return failed response and check the flow
  const stepResponse = step(null);
  expect(stepResponse).toEqual(
    put(FavouritePeopleActions.getFavouritePeopleFailure())
  );
});

/*--------ADD FAVOURITE PEOPLE ----------*/
const userData = {
  gender: "male",
  name: {
    title: "mr",
    first: "brennan",
    last: "powell"
  },
  location: {
    street: "4797 greenhaven ln",
    city: "altoona",
    state: "iawaii",
    zip: "77944"
  },
  email: "brennan.powell47@example.com",
  username: "tinymeercat81",
  password: "222222",
  dob: "174648911",
  phone: "(356)-283-6451",
  cell: "(295)-803-4645",
  picture: "http://api.randomuser.me/portraits/men/11.jpg"
};

test("First call to add favourite people", () => {
  const step = stepper(addFavouritePeopleRequest({ user: userData }));
  // 1: Call to add new people
  expect(step()).toEqual(call(addNewFavouritePeople, userData));
});

test("Success to add new people to list", () => {
  const step = stepper(addFavouritePeopleRequest({ user: userData }));
  // 1: Call to add new people
  step();
  // 2: Return success response && check response
  const stepResponse = step(true);
  expect(stepResponse).toEqual(
    put(FavouritePeopleActions.addFavouritePeopleSuccess())
  );
});

test("Success to add new people to list", () => {
  const step = stepper(addFavouritePeopleRequest({ user: userData }));
  // 1: Call to add new people
  step();
  // 2: Return failed response && check response
  const stepResponse = step(false);
  expect(stepResponse).toEqual(
    put(FavouritePeopleActions.addFavouritePeopleFailure())
  );
});
