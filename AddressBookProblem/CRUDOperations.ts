import { Person } from "./Service/AddressBook";
import { IPerson } from "./IPerson";
import { FileWriter } from "./JsonOp";
var readLineSync = require('readline-sync');
let list = new Array<IPerson>();
class CRUDOperations {

    addUser = () => {
        let firstName: string = readLineSync.question("Enter firstname");
        let lastName: string = readLineSync.question("Enter lastname");
        let address = readLineSync.question("Enter address");
        let city: string = readLineSync.question("Enter city");
        let state: string = readLineSync.question("Enter state");
        let zipcode: string = readLineSync.question("Enter zipcode");
        let phoneNo: string = readLineSync.question("Enter phoneNo");
        let p: IPerson = { firstName, lastName, address, city, state, zipcode, phoneNo };
        list.push(p);
        new FileWriter().writePersonData(list);
    }
}
    export let op = new CRUDOperations();