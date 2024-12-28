class Animal {
    constructor(name, legCount, speaks) {
    this.x = name;
    this.y = legCount;
    this.z = speaks;
    }
    speak() {
    console.log("hi there "+this.z);
    }
}
    let dog = new Animal("dog", 4, "bhow bhow");
    let cat = new Animal("cat", 4, "meow");
    let goat = {
        name: "goat",
        legCount: 4,
        speaks: "baa baa"
    }
    cat.speak();
    console.log(goat);
