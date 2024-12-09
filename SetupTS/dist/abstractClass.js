"use strict";
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    // you can add normal methods also in abstract class
    getReelCount() {
        return 6;
    }
}
let phot = new TakePhoto("test", "Test"); // we cannot able to create instance of abstract class directly (that is the application of abstract class)
// but we can able to create instance with the class that extends the abstact class
class Insta extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getUser() {
    }
}
const photo = new Insta("test", "Test", 3);
photo.getUser();
photo.getReelCount(); // we can also able to access the methods in abstract class
