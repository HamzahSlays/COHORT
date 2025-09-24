//This is the same code as kiratfile.js but written using promises
const fs = require("fs");
function kiratsReadFile() {
    console.log("inside kiratsreadfile");
    return new Promise (function (resolve){
        console.log("inside promise");
        fs.readFile("a.text", "utf-8", function (err, data){
            console.log("before resolve");
            resolve(data);
        })
    })
}
function onDone(data) {
    console.log(data);
}
kiratsReadFile().then(onDone);