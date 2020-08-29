"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileWriter = void 0;
const fs = require('fs');
class FileWriter {
    constructor() {
        this.userDetails = [];
        //Method to read json data.
        this.readJsonFile = () => {
            let data = fs.readFileSync('./Person.json');
            this.userDetails = JSON.parse(data);
        };
        //Method to return json data.
        this.returnJsonFile = () => {
            let data = fs.readFileSync('./Person.json');
            return JSON.parse(data);
        };
        //Method to write json data.
        this.writePersonData = (list) => {
            this.readJsonFile();
            let data = this.userDetails.concat(list);
            let a = fs.writeFileSync('./Person.json', JSON.stringify(data));
            this.userDetails.push(a);
        };
        //Method to write json data.
        this.updatePersonData = (list) => {
            this.readJsonFile();
            let a = fs.writeFileSync('./Person.json', JSON.stringify(list));
            this.userDetails.push(a);
        };
        //method to display json data.
        this.displayJSonFile = () => {
            this.readJsonFile();
            this.userDetails.map((i, index) => {
                console.log(index, i);
            });
        };
    }
}
exports.FileWriter = FileWriter;
//# sourceMappingURL=JsonOp.js.map