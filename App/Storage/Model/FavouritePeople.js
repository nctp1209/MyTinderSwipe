import ModelName from "../Config/ModelName";

class FavouritePeople {}

FavouritePeople.schema = {
  name: ModelName.FAVOURITE_PEOPLE,
  primaryKey: "username",
  properties: {
    username: "string",
    name: "Name",
    location: "Location",
    gender: "string?",
    email: "string?",
    password: "string?",
    dob: "string?",
    phone: "string?",
    picture: "string?",
    createdAt: 'int?'
  }
};

export default FavouritePeople;
