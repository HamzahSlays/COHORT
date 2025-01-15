//Understanding Promises
//Cleaner way of creating a custom asynchronous function
const fs = require ('fs');
function kiratsReadFile() {
    return new Promise(function(resolve) {
        fs.readFile("file.txt", "utf-8", function(err, data) {
                resolve(data);
        });
    });
}
function onDone(data) {
    console.log(data);
}

kiratsReadFile().then(onDone);
