// any type is a special type that can be assigned to any type of value
let u: any = true;
u = "string";
let v = Math.round(u)

console.log("typeof u:", typeof u, " value:", u)
console.log("typeof v:", typeof v, " value:", v)

// Unknown type is similar to any type, but it is not assignable to other types without a type assertion
let x: unknown = true;
x = "string";

// x = Math.round(x) // Error: Object is of type 'unknown'