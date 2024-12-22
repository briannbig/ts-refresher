const car: {type:string, model:string, year:number} = {
    type: "Toyota",
    model: "Corolla",
    year: 2020
}

console.log("car:", car);


const bike: {type:string, mileage?:number} = { // optional property - mileage
    type: "Honda",
}

bike.mileage = 50;

console.log("bike:", bike);