import Realm from "realm";
import FavouritePeople from "./FavouritePeople";
import Name from "./Name";
import Location from "./Location";

export default new Realm({
  schema: [FavouritePeople, Name, Location],
  deleteRealmIfMigrationNeeded: true
});
