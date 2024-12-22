let names: string[] = []; // initialize an empty array of strings
names  = ['Alice', 'Bob', 'Charlie']; // assign an array of strings

console.log("initial names:", names);

names.push('David'); // add an element to the end of the array
console.log("names after push:", names);

// names.push(3); // Error: Argument of type '3' is not assignable to parameter of type 'string'

// readonly array
const lastNames: readonly string[] = names;
// lastNames.push('David'); // Error: Property 'push' does not exist on type 'readonly string[]'