import { IPerson } from "./IPerson";
const fs = require('fs');
export class FileWriter {
    userDetails: any[] = [];

    //Method to read json data.
    readJsonFile = () => {
        let data = fs.readFileSync('./Person.json');
        this.userDetails = JSON.parse(<any>data);
    }

    //Method to write json data.
    writePersonData = (list: Array<IPerson>): void =>
    {
        this.readJsonFile();
        let data = this.userDetails.concat(list);
        let a = fs.writeFileSync('./Person.json', JSON.stringify(data));
        this.userDetails.push(a);
    }

    //method to display json data.
    displayJSonFile = () => {
        this.readJsonFile();
        this.userDetails.map((i, index) => {
            console.log(index, i);
        })
    }
}