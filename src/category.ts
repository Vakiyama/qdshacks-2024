import {User} from "./user"; 

export class Category {

    charge: number; 

    name: string;

    constructor(categoryName: string, chargeLevel: number) {
        this.charge = chargeLevel; 
        this.name = categoryName; 
    }
    
}