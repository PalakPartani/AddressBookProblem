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
    //updateThroughswitch
    updateUserThroughSetter = () => {
        let data1 = new FileWriter().returnJsonFile();
        // let personModel = new IPerson;
        let per = new Person(data1);
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
        let person: IPerson = data1[index];
        per.setFname(person.firstName);
        per.setLname(person.lastName);
        per.setAddress(person.address);
        per.setCity(person.city);
        per.setState(person.state);
        per.setZip(person.zipcode);
        per.setPhone(person.phoneNo);
        switch (choice) {
            case "1":
                per.setFname(ip)
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
                exit();
            default:
                console.log('Enter Valid number');
                break;
        }
        data1[index] = per;

        return new FileWriter().updatePersonData(data1);
    }
    //delete using name.
    deleteUser = (name: string) => {
        let tempArr = new Array<IPerson>();
        let data = new FileWriter().returnJsonFile();
        for (let k = 0; k < data.length; k++) {
            if (data[k]["firstName"] != name) {
                tempArr.push(data[k]);
            }
        }
        return new FileWriter().updatePersonData(tempArr);
    }
}
    export let op = new CRUDOperations();