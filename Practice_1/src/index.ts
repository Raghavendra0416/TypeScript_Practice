const log = console.log;
let a: number = 10;
console.log(a + 10);

if (a < 20)
    a = a + 10;

console.log('a:', a);

let b: readonly [number, boolean] = [1, true];
console.log('b:', b);

// b.push(2);
// log('updated:', b);

const enum Size { small = 1, medium, big, extraLarge = 'k' };
let mySize: Size = Size.big;

console.log(mySize);
log(typeof mySize);

//---------------------------------------------------------------------------

//Obj -> More boiler plate, hard to create new employees
// let employee: {
//     readonly id: number, //connot be changed if initlized once. Readonly
//     name: string,
//     present?: boolean,  // ? -> mean optional
//     retire: (date: Date) => void,
// } = {
//     id: 1,
//     name: 'Raghav',
//     retire: (date: Date) => {
//         log(date);
//     }
// }

//Obj -> less boiler plate, can create employees easily
type Employee = {
    readonly id: number, // cannot be changed if initialized once. Readonly
    name: string,
    present?: boolean,  // ? -> mean optional
    retire: (date: Date) => void,
}
let employee: Employee = {
    id: 1,
    name: 'Raghav',
    retire: (date: Date) => {
        log(date);
    }
}

log('Employee: ', employee);
//-------------------------------------------------------

//Union
// Providing a | is called union
"use Strict";
function kgToLbs(weight: number | string) {
    //The below condition is called Narrowing:
    if (typeof weight === 'number')
        return weight * 2.2;
    else {
        console.log('weight is string');
        return parseInt(weight) * 2.2;
    }
}

log(kgToLbs(10));
kgToLbs('10Kg');

//------------------------------------
//Intersection
type Draggable = {
    drag: () => void,
}

type Resizable = {
    resize: () => void,
}

//by using both of the above we can create an variable by using '&' -> this is called intersection
// & is intersection, we are creating variable with both types like string and number.

type UIWidget = Draggable & Resizable;
let textBox: UIWidget = {
    drag: () => { },
    resize: () => { },
}
log(typeof textBox);

//--------------------------------

//Literal Types
//Types can either be string/boolean/functions/objects...
type val = 50 | 100;
let c: val = 50;
log('typeOf c:', typeof c, 'c:', c);

//----------------------------------

//Nullable Types
function greet(name: string | null | undefined): void {
    if (name)
        log(`Hello ${name.toUpperCase()}!`);
    else
        log('Null | Undefined');
}

// greet(null) -> will throw error as null is not excpected.
// Function is expecting String. greet(name: string): void {...}
// But we can do -> greet(name: string | null): void {..}
// The same goes for undefined. greet(name: string | null | undefined): void {...}
greet(null);
greet(undefined);
greet('Raghavendra');

// To overcome this we can use optional chaining.

//---------------------------

//Optional Chaining
type Customer = {
    birthday: Date,
}

function getCustomer(id: number): Customer | null | undefined {
    return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);
//instead of doing the below we can just use optional chaining.
// if (customer !== null && customer !== undefined)
// log(customer?.birthday);

// Optional Chaining -> '?.' use them.
log(customer?.birthday); //-> produces output because the input is not null or undefined.
log(customer?.birthday.getFullYear()); //-> undefined. because getFullYear is not present. 
// But can be handled using `?.`

//Optional Element operator
//if customer is an array and while accessing we can use:
// customer?.[0]

//Optional Call
let logging: any = null;
logging?.('a'); // Trying to access the 'a' which is not present.

