import { Person } from "./Service/AddressBook";
import { IPerson } from "./IPerson";
import { FileWriter } from "./JsonOp";
import { AddressBookException } from "./AddressBookException";
import { stringify } from "querystring";
import { exit } from "process";
var readLineSync = require('readline-sync');
let list = new Array<IPerson>();

//regex pattern
let patternName: RegExp = new RegExp('^[A-Za-z]{3,}$');
let patternZip: RegExp = new RegExp(/^[0-9]{6}/);
let patternNumber: RegExp = new RegExp('^[0-9]{10}');

class CRUDOperations {

    //add user.
    addUser = () => {
        let firstName: string = readLineSync.question("Enter firstname : ");
        let lastName: string = readLineSync.question("Enter lastname : ");
        let address = readLineSync.question("Enter address : ");
        let city: string = readLineSync.question("Enter city: ");
        let state: string = readLineSync.question("Enter state : ");
        let zipcode: number = readLineSync.question("Enter zipcode : ");
        let phoneNo: number = readLineSync.question("Enter phoneNo : ");
        if (patternName.test(firstName) && patternName.test(lastName) && patternName.test(address) && patternName.test(city) && patternName.test(state) && patternZip.test('zipcode') && patternNumber.test('phoneNo')) {

        let p: IPerson = { firstName, lastName, address, city, state, zipcode, phoneNo };
        let data = new FileWriter().returnJsonFile();
        let chk: boolean = false;
        for (let k = 0; k < data.length; k++) {
            console.log(data[k]["firstName"]);
            if (data[k]["firstName"] == p.firstName) {
                chk = true;
            }
        }
        if (chk == false) {
            list.push(p);
            new FileWriter().writePersonData(list);
        }
        else { throw new AddressBookException("Invalid input"); }
    }
}
   
    export let op = new CRUDOperations();