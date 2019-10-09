import React, { Component } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Text
} from "react-native";
import FeatherIcons from "react-native-vector-icons/Feather";

import PeopleActions from "../../Redux/PeopleRedux";
import FavouritePeopleActions from "../../Redux/FavouritePeopleRedux";
import { NavigationActions } from "react-navigation";

import { connect } from "react-redux";

import DeckContainer from "../../Components/SwipeDeck/DeckContainer";
import PeopleCard from "../../Components/PeopleCard/PeopleCard";

import RouterConstant from "../../Navigation/RouteConstant";
import colors from "../../Themes/colors";

class Main extends Component {
  constructor() {
    super();
    this.counter = 0;
  }

  componentDidMount() {
    this.props.getPeople();
    this.props.getFavouritePeople();
  }

  getNextPeople() {
    this.props.getPeople();
  }

  onSwipeLeft(item) {
    this.counter++;
    if (
      !this.props.people.currentPeople ||
      this.counter >= this.props.people.currentPeople.length
    ) {
      this.props.getPeople();
      this.counter = 0;
    }
  }

  onSwipeRight(item) {
    this.props.addFavouritePeople(item);

    this.counter++;
    if (
      !this.props.people.currentPeople ||
      this.counter >= this.props.people.currentPeople.length
    ) {
      this.props.getPeople();
      this.counter = 0;
    }
  }

  renderHeader() {
    return (
      <View style={styles.headerStyle}>
        <TouchableOpacity
          style={{ padding: 10 }}
          onPress={() => this.props.gotoFavouriteList()}
        >
          <FeatherIcons
            name={"heart"}
            color={"white"}
            size={30}
            style={{ padding: 10 }}
            onPress={() => this.props.gotoFavouriteList()}
          />
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        {this.renderHeader()}
        {this.props.people.currentPeople &&
        this.props.people.currentPeople.length > 0 ? (
          <DeckContainer
            listCard={this.props.people.currentPeople}
            renderCardItem={item => <PeopleCard item={item.user} />}
            onSwipeLeft={item => this.onSwipeLeft(item.user)}
            onSwipeRight={item => this.onSwipeRight(item.user)}
          />
        ) : this.props.people.processing ? (
          <ActivityIndicator size="large" color="darkturquoise" />
        ) : null}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
  people: state.people,
  favouritePeople: state.favouritePeople
});

const mapDispatchToProps = dispatch => ({
  getPeople: () => dispatch(PeopleActions.getPeopleRequest()),
  addFavouritePeople: user =>
    dispatch(FavouritePeopleActions.addFavouritePeopleRequest(user)),
  getFavouritePeople: () =>
    dispatch(FavouritePeopleActions.getFavouritePeopleRequest()),
  gotoFavouriteList: () =>
    dispatch(
      NavigationActions.navigate({
        routeName: RouterConstant.FavouriteList
      })
    )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    backgroundColor: colors.backgroundColor
  },
  headerStyle: {
    position: "absolute",
    top: 0,
    zIndex: -1,
    width: "100%",
    height: 200,
    alignItems: "flex-end",
    backgroundColor: colors.headerBarColor
  }
});
