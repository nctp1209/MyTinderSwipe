import React from "react";
import renderer from "react-test-renderer";
import { path } from "ramda";

import APIResult from "../../APIResult";
import PeopleCard from "../../../App/Components/PeopleCard/PeopleCard";

test("PeopleCard render when no data", () => {
  const tree = renderer.create(<PeopleCard />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("PeopleCard render", () => {
  const response = APIResult.getPeople();
  const item = path(["data", "results"], response)[0];
  const tree = renderer.create(<PeopleCard item={item.user} />).toJSON();
  expect(tree).toMatchSnapshot();
});
