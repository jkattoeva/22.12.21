// var example1 = 10 === 10;   //eqauls равняется
// var example2 = 11 > 10;    //more than больше чем
// var example3 = 10 < 11;  //less than меньше чем 
// var example4 = 10 >= 10; //more than or equal больше чем или равняется
// var example5 = 10 <= 10; //less than or eqaul меньше чем или равняется
// var example6 = 11 !== 10; //not eqauls не равняется 


//number
// 1, 2, 3, 4, 5, 10.1
var number1 = 1;
var number2 = 2.3;
var number = 5;

// strings, text
var string1 = "Hello world";
var string2 = "A";
var string3 = "";
var string4 = "5";

// boolean 
var boolean1 = true; //1
var boolean2 = false; //0


// var a = 15;
// var b = 10;
// var example7 = a < b;


// var c = 10;
// var d = 11;
// if (c < d) { //true
//   alert("c is less than d");
// };

// var e = 3.14;
// if (e !== 3.14) { //false
//   alert("Why don't you know number PI?")
// }
// else { //в другом случаи
//   alert('Good job!');
// }

// var age = 20;
// if (age >= 18) {
//   alert("You can vote!");
// }
// else {
//   alert("You are too young to vote!"); //false 
// }

// var lightSwitch = 1;
// if (lightSwitch === 1) {
//   alert("Light is on");
// }
// else {
//   alert("light is off");
// }


// var year = 2000;
// var age  = 2022 - year;
// if (age >= 18) {
//   alert("You can vote");
// }
// else {
//   alert("you are too young to vote");
// }

// var useName = "May";
// var name = useName;
// alert("hi" + useName);









//confirm - позволяет спрашивать у пользователя спрашивать и возвращать к boolean(true or false)



// if (confirm("Do you have a car?")) {
//   if (confirm("Is it red ?")) {
//     alert("You have a car.");
//   }
//   else {
//     alert("You have a car that is not red.");
//   }
// }
// else {
//   if (confirm("Are you planning to have a car?")) {
//     alert("You are planning to a car .");
//   }
//   else {
//     alert("You don't like cars");
//   }
// }


// if (confirm("Do you have a account in Insragram?"))  {

//   if(confirm("Do ou like instagram?")) {
//     alert("It's amazing!!")
//   }
//   else {
//     alert("So sorry...")
//   }
// }
// else {
//   if (confirm("You are want created account in Instagram ?")) {
//     alert("it's so great");
//   }
//   else {
//     alert("So sorry but we jdem vas");
//   }
// }

// функция prompt - позволяет задать или спросить у пользователя что нибудь конкретное , пользователь может вам ответить более детально 

var usename = prompt("What is your name" , "stranger");
// if (usename === "") {
//   usename = "stranger";
// }
alert("Welcome" + usename);

var a = prompt("What is the width of the rectangle?");
var b = prompt("What is the height of the rectangle?");
alert(a + b);
