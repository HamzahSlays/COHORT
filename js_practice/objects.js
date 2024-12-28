const dog = {
    name: "doggie",
    legCount: 2,
    speaks: "bhow bhow",
};
function wayOfLogging1(animal) {
    console.log(
        "Animal " + animal.name + "speaks" + animal.speaks + " with " + animal.legCount + " legs"
    );
}
function wayOfLogging2(animal) {
    console.log(
        "Animal " + animal["name"] + "speaks" + animal["speaks"] + " with " + animal["legCount"] + " legs"
    );
}
wayOfLogging1(dog);
wayOfLogging2(dog);