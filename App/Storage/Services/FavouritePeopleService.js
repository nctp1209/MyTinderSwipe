import RealmDatabase from "../index";
import ModelName from "../Config/ModelName";

export function addNewFavouritePeople(user) {
  if (user) {
    const newData = {
      username: user.username,
      name: user.name,
      location: user.location,
      gender: user.gender,
      email: user.email,
      password: user.password,
      dob: user.dob,
      phone: user.phone,
      picture: user.picture,
      createdAt: new Date().getTime()
    };
    return RealmDatabase.saveRecord(ModelName.FAVOURITE_PEOPLE, newData);
  }
}

export function getListFavouritePeople() {
  const data = RealmDatabase.queryData(ModelName.FAVOURITE_PEOPLE).sorted(
    "createdAt",
    true
  );
  return Array.from(data);
}
