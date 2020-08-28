"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AddressBook_1 = require("./Service/AddressBook");
const CRUDOperations_1 = require("./CRUDOperations");
const process_1 = require("process");
var readLineSync = require('readline-sync');
let person1 = {};
person1.firstName = "plk";
person1.lastName = "partani";
person1.address = "ytl";
person1.city = "ytl";
person1.zipcode = "445001";
person1.phoneNo = "123456789";
let person = new AddressBook_1.Person(person1);
console.log(person.firstName);
console.log("Enter 1 for adding user");
console.log("Enter 2 Exit");
console.log("Enter 3 for deleting user");
console.log("Enter 4 for updating user");
while (true) {
    let choice = readLineSync.question("Enter choice");
    switch (choice) {
        case "1":
            CRUDOperations_1.op.addUser();
            break;
        case "2":
            process_1.exit();
        default:
            console.log("Invalid");
            break;
    }
}
//const fs = require("fs");
/*function addUser(person: Person) {
    console.log(person);
    new FileWriter().writeFile(person);
}
let userData;
userData = {
    firstName: readLineSync.question('Enter fname : '), lastName: readLineSync.question('Enter Lname : '), address: readLineSync.question('Enter address : '),
    city: readLineSync.question('Enter city : '), state: readLineSync.question('Enter state : '), zipCode: readLineSync.question('Enter zipcode : '),
    phoneNo: readLineSync.question('Enter phoneno : ')
}
addUser(userData);*/
//# sourceMappingURL=app.js.map