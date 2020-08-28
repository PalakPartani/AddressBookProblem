"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.op = void 0;
const JsonOp_1 = require("./JsonOp");
var readLineSync = require('readline-sync');
let list = new Array();
class CRUDOperations {
    constructor() {
        this.addUser = () => {
            let firstName = readLineSync.question("Enter firstname");
            let lastName = readLineSync.question("Enter lastname");
            let address = readLineSync.question("Enter address");
            let city = readLineSync.question("Enter city");
            let state = readLineSync.question("Enter state");
            let zipcode = readLineSync.question("Enter zipcode");
            let phoneNo = readLineSync.question("Enter phoneNo");
            let p = { firstName, lastName, address, city, state, zipcode, phoneNo };
            list.push(p);
            new JsonOp_1.FileWriter().writePersonData(list);
        };
    }
}
exports.op = new CRUDOperations();
//# sourceMappingURL=CRUDOperations.js.map