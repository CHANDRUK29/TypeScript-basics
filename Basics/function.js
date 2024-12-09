"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(value) {
    return value + 2;
}
addTwo(5);
function toUpper(text) {
    return text.toUpperCase();
}
toUpper("Hi Hello");
function signUp(name, email, isSigned) { }
signUp("Chandru", "chandru@gmail.com", true);
// we can add default parameters to function also
var login = function (name, pass, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
login("test", "test@t.com");
// we have seen how to decalre function and assign parameter types 
//lets see how can we decalre types for function return values
function add(value) {
    return value + value;
}
add(5);
// say if you have to handle this type of scenario what you will do
// function getValue(myVal: number): boolean {
//     if (myVal > 5) {
//         return true
//     }
//     return "200 Ok"
// }
//when you are mentioning the return type function should obviously return value
var getH = function (s) {
    return "";
};
var heros = ["thor", "captian america", "spiderman"];
// we can mention  return type of callback also
heros.map(function (hero) {
    return "Hi hero ".concat(hero);
});
console.log(heros);
