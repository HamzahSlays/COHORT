function greet(name, callback) {
    console.log("Hello " + name);
    callback();  // Executing the callback function
}
function afterGreeting() {
    console.log("Welcome to the platform!");
}
greet("Alice", afterGreeting);  // Passing a function as an argument