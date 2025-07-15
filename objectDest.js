const user = {
    name: "Simran",
    age : 21
};
const {name, age} = user;
console.log(name);
console.log(age);

const{ name: userName} = user;
console.log(userName);