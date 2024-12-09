interface NewUser {
    readonly dbId: number;
    email: string;
    userId: number;
    googleId?: string;
    //startTrail : ()=>string // function declaration (returning string)
    startTrial(): string; // function can also be declared using this way
    getCoupon(couponName: string, value: number): number
}

// reopening of interface (we can update interface without touching the existing interfcae by creating the interface with same name)

interface NewUser {
    githubId: string
}

let use: NewUser = {
    dbId: 22,
    email: 'c@gmail.com',
    githubId: "213423",
    userId: 1122,
    startTrial: () => { return "something" },
    getCoupon: (name: "Chandru", value: 10) => {
        return value
    }
}

use.email = "ch@gmail.com"
use.dbId = 1233 // it will throw error as we not we cannot able to change readonly values


// you can also inherit the existing interface also

interface AdminUser extends NewUser {
    role: "admin" | "user" | "manager"
}