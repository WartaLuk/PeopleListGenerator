const os = require("os");
const fs = require("fs");

console.log("Platform: ", os.platform());
console.log("Arch: ", os.arch());
console.log("UserInfo", os.userInfo());

const genders = ["female", "male"];
const femaleNames = [ "Rebecca", "Susan", "Nancy","Margaret", "Patricia", "Jennifer"];
const maleNames = ["Nicholas", "Lucas", "Jonathan", "Patrick", "Ethan"];
const lastnames = ["Cox", "Lee", "Scott", "Baker", "Walker", "Lewis"];
const people = [];

const randChoice = function (arr) {
  const result = arr[Math.floor(Math.random() * arr.length)];
  return result;
};
for (let i = 0; i < 20; i++) {
  const person = {};

  person.gender = randChoice(genders);
  if (person.gender === "femae") person.name = randChoice(femaleNames);
  else person.name = randChoice(maleNames);
  person.lastname = randChoice(lastnames);
  person.age = Math.floor(Math.random() * 100);
  person.email =
    person.name.toLowerCase() +
    "." +
    person.lastname.toLowerCase() +
    "@gmail.com";
  //??toLowerCase??
  person.phoneNumber = Math.floor(Math.random() * (10 ** 8 * 8) + 10 ** 8);
  people.push(person);
}

const data = JSON.stringify(people);

fs.writeFile("people.txt", data, (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});

console.log(people.length);
