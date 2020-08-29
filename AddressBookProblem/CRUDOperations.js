"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.op = void 0;
const AddressBook_1 = require("./Service/AddressBook");
const JsonOp_1 = require("./JsonOp");
const process_1 = require("process");
const AddressBookException_1 = require("./AddressBookException");
var readLineSync = require('readline-sync');
let list = new Array();
//regex pattern
let patternName = new RegExp('^[A-Za-z]{3,}$');
let patternZip = new RegExp('^[0-9]{6}');
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
            if (patternName.test(firstName) && patternName.test(lastName) && patternName.test(address)
                && patternName.test(city) && patternName.test(state) && patternZip.test(String(zipcode))
                && patternNumber.test(String(phoneNo))) {
                let p = { firstName, lastName, address, city, state, zipcode, phoneNo };
                let data = new JsonOp_1.FileWriter().returnJsonFile();
                let chk = false;
                for (let k = 0; k < data.length; k++) {
                    console.log(data[k]["firstName"]);
                    if (data[k]["firstName"] == p.firstName && data[k]["lastName"] == p.lastName) {
                        chk = true;
                    }
                }
                if (chk == false) {
                    list.push(p);
                    new JsonOp_1.FileWriter().writePersonData(list);
                }
                /*else {
                    console.log("Invalid");
                }*/
            }
            else {
                throw new AddressBookException_1.AddressBookException("Invalid input");
            }
        };
        //updateThroughswitch
        this.updateUserThroughSetter = () => {
            // this.chooseOption();
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
                    patternName.test(ip) ? per.setLname(ip) : console.log("Invalid");
                    break;
                case "3":
                    patternName.test(ip) ? per.setAddress(ip) : console.log("Invalid");
                    break;
                case "4":
                    patternName.test(ip) ? per.setState(ip) : console.log("Invalid");
                    break;
                case "5":
                    patternName.test(ip) ? per.setCity(ip) : console.log("Invalid");
                    break;
                case "6":
                    patternName.test(ip) ? per.setZip(ip) : console.log("Invalid");
                    break;
                case "7":
                    patternName.test(ip) ? per.setPhone(ip) : console.log("Invalid");
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
        //sort data by name.
        //sorting data.
        this.sortData = (sortField) => {
            let sortedArray = new Array();
            let data = new JsonOp_1.FileWriter().returnJsonFile();
            console.log("1)Address\n2)City\n3)State\n4)Zip\n5)phoneNumber");
            let option = readLineSync.question('Enter your Choice: ');
            console.log("sort field : " + sortField);
            switch (sortField) {
                case "1":
                    sortedArray = data.sort((a, b) => (a.city > b.city) ? 1 : -1);
                    console.log("sorted by city");
                    break;
                case "2":
                    sortedArray = data.sort((a, b) => (a.state > b.state) ? 1 : -1);
                    console.log("sorted by state");
                    break;
                case "3":
                    sortedArray = data.sort((a, b) => (a.zipcode > b.zipcode) ? 1 : -1);
                    break;
                default:
                    sortedArray = data.sort((a, b) => (a.firstName > b.firstName) ? 1 : -1);
            }
            console.log(sortedArray);
            return new JsonOp_1.FileWriter().updatePersonData(sortedArray);
        };
        //chooseOption
        this.chooseOption = () => {
            let data1 = new JsonOp_1.FileWriter().returnJsonFile();
            console.log('choose information that you want to edit : ');
            console.log('1.Change First Name');
            console.log('2.Change Last Name');
            console.log('3.Change Address');
            console.log('4.Change city');
            console.log('5.Change state');
            console.log('6.Change zip code');
            console.log('7.Change phone number');
            console.log('8.Exit');
            let choice = readLineSync.question('Enter your choice : ');
            return choice;
        };
    }
}
exports.op = new CRUDOperations();
//# sourceMappingURL=CRUDOperations.js.map