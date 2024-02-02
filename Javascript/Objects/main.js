//----Primitve types are always copied as value----

/*let message = "Aniket";
let copiedMessage = message;

console.log("Original Message: ", message);
console.log("Copied message: ", copiedMessage);

copiedMessage = "Aniket updated";

console.log("New Original Message: ", message);
console.log("New Copied message: ", copiedMessage);*/

//----A variable assigned to an object stores not the object itself,
//but its “address in memory” – in other words “a reference” to it.----

/*let user = {
  name: "Aniket",
  age: 25,
};

let copiedUser = user;

console.log("Original User: ", user);
console.log("Copied User: ", copiedUser);

copiedUser.name = "New Aniket";
copiedUser.age = 26;

console.log("New Original User: ", user);
console.log("New Copied User: ", copiedUser);*/

//----Comparison by ref----

/*const user = {
  name: "Aniket",
};

const copiedUser = user;

console.log(user == copiedUser);
console.log(user === copiedUser);*/

//----Const Objects can be modified----

/*const user = {
  name: "Aniket",
};

console.log("Before modification user: ", user);

user.name = "New Aniket";

console.log("After modification user: ", user);*/

//---Cloning and Merging---

//Clone examples

/*const user = {
  name: "Aniket",
  age: 25,
  city: "Pune",
};

const clone = {};

for (let key in user) {
  clone[key] = user[key];
}

console.log("Original user: ", user);
console.log("Clone user: ", clone);

console.log(clone === user);*/

//----Clone using Object.assign()----

/*const user = {
  name: "Aniket",
};

const age = {
  age: 26,
};

const clone = {};

Object.assign(clone, user, age);

console.log("Original user: ", user);
console.log("Clone user: ", clone);

console.log(clone === user);*/

//----Nested Cloning----

/*const user = {
  name: "Aniket",
  choices: {
    color: "Red",
    fruit: "Mango",
    Lang: {
      frontEnd: "JS",
      backEnd: "JS",
    },
  },
};

const clone = structuredClone(user);

console.log(clone.choices.Lang === user.choices.Lang);*/
