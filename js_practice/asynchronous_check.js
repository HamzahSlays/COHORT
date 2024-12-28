function sum(num)
{
    let s=0;
    for(let i=1;i<=num;i++)
    {
        s+=i;
    }
    return s;
}
function display()
{
    console.log("The sum of single digit natural numbers is "+sum(9));
}

setTimeout(display, 2000);
console.log("Surprise Motherfucker");