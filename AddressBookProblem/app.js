"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CRUDOperations_1 = require("./CRUDOperations");
//import { readLineSync } from "fs";
const JsonOp_1 = require("./JsonOp");
const process_1 = require("process");
var readLineSync = require('readline-sync');
console.log("Enter 1 for adding user");
console.log("Enter 2 for updating user");
console.log("Enter 3 for deleting user");
console.log("Enter 4 for sorting user");
console.log("Enter 5 for sorting user");
console.log("Enter 6 Exit");
class Main {
    constructor() {
        this.chooseOperation = () => {
            while (true) {
                try {
                    let choice = readLineSync.question("Enter choice : ");
                    switch (choice) {
                        case "1":
                            CRUDOperations_1.op.addUser();
                            break;
                        case "2":
                            CRUDOperations_1.op.updateUserThroughSetter();
                            break;
                        case "3":
                            let deleteId = readLineSync.question("Enter frstname : ");
                            CRUDOperations_1.op.deleteUser(deleteId);
                            break;
                        case "4":
                            let sortField = readLineSync.question("Enter sortfield : ");
                            CRUDOperations_1.op.sortData(sortField);
                            break;
                        case "5":
                            new JsonOp_1.FileWriter().displayJSonFile();
                            break;
                        case "6":
                            process_1.exit();
                        default:
                            console.log("Invalid");
                            break;
                    }
                }
                catch (e) {
                    console.log(e.message);
                }
            }
        };
    }
}
new Main().chooseOperation();
//# sourceMappingURL=app.js.map