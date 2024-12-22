enum CardinalDirections {
    North = 1, // initialize the values from 1 and increment the rest from there. Default is 0
    East,
    West,
    South
}

console.log("CardinalDirections:", CardinalDirections);

let whereIAmHeading: CardinalDirections = CardinalDirections.North;


console.log("where I Am Heading:", whereIAmHeading, '--->', CardinalDirections[whereIAmHeading]); // North


enum httpErrorCodes {
    BadRequest = 400,
    Unauthorized,
    PaymentRequired,
    Forbidden,
    NotFound,
    Success = 200,
    Accepted = 202,
    NoContent // will be 203 becaus we haven't specified a value
}

console.log("httpErrorCodes:", httpErrorCodes);

// string enums
enum Colors {
    Red = "red",
    Green = "green",
    Blue = "blue"
}

console.log("Colors:", Colors);
console.log("Colors.Red:", Colors.Red);