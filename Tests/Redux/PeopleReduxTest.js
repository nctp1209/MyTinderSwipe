import PeopleActions, {
  reducer,
  INITIAL_STATE
} from "../../App/Redux/PeopleRedux";

test("getPeopleRequestTest", () => {
  const state = reducer(INITIAL_STATE, PeopleActions.getPeopleRequest());
  expect(state.processing).toBe(true);
  expect(state.currentPeople).toBe(null);
});

test("getPeopleSuccessTest", () => {
  const apiResult = {
    user: {
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
      salt: "WHO8Sgl9",
      md5: "b3a5611580d55985b4ce81b559e34cea",
      sha1: "c05a36ceb6730779f60d9e176f93990a2b606197",
      sha256:
        "3266576cd8c6f7eea6b01db778eb8917453e0aaa93fd464e3c8822265edfc5ce",
      registered: "947286875",
      dob: "174648911",
      phone: "(356)-283-6451",
      cell: "(295)-803-4645",
      SSN: "992-79-2315",
      picture: "http://api.randomuser.me/portraits/men/11.jpg"
    },
    seed: "ca6d3cb2b9f71eda",
    version: "0.4"
  };
  const state = reducer(
    INITIAL_STATE,
    PeopleActions.getPeopleSuccess(apiResult)
  );
  expect(state.processing).toBe(false);
  expect(state.currentPeople).toMatchObject(apiResult);
});

test("getPeopleFailureTest", () => {
  const state = reducer(INITIAL_STATE, PeopleActions.getPeopleFailure());
  expect(state.processing).toBe(false);
  expect(state.currentPeople).toBe(null);
});


