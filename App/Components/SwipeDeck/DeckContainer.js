import React, { Component } from "react";
import { View } from "react-native";
import PropTypes from "prop-types";

import SwipeCard from "./SwipeCard";

export default class DeckContainer extends Component {
  static defaultProps = {
    listCard: []
  };

  static propTypes = {
    listCard: PropTypes.array,
    renderCardItem: PropTypes.func
  };

  render() {
    if (this.props.listCard && this.props.listCard.length > 0) {
      const listComponent = [];
      this.props.listCard.forEach((item, i) => {
        listComponent.push(
          <SwipeCard
            key={i}
            index={i}
            onSwipeLeft={() => this.props.onSwipeLeft(item)}
            onSwipeRight={() => this.props.onSwipeRight(item)}
            renderCardItem={() => this.props.renderCardItem(item)}
          />
        );
      });
      return listComponent.reverse();
    }
    return <View />;
  }
}
