// Number 
let num: number = 22;

// String
let m: string = "mayank";

// Boolean 
let bool: boolean = true;

// Array
let arr: number[] = [1, 2, 3];
let arr1: Array<string> = ["mayank", "bajaj"];

// Tuple
let tup: [number, string, boolean] = [22, "mayank", true];

// Enum
enum role {
    Admin, 
    User,
    Guest
}

// Any
// let something; // bydefault everything is any type
let some: any = "mayank bajaj";

// function
function sum(a: number, b: number): number {
    return a + b;
}
// by default function is always return void

function log() {
    console.log("Hi")
}

// optional and default parameters
function greet(name: string, prefix: string = "Hi") : string {
    return `${prefix}, ${name}`
}
console.log(greet("Mayank"))

// type declaration
let n1: number = 22; // explicit declaration

// type inference
let n2 = 27; // inferred number
let s1 = "mansi"; // inferred string

function double(n: number) {
    return n*2; // inferred number
}

// type alias - khud ke type bana sakte hai
type id = number | string;
type status = "success" | "error" | "loading"

let userId: id = 42;
let state: status = "success";

type MathFn = (a: number, b: number) => number
const divide: MathFn = (a, b) => a / b

type post = {
    description: string,
    image?: string,
    likes: number 
}

// interfaces
let obj = {
    name: "mayank",
    age: 20
}

interface User {
    id: number,
    name: string,
    email?: string,
    readonly role: string
}

let user1: User = { id: 1, name: "mayank", role: "admin" }

// extend
interface Employee extends User {
    salary: number
}

let user2: Employee = { id: 2, name: "mansi", role: "user", salary: 15000 }

// difference b/w type and interface
// interface hum kisi variable ke liye use nhi kar sakte - only for object

type A = {
    a: number
}

type B = {
    b: string
}

type AB = A & B; 

interface X {
    x: number
}

interface Y extends X {
    y: string
}

// union and intersection
type Response1 = "ok" | "fail" |  "loading"
let res: Response1 = "ok"

type Person = { name: string }
type Contact = { phone: string }

type Full = Person & Contact;
const user: Full = { name: "Aman", phone: "123" }

// Generics
function identity<T>(value: T) {
    return value;
}

const n = identity(10)
const s = identity("Mayank") 

// Generic Interface
interface Box<T> {
    value: T
}

const stringBox: Box<number> = {
    value: 12
}

interface user<T> {
    name: string,
    age: T
}

const mayank: user<number> = {
    name: "mansi",
    age: 20
}

// global declaration - kusch type jinko hum globally access karna chahte ho
// written only in - src/types.d.ts

let hello: ApiResponse<string> = {
    data: "1MB"
}

// React with Ts

// props
// type ButtonProps = {
//     label: string,
//     onClick: () => void
// }

// const Button: React.FC<ButtonProps> = ({ label, onClick }) => 
//     <button onClick={onClick}>{ label }</button>