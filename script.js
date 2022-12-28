//Implement a function which convert the given boolean value into its string representation.
//Note: Only valid inputs will be given.
/* function booleanToString(b){
    b = String(b);
 } */
 
 /* let arr = [];
 let exmpl=arr.length;
 arr[0] = "secElm";
 arr[1] = 1;
 arr[2] = "fourElm";

 console.log("arr");

 var playerName = "John";
 var playerScore = 50;

 var myMsq = playerName + playerScore;
 console.log(myMsq);

 let c = 10,
     d = 6;
     if(c == d){
        console.log("The numbers are equal");
     } else {
        console.log("The numbers is NOT equal");
     }

let a =10;
    while(a<20){
        console.log(a);
        a++;
    }

let cars = ["BMW","Volvo", "Porsch", "Alfa Romeo"];
let i = 0;
let text = "";
while(cars[i]){
    text += cars[i] + "<br>";
    i++;
}
console.log(text); */
/* let cars = ["BMW","Volvo", "Porsch", "Alfa Romeo", "Ferrari", "Opel"];
let text = "";
for(let i = 0; i < cars.length; i++){
    text += cars[i]  + "<br>";
}
console.log(text); */

/* function NewFunct(a,b){
    return arguments.length;
}
NewFunct(3,4); */
 /* function sumAll(){
    let i,
        sum = 0;
        for (i = 0; i < arguments.length; i++){
            sum += arguments[i];
        }
        return sum;
 }
 let x;
 x = sumAll(1, 123, 500, 115, 42, 82);

 let myObj = {
    firstName: "John",
    lastName: "Smith",
    fullName: function (){
        return this.firstName + " " + this.lastName;
    }
 };
myObj.fullName(); */

          //Interpolation
/* let nameUser = "John";
alert(`hello ${nameUser}`);

let x = "quick";
x.toString();
x.toUpperCase();

let a = "Joe";
const b = new String("Joe");
if (a === b){
    console.log("Nuimbers is eqiual");
} else {
    console.log("numbers is not equal");
}

let d = new Date("March 25 2015");
console.log(d);

d.getData();
d.getDay();
d.getFullYear();
d.getUTCMonth();

var person = {
    userName: "Tonny",
    userLastName: "Hawks",
    age: "40"
};
console.log(person);


var f = 1; var e = 2; if (a = b) {//выполнить некоторый код
} */

/* msgBox("khg");
alertBox("jhknm");
window.SharedWorker("ghghb");
alert("gyjgh"); */

//conditions

/* let nam = 25;

switch(nam){
    case 22: console.log("error");
    break;
    case 45: console.log("more");
    break;
    case 25: console.log("ok");
    break;
    default: console.log("not today");
}

//ternary operator
(nam == 50)? console.log("right") : console.log("not right");

let num2 = 55;
for (let i = 0; i < 10; i++){
    console.log(num2);
    num2++;
} */

/* let str = "",
    num2 = 7;
for (let i = 0; i < num2; i++){
    console.log(str = str + "*");
    
}

function showThis(f, r){
    console.log(this);
}
showThis(5,6);

const myBtn = document.getElementById("btnClick");
console.log("myBtn");

const myPar = document.getElementById("pWrap");
const content = myPar.innerHTML;
console.log(content); */

/* var mainTitle = document.getElementById("mainTitle");
console.log("This is an element of type: ", mainTitle.nodeType);
console.log("The inner HTML is ", mainTitle.innerHTML);
console.log("There are this many child objects", mainTitle.childNodes);

document.getElementById("mainTitle").innerHTML = "This is a changed Title"; */

/* let mylistItem = document.createElement("li");
let myTextNode = document.createTextNode("The Hobbit");
mylistItem.appendChild(myTextNode);

let books = document.getElementById("books");
books.appendChild(mylistItem);
 */

document.getElementById("btnClick").onclick = function (){alert("Hi");};

document.getElementById("homeBtn").addEventListener("click", function(){prompt("Where do you live?");});
document.getElementById("homeBtn").addEventListener("mouseover", function()
        {document.getElementById("homeBtn").style.backgroundColor = "orange";
    });