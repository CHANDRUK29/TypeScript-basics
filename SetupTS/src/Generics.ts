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