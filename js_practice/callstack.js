//Understanding callstack of JS
console.log("First");
function log1(){
    console.log("Fourth");
}
function log2(cb){
    cb();
    console.log("Third");
}
function cb(){
    console.log("Second");
}
log2(cb);
log1();