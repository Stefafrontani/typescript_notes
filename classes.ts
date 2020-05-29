class Vehicle {
    drive(): void {
        console.log("chugga chugga");
    }

    honk(): void {
        console.log("bepp");
    }
}

class Car extends Vehicle {
    // Override drive method
    drive(): void {
        console.log("vrrooom|");
    }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();

const car = new Car();
car.drive();
car.honk();
