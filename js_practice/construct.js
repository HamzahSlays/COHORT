//Understanding the use of this keyword and how does a class behave like a blueprint of an object
class Animal {
    constructor(name, legCount, speaks) {
    this.x = name;
    this.y = legCount;
    this.z = speaks;
    }
    speak() {
    console.log("Hi there "+this.z);
    }
}
    let dog = new Animal("dog", 4, "bhow bhow");//objects can also be created by the new operator
    let cat = new Animal("cat", 4, "meow");

    let goat = {        //objects can also be created like this
        name: "goat",
        legCount: 4,
        speaks: "baa baa"
    }
    cat.speak();
    console.log("Hi there "+goat["speaks"]);
