import FavouritePeopleActions, {
  reducer,
  INITIAL_STATE
} from "../../App/Redux/FavouritePeopleRedux";
import { getListFavouritePeople } from "../../App/Storage/Services/FavouritePeopleService";

test("getFavouritePeopleRequestTest", () => {
  const state = reducer(
    INITIAL_STATE,
    FavouritePeopleActions.getFavouritePeopleRequest()
  );
  expect(state.processing).toBe(true);
});

test("getFavouritePeopleSuccessTest", () => {
  const result = Array.from(getListFavouritePeople());
  const state = reducer(
    INITIAL_STATE,
    FavouritePeopleActions.getFavouritePeopleSuccess(result)
  );
  expect(state.processing).toBe(false);
  expect(state.listFavouritePeople).toMatchObject(result);
});

test("getFavouritePeopleFailureTest", () => {
  const state = reducer(
    INITIAL_STATE,
    FavouritePeopleActions.getFavouritePeopleFailure()
  );
  expect(state.processing).toBe(false);
  expect(state.listFavouritePeople).toMatchObject([]);
});

test("addFavouritePeopleRequestTest", () => {
  const user = null;
  const state = reducer(
    INITIAL_STATE,
    FavouritePeopleActions.addFavouritePeopleRequest(user)
  );
  expect(state.addProcessing).toBe(true);
});

test("addFavouritePeopleSuccessTest", () => {
  const state = reducer(
    INITIAL_STATE,
    FavouritePeopleActions.addFavouritePeopleSuccess()
  );
  expect(state.addProcessing).toBe(false);
});

test("addFavouritePeopleFailureTest", () => {
  const state = reducer(
    INITIAL_STATE,
    FavouritePeopleActions.addFavouritePeopleFailure()
  );
  expect(state.addProcessing).toBe(false);
});
