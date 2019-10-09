import React from "react";
import { Text } from "react-native";
import renderer from "react-test-renderer";
import { path } from "ramda";
import { shallow } from "enzyme";

import APIResult from "../../APIResult";
import SwipeCard from "../../../App/Components/SwipeDeck/SwipeCard";

test("SwipeCard render", () => {
  const response = APIResult.getPeople();
  const item = path(["data", "results"], response)[0];
  const tree = renderer
    .create(
      <SwipeCard
        key={0}
        index={0}
        renderCardItem={() => <Text>{item.user.username}</Text>}
        onSwipeLeft={() => console.log("onSwipeLeft")}
        onSwipeRight={() => console.log("onSwipeRight")}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
