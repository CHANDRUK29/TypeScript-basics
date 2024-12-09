// so inorder to control in array in which order the datatypes are stored with help of tuples

const user: (string | number)[] = [1, "2"] // here we can decalre array as either [1,"3"] or ["2",5] it will 
//not throw error but in tuples the order should be correct

let tUser: [string, number, boolean]

tUser = ["1", 2, "2"] // it will throw error as tuple declaration and  its value is not same
tUser = ["1", "2", true]
tUser = ["1", 2, true]


let rgb: [number, number, number] = [255, 178, 136]

type User1 = [number, string];

const newUser: User1 = [112, "example@google.com"]

newUser[1] = 2 // as tuples will not allow you to change the data type
