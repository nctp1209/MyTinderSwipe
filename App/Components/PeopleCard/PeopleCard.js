import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import FeatherIcons from "react-native-vector-icons/Feather";

const USER = "USER";
const CALENDER = "CALENDER";
const MAP = "MAP";
const PHONE = "PHONE";
const PASSWORD = "PASSWORD";

const UNSELECTED_INFO_COLOR = "#DADADA";
const SELECTED_INFO_COLOR = "#83B943";

export default class PeopleCard extends Component {
  constructor() {
    super();
    this.state = {
      selectedInfo: MAP
    };
  }

  static propTypes = {
    item: PropTypes.object
  };

  static defaultProps = { item: {} };

  setSelectedInfo(info) {
    this.setState({ selectedInfo: info });
  }

  iconItem(iconName, iconFeature) {
    let selected = false;
    if (this.state.selectedInfo === iconFeature) selected = true;
    return (
      <View
        style={
          selected
            ? styles.buttonContainerSelectedStyle
            : styles.buttonContainerUnselectedStyle
        }
      >
        <FeatherIcons
          name={iconName}
          color={selected ? SELECTED_INFO_COLOR : UNSELECTED_INFO_COLOR}
          size={30}
          style={{ padding: 7 }}
          onPress={() => this.setSelectedInfo(iconFeature)}
        />
      </View>
    );
  }

  infoDisplay() {
    let titleDisplayed = "My address is";
    let infoDisplayed =
      this.props.item.location && this.props.item.location.street
        ? this.props.item.location.street
        : "";
    switch (this.state.selectedInfo) {
      case USER:
        titleDisplayed = "Hi, my name is";
        // Capitalize first letter of First Name
        const firstName =
          this.props.item.name && this.props.item.name.first
            ? this.props.item.name.first.charAt(0).toUpperCase() +
              this.props.item.name.first.slice(1)
            : "";

        // Capitalize first letter of Last Name
        const lastName =
          this.props.item.name && this.props.item.name.last
            ? this.props.item.name.last.charAt(0).toUpperCase() +
              this.props.item.name.last.slice(1)
            : "";

        infoDisplayed = `${firstName} ${lastName}`;
        break;
      case CALENDER:
        titleDisplayed = "My birthday is";
        infoDisplayed = this.props.item.dob
          ? new Date(this.props.item.dob * 1000).toLocaleDateString("vn-VN")
          : "";
        break;
      case PHONE:
        titleDisplayed = "My phone number is";
        infoDisplayed = this.props.item.phone ? this.props.item.phone : "";
        break;
      case PASSWORD:
        titleDisplayed = "My password is";
        infoDisplayed = this.props.item.password
          ? this.props.item.password
          : "";
        break;
    }

    return (
      <View style={styles.textContainerStyle}>
        <Text style={styles.desriptionTextStyle}>{titleDisplayed}</Text>
        <Text style={styles.textStyle}>{infoDisplayed}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <View style={styles.backgroundStyle} />
        <View style={styles.avatarContainerStyle}>
          {this.props.item && this.props.item.picture ? (
            <Image
              style={styles.avatarStyle}
              source={{ uri: this.props.item.picture }}
            />
          ) : null}
        </View>
        {this.infoDisplay()}
        <View style={styles.buttonContainerStyle}>
          {this.iconItem("user", USER)}
          {this.iconItem("calendar", CALENDER)}
          {this.iconItem("map", MAP)}
          {this.iconItem("phone", PHONE)}
          {this.iconItem("lock", PASSWORD)}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    justifyContent: "center",
    alignItems: "center"
  },
  avatarContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: 30,
    padding: 10,
    height: 160,
    width: 160,
    borderRadius: 160 / 2,
    borderWidth: 1,
    borderColor: "gray"
  },
  avatarStyle: {
    height: 150,
    width: 150,
    borderRadius: 150 / 2
  },
  desriptionTextStyle: {
    fontSize: 15,
    padding: 5,
    color: "gray"
  },
  textStyle: {
    fontSize: 19,
    color: "black"
  },
  textContainerStyle: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonContainerStyle: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 5,
    paddingVertical: 30
  },
  buttonContainerSelectedStyle: {
    paddingTop: 5,
    borderTopWidth: 2,
    borderTopColor: SELECTED_INFO_COLOR
  },
  buttonContainerUnselectedStyle: {
    paddingTop: 5
  },
  backgroundStyle: {
    position: "absolute",
    top: 0,
    zIndex: -1,
    width: "100%",
    height: 140,
    backgroundColor: "#EEE",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5
  }
});
