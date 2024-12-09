"use strict";
class User {
    constructor(email, name) {
        this.city = "";
        this.state = "TamilNadu";
        this.email = email;
        this.name = name;
    }
}
const chandru = new User("ch@gamil.com", "chandru");
chandru.city = "chennai";
chandru.city = 2; // as we declared the type as string it will not accept number
chandru.state = "Kerala"; // as it is read only we cant able to update
// private and Public in Classes
class User1 {
    constructor(email, name) {
        this.city = "";
        this.email = email;
        this.name = name;
    }
}
const user1 = new User1("ch@gamil.com", "chandru");
user1.email;
user1.name; // as it is in private mode you can able to access it outside the class(but you can access it inside the class)
// you can also rewrite the above syntax in simpler form
class User2 {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this.city = "";
    }
}
const user2 = new User2("ch@gamil.com", "chandru", 1234);
user2.email;
user2.name;
// Getter and Setters
class User3 {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 0;
        this._userCount = 0;
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    // setter will not allow you to add return type to it (interview question)
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
    // we can also create private methods also
    deleteToken() {
        console.log("token deleted successfully");
    }
}
const user3 = new User3("ch@gamil.com", "chandru");
user3._userCount;
// Protected Key word
class subUser extends User3 {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    updateCourseCount() {
        this._courseCount = 4; // as it is private we cannot be able to access it outside the class
        this._userCount = 5; // as usercount is declared as protected it can be accessible to its own classes and it sub classes and not accessible outside the classes
    }
}
