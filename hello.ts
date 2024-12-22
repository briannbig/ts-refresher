function greeter(person: Person) {
    return "Hello " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "Doe" };

type Person = {
    firstName: string,
    lastName: string
}

console.log(greeter(user));