//A program to show the dynamic nature of arrays in JS
let mixedArray = [
    42,                                 // number
    "Hello",                            // string
    { id: 1, name: "JS" },              // object
    [1, 2, 3],                          // nested array
    function(x, y) { return x + y; },   // function
    true                                // boolean
];

function logFn(arr)
{
    console.log(arr[4](2,3));
}
function logObj(arr)
{
    console.log(arr[2]["name"]);
}

logFn(mixedArray);
logObj(mixedArray);