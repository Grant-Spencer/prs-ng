export class Product {
    id: number;
    vendor: string;
    partNumber: string;
    name: string;
    price: number;
    unit: String;
    photoPath: String;
    

    constructor(id: number = 0, vendor: string = "", partNumber: string = "", name: string = "", price: number = 0, unit: string = "", photoPath: string = "") {

        this.id = id;
        this.vendor = vendor;
        this.partNumber = partNumber;
        this.name = name;
        this.price = price;
        this.unit = unit;
        this.photoPath = photoPath;
      
    }

}