"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
console.log('Welcome to Address book');
class Person {
    constructor(person) {
        this.firstName = person.firstName;
        this.lastName = person.lastName;
        this.address = person.address;
        this.city = person.city;
        this.state = person.state;
        this.zipcode = person.zipcode;
        this.phoneNo = person.phoneNo;
    }
    getFname() {
        return this.firstName;
    }
    setFname(name) {
        this.firstName = name;
    }
    getLname() {
        return this.lastName;
    }
    setLname(name) {
        this.lastName = name;
    }
    getAddress() {
        return this.address;
    }
    setAddress(name) {
        this.address = name;
    }
    getCity() {
        return this.city;
    }
    setCity(name) {
        this.city = name;
    }
    getState() {
        return this.city;
    }
    setState(name) {
        this.city = name;
    }
    getZip() {
        return this.zipcode;
    }
    setZip(name) {
        this.zipcode = name;
    }
    getPhone() {
        return this.phoneNo;
    }
    setPhone(name) {
        this.phoneNo = name;
    }
}
exports.Person = Person;
//# sourceMappingURL=AddressBook.js.map