


class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

const jane = new Person('Jane', 31);

console.log('[Exercise 5]', `The new person's name is ${jane.name}.`);