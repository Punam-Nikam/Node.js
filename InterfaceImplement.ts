interface IPerson {
    name: string;
    age: number;

    display(): void;
}

class Person implements IPerson {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    display(): void {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
    }
}

let p1 = new Person("Virat", 21);
p1.display();