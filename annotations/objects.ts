const profile = {
    name: "stefano",
    age: 20,
    coordinates: {
        lat: 0,
        lng: 10,
    },
    setAge(age: number) {
        this.age = age;
    },
};

// Destructuring 0 deep object properties
const { name, age }: { name: string; age: number } = profile;

// Destructuring deeper object properties
const {
    coordinates: { lat, lng },
}: { coordinates: { lat: number; lng: number } } = profile;
