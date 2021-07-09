// Primitive : number , string , boolean
// More Complex types: arrays, objects
// Function Types, Parameters

// Primitive

let age : number;

age = 12;

let userName : string;

userName = 'Shubh';


let isInstructor : boolean;

isInstructor = true;

let hobbies : string[];

hobbies = ['Sports', 'Cooking'];

type Person =  {
    name: string;
    age:number;
};

let person : Person;

person = {
    name: 'Shubham',
    age:32,
};

let people: {
    name: string;
    age: number ;
}[];

// Type Inference 

let course: string | number = 'React - The Complete Guide';

course = 12341;

// Function And Types

 function add (a: number,b: number) {
     return a+b;
 }

 function print (value: any) {
     console.log(value);
 }

 // Generics 

 function insertAtBeginning<T>(array:T[], value: T) {
     const newArray = {value, ...array}
     return newArray;
 }

 const demoArray = [1,2,3];

 const updatedArray = insertAtBeginning(demoArray, -1);   // -1 1 2 3
 const stringArray = insertAtBeginning(['a','b','c','d'], 'e');

//  updatedArray[0].split ('');