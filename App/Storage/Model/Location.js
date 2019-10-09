import ModelName from "../Config/ModelName";

class Location {}

Location.schema = {
  name: ModelName.LOCATION,
  properties: {
    street: "string?",
    city: "string?",
    state: "string?",
    zip: "string?"
  }
};

export default Location;
