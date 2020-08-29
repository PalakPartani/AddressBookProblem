import { Person } from "./Service/AddressBook";
import { IPerson } from "./IPerson";
import { op } from "./CRUDOperations";
//import { readLineSync } from "fs";
import { FileWriter } from "./JsonOp";
import { exit } from "process";
var readLineSync = require('readline-sync');
/*
let person1: IPerson = {} as any;

let person = new Person(person1);*/
let chooseOperation;


console.log("Enter 1 for adding user");
console.log("Enter 2 for updating user");
console.log("Enter 3 for deleting user");
console.log("Enter 4 for sorting user");
console.log("Enter 5 Exit");
class Main {
 chooseOperation = () => {
    while (true) {
        let choice = readLineSync.question("Enter choice : ");

        switch (choice) {
            case "1":
                op.addUser();
                break;
            case "2":
                op.updateUserThroughSetter();
                break;
            case "3":
                let deleteId = readLineSync.question("Enter frstname : ");
                op.deleteUser(deleteId);
                break;
            case "4":
                op.sortData();
                break;
            case "5":
                exit();
            default:
                console.log("Invalid");
                break;
        }
    }
}
}
new Main(). chooseOperation();