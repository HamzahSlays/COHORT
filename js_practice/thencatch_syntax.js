//Understanding the syntax for .then() and .catch()
promise
    .then(function(result) {
        console.log("Success:", result);
    })
    .catch(function(error) {
        console.log("Error:", error);
    });
