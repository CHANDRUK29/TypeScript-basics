// type aliases allows you to create your own types
function createUser(user) {
}
createUser(); // thows error when arguments is not given
createUser({}); // throws error when required fields have not been given
createUser({ name: '', age: 25, isActive: true }); // it is not throwing any error
// say now it it returning the type User
function createUser1(user) { } // it will throw error as we are not returing any thing
function createUser2(user) {
    return { name: '', age: 25, isActive: true }; // it will not throw error as we are returning 
}
var user;
user._id = "23435"; // throwing error as read only property
