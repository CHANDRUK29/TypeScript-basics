const superHero: [] = []
superHero.push("Captain America") // since we are decalring empty array it will not accept values

const superHeros: string[] = []
superHeros.push("Captain America")

const powers: number[] = []
powers.push(2);

// we can declare array with types with different syntax
const heroPower: Array<number> = []


// we can create types for array also

type ArrUser = {
    name: string
    isActive: boolean
}

const allUsers: ArrUser[] = [];

allUsers.push("") // it will only accept User
allUsers.push({}) // it cannot be empty

allUsers.push({ name: '', isActive: true })


// you can also able to create 2D array

const twoDArr: number[][] = [
    [255, 255, 255],
    [105, 155, 205],
    [""]  // it will throw error as we are accepting only number types
]