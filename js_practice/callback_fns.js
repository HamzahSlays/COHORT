//Write a program to calculate the and display using callback functions
function display(num)
{
    console.log(num);
}
function sum(a,b,fnToCall)
{
    let num=a+b;
    fnToCall(num);
}
sum(2,3,display);