//Understanding Promises
let promise = new Promise (function (resolve,reject){
resolve("Hello Three");
});
console.log("Hello One");
setTimeout(function(){console.log("Hello Four"),2000});
console.log("Hello Two");
console.log(promise);