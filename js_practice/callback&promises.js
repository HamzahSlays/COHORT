//Understanding the relation between callbacks and promises
function doTask(callback) {
    let success = true;
    if (success) {
        callback("Operation successful!");
    }
}

doTask(function(result) {
    console.log("Success:", result);
});
