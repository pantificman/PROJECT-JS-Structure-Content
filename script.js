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
 function sumAll(){
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
myObj.fullName();
