abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ) { }

    // abstract class will not have method definition
    abstract getUser(): void

    // you can add normal methods also in abstract class
    getReelCount(): number {
        return 6
    }
}

let phot = new TakePhoto("test", "Test") // we cannot able to create instance of abstract class directly (that is the application of abstract class)

// but we can able to create instance with the class that extends the abstact class

class Insta extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
        super(cameraMode, filter)
    }
    getUser(): void {

    }
}

const photo = new Insta("test", "Test", 3)
photo.getUser();
photo.getReelCount() // we can also able to access the methods in abstract class