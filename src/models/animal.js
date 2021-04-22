'use strict';

//animal.js
class AnimalsModel {
  constructor() {
    this.id = 0;
    this.db = [{id: 1, type: 'dog'}, {id: 2, type: 'dog2'}, {id: 3, type: 'dog3'}]; //this represents an in-memory db
  }

  //TODO
  create(obj) {
    let record = {
      id: ++this.id,
      record: obj,
    }

    this.db.push(record);
    return record;
  }

  //TODO
  read(id) {
    if (id) {
      return this.db.find(record => record.id === id);
    } else {
      return this.db;
    }
  }

  //TODO
  update(id, obj) {
    if (id) {
      let item = this.db.find(record => record.id === id);
      const index = this.db.indexOf(item);
      this.db[index] = {
        id: id,
        record:obj
      };
    }
  }

  //TODO 
  delete(id) {
    if (id) {
      let item = this.db.find(record => record.id === id);
      const index = this.db.indexOf(item);
      this.db.splice(index, 1);
    }
  }
}

module.exports = AnimalsModel; 
