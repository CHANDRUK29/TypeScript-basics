//string
let greetings: string = "Hi Hello this is chandru";

greetings.toLowerCase();
console.log(greetings)


// number 
let userId: number = 334546;


// boolean
let isActive: boolean = false


// Note we dont need to explicity mention the types if we are going to assign the value to the variable
// at the moment of the declaration itself as typescript will easily understand the type of variables.

// so above decalration can be written simply as
let userId1 = 233434;
let istrue = false;



// any

/*

when you are not explicitly mention any types it will take it as 'any' type
TypeScript also has a special type, any, that you can use whenever you
 don’t want a particular value to cause typechecking errors.

 we should not use any for all the declarations as it will not typecheck which is use less
Inorder to restrict using any we can use 'noImplicitAny'

noImplicitAny:
When you don’t specify a type, and TypeScript can’t infer it from context, the compiler
 will typically default to any.

You usually want to avoid this, though, because any isn’t type-checked. 
Use the compiler flag noImplicitAny to flag any implicit any as an error
 */

let greet;

function greeting() {
    return "Hello"
}

greet = greeting();

export { }
