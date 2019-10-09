import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import { connect } from "react-redux";

import FavouritePeopleActions from "../../Redux/FavouritePeopleRedux";
import { FlatList } from "react-native-gesture-handler";

import PeopleCard from "../../Components/PeopleCard/PeopleCard";
import ListEmpty from "../../Components/ListEmpty/ListEmpty";

import colors from "../../Themes/colors";

class FavouriteList extends Component {
  componentDidMount() {
    this.props.getFavouritePeople();
  }

  renderListFavouritePeople() {
    if (this.props.favouritePeople.listFavouritePeople) {
      return (
        <FlatList
          extraData={this.props}
          data={this.props.favouritePeople.listFavouritePeople}
          keyExtractor={(item, index) => `${index}`}
          renderItem={({ item }) => (
            <View style={styles.peopleCardContainer}>
              <PeopleCard item={item} />
            </View>
          )}
          ListEmptyComponent={() => (
            <ListEmpty
              title={
                this.props.favouritePeople.processing
                  ? "Loading"
                  : "You don't like anyone yet"
              }
            />
          )}
        />
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        {this.renderListFavouritePeople()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: { flex: 1, backgroundColor: colors.backgroundColor },
  peopleCardContainer: {
    margin: 20,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#DDD"
  }
});

const mapStateToProps = state => ({
  favouritePeople: state.favouritePeople
});

const mapDispatchToProps = dispatch => ({
  getFavouritePeople: () =>
    dispatch(FavouritePeopleActions.getFavouritePeopleRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavouriteList);
