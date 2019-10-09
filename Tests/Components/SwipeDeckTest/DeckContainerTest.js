import React from "react";
import { Text } from "react-native";
import renderer from "react-test-renderer";
import { path } from "ramda";
import { shallow } from 'enzyme'

import APIResult from "../../APIResult";
import DeckContainer from "../../../App/Components/SwipeDeck/DeckContainer";

test("DeckContainer render when list card is empty", () => {
  const tree = renderer
    .create(
      <DeckContainer
        listCard={[]}
        renderCardItem={item => <Text>{item.user.username}</Text>}
        onSwipeLeft={item => console.log("onSwipeLeft")}
        onSwipeRight={item => console.log("onSwipeRight")}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("DeckContainer render when list card have data", () => {
  const response = APIResult.getPeople();
  const listUser = path(["data", "results"], response);
  const tree = renderer
    .create(
      <DeckContainer
        listCard={listUser}
        renderCardItem={item => <Text>{item.user.username}</Text>}
        onSwipeLeft={item => console.log("onSwipeLeft")}
        onSwipeRight={item => console.log("onSwipeRight")}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
