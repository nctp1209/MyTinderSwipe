import ModelName from "../Config/ModelName";

class Name {}

Name.schema = {
  name: ModelName.NAME,
  properties: {
    first: "string?",
    last: "string?",
    title: "string?"
  }
};

export default Name;
