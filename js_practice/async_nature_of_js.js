//Understanding the working of the web API and callback queue
function call(){
    let a=0;
    for(let i=0;i<5000000000;i++){
        a++;
    }
    console.log(a);
}
function log(){
    console.log("Hello World");
}
setTimeout(log,1000);
console.log("Hello World will be printed below after 1 sec");
console.log("Uh oh now Hello World will have to wait for the for loop")
call();