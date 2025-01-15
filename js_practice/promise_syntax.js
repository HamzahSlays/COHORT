//Understanding the syntax of promises
let promise = new Promise(function(resolve, reject) {
    let success = true;
    if (success) {
        resolve("Operation successful!");
    } else {
        reject("Operation failed!");
    }
});
