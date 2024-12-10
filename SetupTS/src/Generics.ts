const score: Array<number> = []
const names: Array<string> = []

function identityOne(val: number | string): number | string {
    return val;
}

// here it is taking any type as input and any type as input
// so we can pass number as input and return string or boolean it will accept
function identityTwo(val: any): any {
    return val;
}


// generics

// but in generics Type <Type> is similar to any but if it accepts number as input it will log number as output

function identityThree<Type>(val: Type): Type {
    return val;
}

identityThree(2)
identityThree("hi")
identityThree(true)

// we can also use shorter syntax for generics

function identityFour<T>(val: T): T {
    return val;
}


// we can also you our own types 

interface Bottle {
    brand: number,
    type: string
}

identityFour<Bottle>({ brand: 123, type: 'tupperware' })


// Generics in Array

function searchProducts<T>(products: T[]): T { // here we are taking array as an input but output should be any on type of array
    return products[3]
}


// we can also convert the above function as arrow function
// syntax for arrow functions
const searchMoreProducts = <T>(products: T[]): T => {
    return products[4]
}


// generics can take mutiple types in in

function anotherFunction<T, U>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}

anotherFunction(2, "3")

// there are some scenarios where we will be having specific datatype to genrics
// we can do that using extends keyword
function anotherFunction1<T, U extends number>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}

anotherFunction1(2, "3") // as we are extending the number it throws error
anotherFunction1(2, 4.6)

// we can also extends interfaces also

interface DataBase {
    connection: string,
    userName: string,
    password: string
}

function anotherFunction2<T, U extends DataBase>(valOne: T, valTwo: U): object {
    return {
        valOne,
        valTwo
    }
}

anotherFunction2(1, { connection: "", password: "", userName: "" })


// we can add generics for classes also

class Sellable<T> {
    public cart: T[] = []

    addToCart(product: T) {
        this.cart.push(product)
    }
}
