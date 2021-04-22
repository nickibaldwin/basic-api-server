'use strict';
//person.js


//animal.js
class PeopleModel {
    constructor() {
        this.id = 0;
        this.db = [];
    }

    //TODO
    create(obj) {
        let record = {
            id: ++this.id,
            record: obj
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
    update(id) {
        if (id) {
            return null;
        }
    }

    //TODO 
    delete(id) {
        if (id) {
            return null;
        }
    }
}

module.exports = PeopleModel;