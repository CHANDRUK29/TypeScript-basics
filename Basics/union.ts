let value: number | string = 25; // union operator

value = 35

value = "55"

type User = {
    name: string;
    id: number;
}

type Admin = {
    username: string
    id: number;
}

let chandru: User | Admin = { name: "chandru", id: 3456 }

chandru = { username: "Admin User", id: 3456 }


// function 

// function getDBId(id: string | number) {
//     console.log(`DB id is: ${id}`)
// }

getDBId(3)
getDBId("3")


function getDBId(id: string | number) {
    if (typeof id === "string") {
        id.toUpperCase()
    }
}

// array

const data: string[] = ["1", "3", "5"]  // only accepts string in array
const data1: number[] = [1, 3, 4, 5] // only accepts number in array
const data2: string[] | number[] = [1, "2"] // it accepts either array should be string or number it cannot contain both

// in order to accept both string and number in same array

const data3: (string | number)[] = [1, 2, "3", 5, "7"]

// for constants also we can use it

let pi: 3.14 = 3.14;
pi = 3.145 // we can able to alter the value 

let seatAllotment: "left" | "middle" | "right" = "left";

seatAllotment = "left";
seatAllotment = "upper" // we cant modify it


