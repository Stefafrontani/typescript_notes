class Vehicle {
    // color: string;
    // constructor(color: string) {
    // this.color = color;
    // }
    /* Same as this: */
    constructor(
        public color: string,
        private model: number,
        protected safe: boolean
    ) {}

    public drive(): void {
        console.log("chugga chugga");
    }

    // Default modifier : public
    private honk(): void {
        console.log("bepp");
    }

    protected stop(): void {
        console.log("Stop!");
    }
}

class Car extends Vehicle {
    // Override drive method
    drive(): void {
        console.log("vrrooom|");
    }

    printMethodsOutput(): void {
        // this.honk(); // Bad - Method private can not be called inside child class
        this.stop(); // Good - Method protected not private. Can be called it inside child class methods
    }
}

const vehicle = new Vehicle("orange", 1994, true);
vehicle.drive();
// vehicle.honk(); // Bad - Error - Can not call outside the class

const car = new Car("black", 2000, false);
car.drive();
// car.honk(); // Bad - Error - can not call outside the class
