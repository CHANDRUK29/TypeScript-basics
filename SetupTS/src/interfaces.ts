interface TakePhoto {
    cameraMode: string
    filter: string
    burst: number
}

/* interface like a set of rules or a blueprint that any class can agree to follow. 
The classes that implement the interface must provide their own specific implementation
 for the methods defined in the interface. */


interface Story {
    createStory(): void
}

class Instgram implements TakePhoto { // it is throwing error as iam not using interface methods

}


class Instagram implements TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
    ) { }
}


// you can add additional things in constructor but you should not leave something from interface
class Youtube implements TakePhoto, Story {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: string, // adding additonal things here

    ) { }

    createStory(): void {
        console.log("story created")
    }
}