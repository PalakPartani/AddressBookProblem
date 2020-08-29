import { op } from "./CRUDOperations";
import { FileWriter } from "./JsonOp";
import { exit } from "process";
var readLineSync = require('readline-sync');

console.log("Enter 1 for adding user");
console.log("Enter 2 for updating user");
console.log("Enter 3 for deleting user");
console.log("Enter 4 for sorting user");
console.log("Enter 5 for sorting user");
console.log("Enter 6 Exit");
class Main {
    chooseOperation = () => {
        while (true) {
            try {
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
                        let sortField = readLineSync.question("Enter sortfield : ");
                        op.sortData(sortField);
                        break;
                    case "5":
                        new FileWriter().displayJSonFile();
                        break;
                    case "6":
                        exit();
                    default:
                        console.log("Invalid");
                        break;
                }
            } catch (e) {
                console.log(e.message);
            }
        }
    }
}
new Main(). chooseOperation();