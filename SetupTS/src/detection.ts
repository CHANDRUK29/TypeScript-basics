// it is just to handling the inputs by narrowing them down

function detectType(val: number | string) {
    if (typeof val === "string") { // here we are type checking as we are getting input as either string or number
        return val.toLowerCase()
    }
    return val + 2
}


function provideId(id: string | null) {
    if (!id) {
        console.log("please provide Id")
        return;
    }
    return id.toLowerCase();
}



function printAll(strs: string | string[] | null) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s)
            }
        } else if (typeof strs === "string") {
            console.log(strs)
        }
    }
}