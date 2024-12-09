const obj = {
    name: 'chandru',
    age: 25,
    isActive: false
}

// declaring the function with input as objects
function createUser({ name: string, isPaid: boolean }) { }

createUser({ name: 'chandru', isPaid: true })

// what happens when you need to return object from function

function createCourse(): { name: string, price: number } {
    return { name: 'nodejs', price: 2345 }
}


// weird behaviour of typescript when using objects is
// when we try to add any addtional keys in arguments of function it will throw error

function create({ name: string, isPaid: boolean }) { }

create({ name: 'chandru', isPaid: true, email: 'e@gmeil.com' })

//but the same function when the object is stored in variable and passed as an argument it doesnot throw error

function create1({ name: string, isPaid: boolean }) { }

let req = { name: 'chandru', isPaid: true, email: 'e@gmeil.com' }

create1(req)