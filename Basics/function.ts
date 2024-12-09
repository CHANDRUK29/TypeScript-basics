function addTwo(value: number) {
    return value + 2
}
addTwo(5)

function toUpper(text: string) {
    return text.toUpperCase();
}
toUpper("Hi Hello");

function signUp(name: string, email: string, isSigned: boolean) { }

signUp("Chandru", "chandru@gmail.com", true)


// we can add default parameters to function also
const login = (name: string, pass: string, isPaid: boolean = false) => { }

login("test", "test@t.com")

// we have seen how to decalre function and assign parameter types 
//lets see how can we decalre types for function return values

function add(value: number): number {
    return value + value
}

add(5)

// say if you have to handle this type of scenario what you will do
// function getValue(myVal: number): boolean {
//     if (myVal > 5) {
//         return true
//     }
//     return "200 Ok"
// }


//when you are mentioning the return type function should obviously return value
const getH = (s: string): string => {
    return ""
}


const heros = ["thor", "captian america", "spiderman"]

// we can mention  return type of callback also
heros.map((hero): string => {
    return `Hi hero ${hero}`;
})

console.log(heros)

// say that we have a function that will not return anything

function consoleError(errmsg: string): void {
    console.log(errmsg)
}
consoleError("internal server error")


// say if function is expected to throw error

//The never type represents values which are never observed. In a return type, 
//this means that the function throws an exception or terminates execution of the program.
function handleError(errmsg: string): never {
    throw new Error(errmsg);
}

export { }