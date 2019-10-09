import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import IoniconsIcons from "react-native-vector-icons/Ionicons";

import colors from "../../Themes/colors";
import { heightHeader } from "../../Themes/dimension";

const Header = (title = "", navigation = null) => (
  <View style={styles.headerContainer}>
    {navigation ? (
      <TouchableOpacity
        onPress={() => navigation.dispatch({ type: "Navigation/BACK" })}
        style={styles.backButtonContainer}
      >
        <IoniconsIcons name="ios-arrow-dropleft" color="white" size={30} />
      </TouchableOpacity>
    ) : null}
    <Text style={styles.titleContainer}>{title || ""}</Text>
    <View style={{ flex: 1 }} />
  </View>
);

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    height: heightHeader,
    padding: 10,
    backgroundColor: colors.headerBarColor,
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 2
  },
  backButtonContainer: {
    flex: 1,
    height: 30,
    justifyContent: "center",
    paddingRight: 15
  },
  titleContainer: { flex: 4, color: "white", fontSize: 20, textAlign: "center" }
});

export default Header;
