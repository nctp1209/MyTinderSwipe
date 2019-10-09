import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  Animated,
  PanResponder,
  Dimensions
} from "react-native";
import PropTypes from "prop-types";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export default class DeckContainer extends Component {
  constructor() {
    super();
    this.position = new Animated.ValueXY();
    this.rotate = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
      outputRange: ["-10deg", "0deg", "10deg"],
      extrapolate: "clamp"
    });
  }

  static propTypes = {
    index: PropTypes.number,
    onSwipeLeft: PropTypes.func,
    onSwipeRight: PropTypes.func,
    renderCardItem: PropTypes.func
  };

  componentWillMount() {
    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        this.position.setValue({ x: gestureState.dx, y: gestureState.dy });
      },
      onPanResponderRelease: (evt, gestureState) => {
        // Move to my favourite
        if (gestureState.dx > 120) {
          this.props.onSwipeRight();
          Animated.spring(this.position, {
            toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy }
          }).start(() => {});

          // Remove from deck
        } else if (gestureState.dx < -120) {
          this.props.onSwipeLeft();
          Animated.spring(this.position, {
            toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy }
          }).start(() => {});

          // Do nothing
        } else {
          Animated.spring(this.position, {
            toValue: { x: 0, y: 0 },
            friction: 4
          }).start();
        }
      }
    });
  }

  render() {
    return (
      <Animated.View
        {...this.PanResponder.panHandlers}
        style={[
          {
            transform: [
              { rotate: this.rotate },
              ...this.position.getTranslateTransform()
            ]
          },
          styles.cardStyle
        ]}
      >
        {this.props.renderCardItem()}
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  cardStyle: {
    height: SCREEN_HEIGHT - 200,
    width: SCREEN_WIDTH - 40,
    margin: 20,
    borderRadius: 5,
    backgroundColor: "white",
    position: "absolute"
  }
});
