interface Vehicle {
    name: string;
    year: Date;
    color: string;
}

interface Reportable {
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

const drink = {
    color: "Brown",
    carbonated: true,
    sugar: 40,
    summary() {
        return `This drink has ${this.sugar} grams of sugar`;
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

/* Refactor */
const printSummary = (item: Reportable): void => {
    console.log(item.summary());
};
