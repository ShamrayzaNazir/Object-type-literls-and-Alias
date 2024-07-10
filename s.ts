// tsc -w   use for bar bar compile k liye tsc ni likhna prta terminal me



let student = {
    name : 'Sherry',
    age : 22,
    class : 16

}
console.log(student);
console.log(student.name);
console.log(student.class);
console.log(student.age);


// type literls , object literls

let student1: {
    name: string,
    age: number,
    class: number,
} = {
    name : 'Sherry',
    age : 22,
    class: 16,
} 


// type Alias    , union  &  intersection

type std = {        // ziada code hony ki wja se type bnaty hen phr kisi b time assign kr skty h
    name: string,
    age: number,
    class: number,
}

let std50: std = {
    name: 'Sherry',
    age: 22,
    class: 16,
}

let std51: std = {
    name: 'Bhatti',
    age: 24,
    class: 16,
}


// Union

let fname : string | number| boolean 
fname = "Sherry"
fname = 22
fname = true 

// example
let traficlights : "red" | "yellow" | "green"
traficlights = "red" , "yellow" , "green"


// Inter Section

type teacher = {
    name: string,
    facid : number,
    salary : number
    position : string,
}

type std1 = {        
    name: string,
    age: number,
    class: number,
}

let person : teacher & std1 = {
    name : "Maryam",
    facid: 1,
    salary: 30000,
    position: "teacher",
    age : 22,
    class: 16,
}

console.log(person);   // . lga k kisi 1 ka b check kr skty hen.

