var obj = {
    name: 'chandru',
    age: 25,
    isActive: false
};
// declaring the function with input as objects
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: 'chandru', isPaid: true });
// what happens when you need to return object from function
function createCourse() {
    return { name: 'nodejs', price: 2345 };
}
// weird behaviour of typescript when using objects is
// when we try to add any addtional keys in arguments of function it will throw error
function create(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
create({ name: 'chandru', isPaid: true, email: 'e@gmeil.com' });
//but the same function when the object is stored in variable and passed as an argument it doesnot throw error
function create1(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var req = { name: 'chandru', isPaid: true, email: 'e@gmeil.com' };
create1(req);
