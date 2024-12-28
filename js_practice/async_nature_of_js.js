function call()
{
    let a=0;
    for(let i=0;i<5000000000;i++)
    {
        a++;
    }
    console.log(a);
}
function log()
{
    console.log("Hello World");
}
setTimeout(log,1000);
call();