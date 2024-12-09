// Enums are a feature added to JavaScript in TypeScript
// which makes it easier to handle named sets of constants.

// By default an enum is number based, starting at zero,
// and each option is assigned an increment by one. This is
// useful when the value is not important.

enum seatChoice {
    left,
    middle,
    right
}

const seat = seatChoice.left // by default it will assign the value from zero and increment it (if no explicit values are declared)


// you can also declare any values as per our requirement

enum seatChoice1 {
    left = 11,
    middle = 22,
    right = 33
}

enum seatChoice2 {
    left = "left",
    middle = "middle",
    right = "right",
    fourth = "fourth"
}


enum CompassDirection {
    North,
    East,
    South,
    West,
}

// By annotating an enum option, you set the value;
// increments continue from that value:

enum StatusCodes {
    OK = 200,
    BadRequest = 400,
    Unauthorized,
    PaymentRequired,
    Forbidden,
    NotFound,
}

// You reference an enum by using EnumName.Value

const startingDirection = CompassDirection.East;
const currentStatus = StatusCodes.OK;

// Enums support accessing data in both directions from key
// to value, and value to key.

const okNumber = StatusCodes.OK;
const okNumberIndex = StatusCodes["OK"];
const stringBadRequest = StatusCodes[400];

// Enums can be different types, a string type is common.
// Using a string can make it easier to debug, because the
// value at runtime does not require you to look up the number.

enum GamePadInput {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}