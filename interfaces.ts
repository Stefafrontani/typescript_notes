interface Vehicle {
    name: string;
    year: Date;
    color: string;
    summary(): string;
}

const oldCar = {
    name: "civic",
    year: new Date(),
    color: "blue",
    summary() {
        return `Name is ${this.name}`;
    },
};

const printVehicle = (
    vehicle: Vehicle /* instead of this : { name: string; color: string; year: number } */
): void => {
    console.log(`Vehicle name: ', ${vehicle.name}`);
    console.log(`Vehicle year: ', ${vehicle.year}`);
    console.log(`Vehicle color: ', ${vehicle.color}`);
};

printVehicle(oldCar); // TS will iterate over Vehicle interface and see if the properties inside oldCar matches those.
