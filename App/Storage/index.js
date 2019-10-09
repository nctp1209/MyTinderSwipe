import RealmDB from "./Model";

class Storage {
  realm;

  constructor() {
    this.init();
  }

  init() {
    this.realm = RealmDB;
  }

  saveRecord(typeRecord, newData) {
    const willOverrideExistedRecord = true;
    if (typeRecord) {
      this.realm.write(() => {
        this.realm.create(typeRecord, newData, willOverrideExistedRecord);
      });
    }
  }

  removeRecord(record) {
    this.realm.write(() => {
      this.realm.delete(record);
    });
  }

  queryData(tableName, query) {
    const allRecord = this.realm.objects(tableName);
    if (query) {
      const result = allRecord.filtered(query);
      return result;
    }
    return allRecord;
  }
}

const storage = new Storage();
export default storage;
