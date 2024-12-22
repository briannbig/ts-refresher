class Book {
    private readonly title: string;
    author: string;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }

    getTitle() {
        return this.title;
    }

    tosString() {
        return `Book [${this.title} by ${this.author}]`;
    }
}

const book = new Book("The Great Gatsby", "F. Scott Fitzgerald");
console.log(book.tosString());

interface Shape {
    getArea(): number; // common function
    getPerimeter: () => number; // arrow function
}

class Circle implements Shape {
    constructor(private radius: number) { }

    getArea() {
        return Math.PI * this.radius ** 2;
    }

    getPerimeter = () => 2 * Math.PI * this.radius;
}

const circle = new Circle(10);

console.log("Circle area:", circle.getArea());
console.log("Circle perimeter:", circle.getPerimeter());

// Inheritance

class Magazine extends Book {
    constructor(title: string, author: string, private issue: number) {
        super(title, author);
    }

    getIssue() {
        return this.issue;
    }

    override tosString(): string { // override method
        return `Magazine [${this.getTitle()} by ${this.author} - Issue ${this.issue}]`;  
    }
}

const magazine = new Magazine("Time", "Time Inc.", 1);
console.log(magazine.tosString());


// Worth noting: Abstract classes -  same as in Java, can't be instantiated