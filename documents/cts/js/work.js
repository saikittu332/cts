
//first

function str(str1,str2){

    console.log(str1+" "+str2);
}

str("Hello","World")


//second

function ip(add){
    console.log(add.split('.'));
}
ip('10.231.1.12')



//third

function validate(ipadd){


    var str3=[];
    
    str3=ipadd.split(".");

    for(var i=0; i<str3.length;i++){

        if(str3[i]>0 && str3[i]<255){

            continue
        }

        else{

            return false
        }

    }
    return true

}
console.log(validate('10.254.1.267'))




//fourth

function str1(fruits){

   var fruit=[];
   
   fruit= fruits.split('#');

   console.log(fruit)

    // for(var i=0; i<fruit.length;i++)
    // {
    //     console.log(fruit[i]+"")
    // }   
}
str1('apple#orange#grapes#banana')





//fifth

function phone(number){

    var s1=number.substring(0,2);
     var s2=number.substring(2, number.length);
    console.log(s1 +"-"+s2)
}
phone("919962512345")





//sixth

function ph(numb){


var n1=numb.substring(0,3);

var n2=numb.substring(3,numb.length);

console.log(n2)

}
ph("91-9962512345")






//seventh

function pho(num1){


var p1=num1.substring(0,2);

var p2=num1.substring(3,num1.length);

console.log(p1 + p2)

}
pho("91-9962512345")
