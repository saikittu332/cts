var a = 10;

console.log(a);

// document.write("hello");


//inserting output inside an html
function display() {
    document.getElementById("p1").innerHTML = "hello world"
}

// console.lof(typeof)
// document.getElementById('p1').innerHTML = 'hello world'


// var str="this is a 'simple' text";
// var str='this is a "simple" text';
// var str="this is a \"simple\" text";
// var str="this is a "simple" text";
// var num1=10;
// var num2="10";
// var nmae="ram";
// console.log(typeof(num1));
// typeof(name);
// num1==num2;
// num1===numm2;
// num1 != num2;
// num !== num2;
// num1 + name
// num1 + name + num2

str = "hello world";

console.log(str);


function div(num1, num2) {

    try {
        return num1 / num2;

    } catch (err) {
        alert(err)
    }
    finally {
        alert("finally block")
    }

}


// console.log(div(10, 10));

function div(num1, num2) {

    try {
        if (num2 == 0) {
            throw {
                message: "num2 value should be greater than 0",

                errcode: 1001
            };
        }
        return num1 / num2;
    } catch (err) {
        alert(err.errcode)
    }
}

console.log(div(10, 0));,



