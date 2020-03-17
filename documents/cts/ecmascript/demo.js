
// console.log("var datatype")
// var sum = 0;

// for (var i = 0; i < 10; i++) {


//     sum += i;
//     console.log(i);
// }


// console.log("i:" + i);



// console.log("let datatype")

// var sum = 0;

// for (let i = 1; i < 10; i++) {


//     sum += i;
//     console.log(i);
// }


// console.log("i:" + i);



// console.log("objects")

// var student = {

//     rollno: 101,
//     name: "ram",
//     talk: function () {

//         console.log("talk");
//     },

//     walk() {

//         console.log("walk");
//     },

//     subjects: ["english", "maths"],

//     marks: {

//         english: 80,
//         maths: 90
//     }


// };

// console.log(student.name);
// console.log(student.talk());
// console.log(student.walk());
// console.log(student.subjects[0]);
// console.log(student.subjects[1]);
// console.log(student.marks.english);

// console.log(student.walk())



// var std = student.walk.bind(student);

// console.log(std())



//class

// class Student {

//     marks = {};
//     subjects = [];
//     constructor(rollNo, name) {

//         this.rollNo = rollNo;
//         this.name = name;
//     }

//     talk() {
//         console.log("talk");
//     }

//     walk() {

//         console.log("walk")
//     }
// }


// var std1 = new Student(101, "ram");

// console.log(std1.rollNo);
// console.log(std1.name);

// std1.walk();


// class Person {

//     constructor(name) {
//         this.name = name;
//     }
// }

// class Student extends Person {

//     constructor(rollNo, name) {

//         super(name); //initialises parent class

//         this.rollNo = rollNo;

//     }

//     talk() {

//         console.log("talk");
//     }

//     walk() {


//         console.log("walk");
//     }

// }


// var student1 = new Student(105, "ram");
// console.log(student1.rollNo);
// console.log(student1.name);

// //Arrow functions

// function add(num1, num2) {

//     return num1 + num2;
// }


//sum of numbers
// var sum = (num1, num2) => { return num1 + num2; }

// console.log(sum(10, 20));

//square of nummber
// var square = num1 => num1 * num1;

// console.log(square(10));

//cube of number
// var cube = num1 => num1 * num1 * num1;

// console.log(cube(10));

//square array of numbers

var arr = [10, 20, 30, 40];

var squa = [];

function sq() {

    for (var i = 0; i < arr.length; i++) {

        squa[i] = arr[i] * arr[i];


    }
    console.log(squa[2])
}

sq()



//mapping

console.log(arr.map(num => num * num));

//filter

console.log(arr.filter(num => num > 20));

//reduuce

console.log(arr.reduce((acc, val) => acc + val));


//destructuring

const address = {

    street: "7th cross",
    area: "Tnagar",
    city: "Chennai"
}

const street = address.street;
// const area = address.area;
// const city = address.city;

// const { street, area } = address;
console.log(street)


function add() {


}