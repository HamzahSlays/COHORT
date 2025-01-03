//Understanding the fs module and one it's function the readFile() function
const fs = require("node:fs");
fs.readFile("./file.txt", "utf-8", function(error, data) {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
});
