class Vehicle {
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

const vehicle = new Vehicle();
vehicle.drive();
// vehicle.honk(); // Bad - Error - Can not call outside the class

const car = new Car();
car.drive();
// car.honk(); // Bad - Error - can not call outside the class
