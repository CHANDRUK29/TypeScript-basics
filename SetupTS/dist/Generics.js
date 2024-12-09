"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
// here it is taking any type as input and any type as input
// so we can pass number as input and return string or boolean it will accept
function identityTwo(val) {
    return val;
}
// generics
// but in generics Type <Type> is similar to any but if it accepts number as input it will log number as output
function identityThree(val) {
    return val;
}
identityThree(2);
identityThree("hi");
identityThree(true);
// we can also use shorter syntax for generics
function identityFour(val) {
    return val;
}
identityFour({ brand: 123, type: 'tupperware' });
