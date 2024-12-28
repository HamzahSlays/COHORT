//Understanding the working of callbackqueue, callstack, event loop and web APIs through a heavy heavy for loop
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
/*Flow:
1.	setTimeout(log, 1000) was delegated to the Web API, which started the timer.
2.	The Call Stack executed the call() function, blocking it for a long time due to the heavy for loop.
3.	Once the timer expired, the log function moved to the Callback Queue but couldn't run yet because the Call Stack was busy.
4.	After call() finished, the Event Loop moved log from the Callback Queue to the Call Stack, where it executed and printed "Hello World".
*/