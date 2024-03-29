/** @format */

let userName = "Max";
// userName = 34; // this cant be done because typescript care about the types and this variable is a string typed variable

// !HINT: But in javascript we can do this
// string type
let Name: string = "dad";
// number type
let userAge: number = 20;
// boolean type
let isValid: boolean = true;

// @ Sometime we need a variable to be more than one type for example somewhere it should be string and somewhere it should be number

let userId: string | number = "abc";
console.log(userId);
userId = 123;
console.log(userId);

/*
let user;
let user : object;
*/

// ++ Custom type:
type StringOrNum = string | number;
type User = {
  name: string;
  age: number;
  isAdmin: boolean;
  id: StringOrNum;
};

let user: User;
/*
let user: {
  name: string;
  age: number;
  isAdmin: boolean;
  id: stringOrNum;
};
*/
user = {
  name: "Max",
  age: 12,
  isAdmin: true,
  id: "abc",
};

// let hobbies: Array<string>;
let hobbies: string[]; // number[],boolean[]
// {name : string,age: number}

hobbies = ["Sports", "Cooking", "Reading"];

const API_KEY = "abc";

function add(a: number, b: number): number {
  const result = a + b;
  return result;
}

// ++ Custom type
type AddFn = (a: number, b: number) => number;
function calculate(
  a: number,
  b: number,
  // calcFn: (a: number, b: number) => number
  calcFn: AddFn
) {
  calcFn(a, b);
}
calculate(5, 3, add);

interface Credentials {
  password: string;
  email: string;
}
let creds: Credentials;
creds = {
  password: "abc",
  email: "sina@gmail.com",
};
/*
type Admin = {
  permission: string[];
};
type AppUser = {
  username: string;
};
type AppAdmin = Admin & AppUser;

let admin: AppAdmin;
admin = {
  permission: ["login"],
  username: "sina",
};
*/
interface Admin {
  permission: string[];
}
interface AppUser {
  username: string;
}
interface AppAdmin extends Admin, AppUser {}

let admin: AppAdmin;
admin = {
  permission: ["login"],
  username: "sina",
};

type Role = "admin" | "user" | "editor";
let role: Role;
role = "admin";
role = "user";
role = "editor";
//! role = "abc";

function performAction(action: string | number, role: Role) {
  if (role === "admin" && typeof action === "string") {
    // ...
  }
}

type DataStorage<T> = {
  storage: T[];
  add: (data: T) => void;
};

const textStorage: DataStorage<string> = {
  storage: [],
  add(data) {
    this.storage.push(data);
  },
};
const useStorage: DataStorage<User> = {
  storage: [],
  add(user) {},
};
function merge<T, U>(a: T, b: U) {
  return {
    ...add,
    ...b,
  };
}

// const newUser = merge<{ name: string }, { age: number }>(
//   { name: "Max" },
//   { age: 20 }
// );
// @ Or we can write the newUser like this:
const newUser = merge({ name: "Sina" }, { age: 20 });
