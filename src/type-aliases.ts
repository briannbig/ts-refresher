//  type aliases allow defining type with a custom name
type carYear = number;
type carType = string;
type carModel = string;

type Car = {
    type: carType,
    model: carModel,
    year: carYear
}

const myCar: Car = {
    type: "Toyota",
    model: "Corolla",
    year: 2020
}

console.log("myCar:", myCar);