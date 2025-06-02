let promise = new Promise(function(resolve, reject) {
    let success = true;
    if (success) {
        resolve("Operation successful!");
    } else {
        reject("Operation failed!");
    }
});
promise
    .then(function(result) {
        console.log("Success:", result);
    })
    .catch(function(error) {
        console.log("Error:", error);
    });