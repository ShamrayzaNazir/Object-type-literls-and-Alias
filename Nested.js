// Any 
// is me hm sari data types use kr skty hen
var num;
num = "4";
num = 5;
num = true;
// object    
var info = {
    name: "Sherry",
    age: 24,
    subject: "Islamyat"
};
console.log(info);
console.log(info.name);
var car_structure = {
    brand: "corolla",
    mode: "2024",
    price: 200000,
    StartEngine: function () {
        console.log("The engine is starting");
    },
    carNames: ["corolla", "Mehran", "cultus"]
};
console.log(car_structure.StartEngine);
car_structure.StartEngine();
console.log(car_structure.carNames);
// unknown 
// bad me btaen gi Mam
// never    error deny k liye use krty h
var error;
//never = 55
// Nested Object
// is me hm object me object use krty hen 
var person = {
    name: "Nazir",
    age: 48,
    Child: {
        name: "Sherry",
        age: 24,
        grade: 16
    }
};
console.log(person);
console.log(person.Child);
console.log(person.Child.name);
