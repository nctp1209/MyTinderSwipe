import React from "react";
import renderer from "react-test-renderer";

import ListEmpty from "../../../App/Components/ListEmpty/ListEmpty";

test("ListEmpty without title", () => {
  const tree = renderer.create(<ListEmpty />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("ListEmpty with title", () => {
  const tree = renderer.create(<ListEmpty title="Test ListEmpty" />).toJSON();
  expect(tree).toMatchSnapshot();
});
