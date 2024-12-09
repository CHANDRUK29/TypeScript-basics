// type aliases allows you to create your own types

type User = {
    name: string;
    age: number;
    isActive: boolean;
}

function createUser(user: User) {

}

createUser() // thows error when arguments is not given

createUser({}) // throws error when required fields have not been given

createUser({ name: '', age: 25, isActive: true }) // it is not throwing any error


// say now it it returning the type User

function createUser1(user: User): User { } // it will throw error as we are not returing any thing

function createUser2(user: User): User {
    return { name: '', age: 25, isActive: true } // it will not throw error as we are returning 
}


// READ ONLY AND OPTIONAL

type myUser = {
    readonly _id: string // cannot be editable
    name: string;
    email: string;
    isActive: boolean;
    creditCardDetails?: string // Optional field
}

let user: myUser;

user._id = "23435"  // throwing error as read only property



/// you can create and merge mutliple types also

type cardNumber = {
    cardNo: string
}

type cardDate = {
    data: string
}

type cardDetails = cardNumber & cardDate & { cvv: number } // as we are merging here

