import obj from "./resume.json" assert { type: "json" }; // imported the json as a object here

let keys = Object.keys(obj); // finding the keys in object for utilization in of loop
let internalKeys = [];
console.log(".......... looping through for of........"); // this is used to differentiate output of various loops

for (let key of keys) {
  internalKeys.push(Object.keys(obj[key]));
}
console.log(internalKeys);

console.log(".......... looping through for in........");

for (let i in obj) {
  console.log(i);
  console.log(obj[i]);
}

console.log(".......... looping through simple for........");

for (let j = 0; j < internalKeys.length; j++) {
  console.log(internalKeys[j]);
}

console.log(".......... looping through for each........");

Object.keys(obj).forEach((key) => {
  console.log(key, obj[key]);
});
