import { Category } from "./category";

export class User {
    username: string;
    
    categories: Category[]; 

    totalBattery: number; 

    // 
    constructor(username: string, userCategories: Category[]) {
        this.username = username; 
        this.categories = userCategories;
        this.totalBattery = 100; 

        this.categories.forEach((category: Category) => {
            this.totalBattery -= category.charge;
        });
         
    }

    // add categories to user catergories list
    addCategory(category: Category) {

        this.categories.push(category); 

    }

    getCategoryAtIndex(index: number): Category {
        if (index >= 0 && index < this.categories.length) {
            return this.categories[index]; 
        } else {
            throw new Error('Index out of bounds');
        }
    }

    checkChargeLevel(index: number, allocatedCharge: number): number {

        if (this.categories[index].charge != 0) {
            if (this.totalBattery + this.categories[index].charge >= allocatedCharge) {
                this.totalBattery += this.categories[index].charge;
                this.totalBattery -= allocatedCharge;

            } else {
                alert("Not enough charge");
            }
        } else if (this.totalBattery >= allocatedCharge && this.totalBattery > 0) {
            this.totalBattery -= allocatedCharge;
        }
        return allocatedCharge;
        

    }

    userAllocatesCharge(index: number, allocatedCharge: number): void {
        this.categories[index].charge = allocatedCharge;
    }

    createNewCategories(name: string, charge: number) {
        if (charge <= this.totalBattery) {
            this.totalBattery -= charge;
        }
        let category = new Category(name, charge);
        this.addCategory(category);
    }


}