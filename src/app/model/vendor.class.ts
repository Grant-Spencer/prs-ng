export class Vendor {
    id: number;
    name: string;
    code: string;
    address: string;
    city: string;
    state: string;
    zip: number;
    phoneNumber: string;
    email: string;

    constructor(id: number = 0, name: string = "", code: string = "", address: string = "", city: string = "", phoneNumber: string = "", email: string = "", state: string ="", zip: number = 0) {
        this.id = id;
        this.name = name;
        this.code = code;
        this.address = address;
        this.state = state;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.zip = zip;
        this.city = city;
    }

}