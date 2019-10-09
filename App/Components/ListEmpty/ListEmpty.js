import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";

export default class ListEmpty extends Component {
  render() {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.titleStyle}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    height: 100,
    backgroundColor: "#FFF"
  },
  titleStyle: { fontStyle: "italic", textAlign: "center" }
});

ListEmpty.propTypes = {
  title: PropTypes.string
};

ListEmpty.defaultProps = {
  title: "No data"
};
