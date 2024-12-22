let y: unknown = 'hello';
console.log(y, typeof y);
console.log(y.length); // potential error: Object is of type 'unknown'
console.log((y as string).toUpperCase()); // OK
console.log((<string>x).toUpperCase()); // casting also can be done with <>
