// Primitives
let age: number;
age = 12;

let userName: string;
userName = 'Juan';

let isInstructor: boolean;
isInstructor = true;

// More complex types
let hobbies: string[];
hobbies = ['Sports', 'Cooking'];

let person: {
    name: string;
    age: number;
};
person = {
    name: 'Max',
    age: 32,
}

let people: {
    name: string;
    age: number;
}[];
people = [person, person];

// Type inference
let course = 'React - The Complete Guide';
// course = 123; is wrong

// Union Types
let id: string | number;
id = 123;
id = '123';

// Type Aliases
type Person = {
    name: string;
    age: number;
}
let personArray: Person[];
personArray = [person, person];
let personObject: Person;
personObject = person;

// Function types
function add(a: number, b: number): number {
    return a + b;
}

add(1, 2);

function printOutput(value: any): void {
    console.log(value);
}

printOutput('test');

// Generics
function insertAtBeginning<T>(array: T[], value: T) {
    return [value, ...array];
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1);
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');
// updatedArray[0].split(''); is wrong because it detects numbers
stringArray[0].split('');
