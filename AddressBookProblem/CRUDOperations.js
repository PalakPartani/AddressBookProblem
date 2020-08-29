"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.op = void 0;
const AddressBook_1 = require("./Service/AddressBook");
const JsonOp_1 = require("./JsonOp");
const AddressBookException_1 = require("./AddressBookException");
const process_1 = require("process");
var readLineSync = require('readline-sync');
let list = new Array();
//regex pattern
let patternName = new RegExp('^[A-Za-z]{3,}$');
let patternZip = new RegExp(/^[0-9]{6}/);
let patternNumber = new RegExp('^[0-9]{10}');
class CRUDOperations {
    constructor() {
        //add user.
        this.addUser = () => {
            let firstName = readLineSync.question("Enter firstname : ");
            let lastName = readLineSync.question("Enter lastname : ");
            let address = readLineSync.question("Enter address : ");
            let city = readLineSync.question("Enter city: ");
            let state = readLineSync.question("Enter state : ");
            let zipcode = readLineSync.question("Enter zipcode : ");
            let phoneNo = readLineSync.question("Enter phoneNo : ");
            //        if (patternName.test(firstName) && patternName.test(lastName) && patternName.test(address) && patternName.test(city) && patternName.test(state) && patternZip.test('zipcode') && patternNumber.test('phoneNo')) {
            let p = { firstName, lastName, address, city, state, zipcode, phoneNo };
            let data = new JsonOp_1.FileWriter().returnJsonFile();
            let chk = false;
            for (let k = 0; k < data.length; k++) {
                console.log(data[k]["firstName"]);
                if (data[k]["firstName"] == p.firstName) {
                    chk = true;
                }
            }
            if (chk == false) {
                list.push(p);
                new JsonOp_1.FileWriter().writePersonData(list);
            }
            else {
                throw new AddressBookException_1.AddressBookException("Invalid input");
            }
        };
        /*  else {
              throw new AddressBookException("Invalid input");
              //console.log("Invalid input");
          }
      }*/
        //updateThroughswitch
        this.updateUserThroughSetter = () => {
            let data1 = new JsonOp_1.FileWriter().returnJsonFile();
            // let personModel = new IPerson;
            let per = new AddressBook_1.Person(data1);
            let index = readLineSync.question('Enter user index number : ');
            console.log('chhose information that you want to edit : ');
            console.log('1.Change First Name');
            console.log('2.Change Last Name');
            console.log('3.Change Address');
            console.log('4.Change city');
            console.log('5.Change state');
            console.log('6.Change zip code');
            console.log('7.Change phone number');
            console.log('8.Exit');
            let choice = readLineSync.question('Enter your choice : ');
            let ip = readLineSync.question('enter data for update : ');
            let person = data1[index];
            per.setFname(person.firstName);
            per.setLname(person.lastName);
            per.setAddress(person.address);
            per.setCity(person.city);
            per.setState(person.state);
            per.setZip(person.zipcode);
            per.setPhone(person.phoneNo);
            switch (choice) {
                case "1":
                    per.setFname(ip);
                    break;
                case "2":
                    per.setLname(ip);
                    break;
                case "3":
                    per.setAddress(ip);
                    break;
                case "4":
                    per.setState(ip);
                    break;
                case "5":
                    per.setCity(ip);
                    break;
                case "6":
                    per.setZip(ip);
                    break;
                case "7":
                    per.setPhone(ip);
                    break;
                case "8":
                    process_1.exit();
                default:
                    console.log('Enter Valid number');
                    break;
            }
            data1[index] = per;
            return new JsonOp_1.FileWriter().updatePersonData(data1);
        };
        //update except name
        this.updateUser = (id, oldVal, value) => {
            /* let ch = readLineSync.question("Enter choice : ");
             switch (ch) {
                 case "1":
                     let input=readLineSync.question("Enter choice : ");
                     break;
             }*/
            let data = new JsonOp_1.FileWriter().returnJsonFile();
            for (let k = 0; k < data.length; k++) {
                if (k == id) {
                    console.log(data[k]);
                    data[k][oldVal] = value;
                    console.log(data[k][oldVal]);
                    console.log(data[k]);
                }
            }
            return new JsonOp_1.FileWriter().updatePersonData(data);
        };
        //delete using name.
        this.deleteUser = (name) => {
            let tempArr = new Array();
            let data = new JsonOp_1.FileWriter().returnJsonFile();
            for (let k = 0; k < data.length; k++) {
                if (data[k]["firstName"] != name) {
                    tempArr.push(data[k]);
                }
            }
            return new JsonOp_1.FileWriter().updatePersonData(tempArr);
        };
        //sorting data.
        this.sortData = (sortField) => {
            let sortedArray = new Array();
            let data = new JsonOp_1.FileWriter().returnJsonFile();
            console.log("sort field : " + sortField);
            switch (sortField) {
                case "city":
                    sortedArray = data.sort((a, b) => (a.city > b.city) ? 1 : -1);
                    console.log("sorted by city");
                    break;
                case "state":
                    sortedArray = data.sort((a, b) => (a.state > b.state) ? 1 : -1);
                    console.log("sorted by state");
                    break;
                case "zipcode":
                    sortedArray = data.sort((a, b) => (a.zipcode > b.zipcode) ? 1 : -1);
                    break;
                default:
                    sortedArray = data.sort((a, b) => (a.firstName > b.firstName) ? 1 : -1);
            }
            console.log(sortedArray);
            return new JsonOp_1.FileWriter().updatePersonData(sortedArray);
        };
    }
}
exports.op = new CRUDOperations();
//# sourceMappingURL=CRUDOperations.js.map