//Write a program in JavaScript to print the name of a student who is male and above the age of 20 using Objects
let obj=[{firstName:"David", age:23, gender:"Male"},
    {firstName:"Hamzah", age:21, gender:"Male"},
    {firstName:"Gwen", age:21, gender:"Female"}]
    for(let i=0;i<obj.length;i++)
    {
    if(obj[i]["gender"]== "Male" && obj[i]["age"]> 20)
    {
        console.log(obj[i])
    }
    }
