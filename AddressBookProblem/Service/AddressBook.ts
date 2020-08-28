import { IPerson } from "../IPerson";

console.log('Welcome to Address book');
export class Person implements IPerson{
 
    public constructor(person:IPerson) {
        this.firstName = person.firstName;
        this.lastName = person.lastName;
        this.address = person.address;
        this.city = person.city;
        this.state = person.state;
        this.zipcode = person.zipcode;
        this.phoneNo = person.phoneNo;
    }
 
    //field names
    firstName: string;
      getFname(): string {
       return this.firstName;
    }
    setFname(name: string) {
        this.firstName = name;
    }
    lastName: string;
     getLname(): string {
        return this.lastName;
    }
     setLname(name: string) {
        this.lastName = name;
    }
    address: string;
    getAddress(): string {
        return this.address;
    }
    setAddress(name: string) {
        this.address = name;
    }
    city: string;
     getCity(): string {
        return this.city;
    }
     setCity(name: string) {
        this.city = name;
    }
    state: string;
     getState(): string {
        return this.city;
    }
    setState(name: string) {
        this.city = name;
    }
    zipcode: string;
    getZip(): string {
        return this.zipcode;
    }
     setZip(name: string) {
        this.zipcode = name;
    }
    phoneNo: string;
    getPhone(): string {
        return this.phoneNo;
    }
    setPhone(name: string) {
        this.phoneNo = name;
    }
}