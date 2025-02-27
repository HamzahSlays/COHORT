# JavaScript Notes

JS is an Interpreted language

JS is a Dynamic Language

JS is a Single Threaded Language (it has a single call stack)

## Synchronous Functions
Functions that basically runs line by line (hence "synchronous"). Below are some examples of this particular function.

- `<str>.length()`
- `<str>.indexOf(<target>)`
- `<str>.lastIndexOf(<target>)`
- `<str>.slice(<start index>, <end index>)`: the last index is not included
- `<str>.replace(<target word>, <replacement word>)`
- `<str>.trim()`
- `parseInt(<str>)`: other data types included
- `<arr>.push(<desired element)`: inserts the desired element at the end of the array
- `<arr>.unshift(<desired element)`: inserts the desired element at the beginning of the array
- `<arr>.pop()`: deletes the element of the last index
- `<arr>.shift()`: deletes the element of the 1st index
- `<arr>.concat(<arr>)`: Difference between push and concat, in concat we are adding a whole array and in push we're adding an element
- `<obj>.getTime()`: you should create an object of Date type which is a predefined class in JS containing many functions getDate(), getFullYear(), etc.

One cool thing we can do with getTime() is that we can **measure the execution time** of a function in ms. Let's take an example by which we can measure the time taken by calculatSum() to execute.

```javascript
function calculateSum() {
    let sum = 0;
    for(let i = 0; i < 100000; i++) {
        sum += i;
    }
    return sum;
}

const beforeTime = new Date().getTime();
calculateSum();
const afterTime = new Date().getTime();

console.log(afterTime - beforeTime);
```

- `JSON.parse(<string>)`: converts string to an object (NOTE: The keys of the object must be enclosed in double quotes; otherwise, it will throw a SyntaxError. Additionally, values can be strings, numbers, booleans, arrays, objects, or null, but they must follow proper JSON formatting). Let's take an example
```javascript
const jsonString = '{"name": "Alice", "age": 25, "city": "New York"}';

const ob = JSON.parse(jsonString);

console.log(ob.name); // Output: Alice
console.log(ob.age);  // Output: 25
console.log(ob.city); // Output: New York
```

- `JSON.stringify(<obj>)`: converts object to string (just the reverse of `JSON.parse(<string>)`). Example:
```javascript
const person = { name: "Alice", age: 25, city: "New York" };

const jsonString = JSON.stringify(person);

console.log(jsonString);
// Output: '{"name":"Alice","age":25,"city":"New York"}'
```

## Asynchronous Functions
Those functions that allow a program to start a potentially long running operation and continue executing other tasks without waiting for that operation to complete. This is particularly important in environments like web browsers or Node.js where waiting for an operation to finish (like fetching a data from a server or reading a large file) could make the application unresponsive. Two important such functions are:

- `setInterval(<function reference>, <time delay in ms>)`: schedules the provided function to run repeatedly after every delay, and will continue running the function until explicitly stopped using clearInterval().
- `setTimeout(<function refernce>, <time delay in ms>)`: runs a function once after a delay

## Callback Functions

In JavaScript, a callback function is a function passed as an argument to another function, intended to be executed at a later time.

**A simple example demonstrated is:**

```javascript
function processData(data, callback) {
    // Process the data
    const processedData = data.toUpperCase();
    
    // Call the callback function with the processed data
    callback(processedData);
}

function displayData(data) {
    console.log(data);
}

// Using the callback
processData("hello", displayData);
```

This differs from typical function calls in languages like Java, where functions are usually invoked directly within another function's block rather than passed as arguments.

**For example:**

**JavaScript (using a callback):**
```javascript
function fetchData(callback) {
    // Simulate fetching data
    setTimeout(() => {
        const data = "Data fetched!";
        callback(data);
    }, 1000);
}

fetchData((result) => {
    console.log(result);
});
```

**Java (direct function call):**
```java
public class Main {
    public void fetchData() {
        // Fetch data directly
        String data = "Data fetched!";
        displayData(data);
    }
    
    public void displayData(String data) {
        System.out.println(data);
    }
}
```

If we connect the dots we see, setTimeout() and setInterval() are also a showcase of the use of callback functions. Since when we use either of the functions we call the function refernce basically the function which we are calling is being passed as an argument inside the setTimeout() or setInterval() functions.

This mechanism supports asynchronous programming by enabling JavaScript to handle tasks that might take time, like fetching data from an API or processing large files.

When a function is passed as an argument, it doesn't run immediately but is instead stored for execution at the appropriate time. This approach makes JavaScript more flexible and allows developers to create more dynamic and responsive applications.

## Arrays in JS

Unlike statically-typed languages where arrays must contain elements of a predetermined type, JavaScript arrays are dynamic containers. Arrays in JS have:

1. Type flexibility: JavaScript arrays can hold mixed types (numbers, strings, objects, functions etc.) in the same array
2. Dynamic sizing: JavaScript arrays can grow or shrink dynamically
3. Array declaration: let arr = [1,2,3,4]; (In Java we use curly brackets {} while initialising the elements of the array but in JS we use the square brackets [])

The feature that arrays in JS can also include functions and objects is so cool. Let's check it out:

```javascript
let mixedArray = [
    1,
    "hello",
    { name: "John" },
    function() { 
        console.log("Hi!");
    }
];

console.log(mixedArray[0]);  // 1
console.log(mixedArray[1]);  // "hello"
console.log(mixedArray[2]);  // { name: "John" }
mixedArray[3]();            // Hi!
```

## Objects in JS

In JavaScript, objects are a key-value-based structure, and they are one of the foundational ways to store and organize data.

They Store key-value pairs in an unordered way.

Example:
```javascript
const dog = { 
    name: "doggie", 
    speaks: "bhow bhow" 
}
```

The variable dog here is an object literal. Arrays and objects may look like arrays but they serve different purpose. Objects are:

- Key-value pairs: Each property (key) is tied to a specific value.
- Unordered: The properties don't maintain a specific order.
- Used for structured data: Best for representing entities or objects with attributes.

One cool thing in JS is that we can also pass objects as arguments in a function.

## Asynchronous functions II

When an asynchronous function is invoked, three major components are involved: the Call Stack, the Callback Queue, and the Event Loop.

### Call Stack:
- The execution context where JavaScript runs functions one at a time in a LIFO (Last In, First Out) order.
- If a function is pushed into the callstack it first evaluates itself and then popped out of the stack and then the next function is pushed into the stack.
- The LIFO property works when there's a call back happening

Let's take an example for the working of the callstack:
```javascript
function cb() {
    console.log("Second");
}

function log2(cb) {
    cb();
    console.log("Third");
}

function log1() {
    console.log("Fourth");
}

console.log("First");
log2(cb);
log1();
```

When code runs:
1. console.log("First") goes into stack, executes, pops off
2. log2(cb) goes into stack, executes cb()
3. cb() goes into stack, prints "Second", pops off
4. Back in log2, console.log("Third") executes, then log2 pops off
5. log1() goes into stack, prints "Fourth", pops off

Each function goes in, fully executes, then pops off independently. The LIFO pattern happens with nested callbacks.

### Web API:
- An environment outside the Call Stack (like the browser) that handles asynchronous tasks such as timers, HTTP requests, etc.

### Callback Queue:
- A queue where completed asynchronous tasks (from Web API) wait to be executed.

### Event Loop:
- The coordinator that moves tasks from the Callback Queue to the Call Stack, but only when the Call Stack is empty.

JavaScript's Single-Threaded Nature:
- JavaScript has only one Call Stack, so it can execute one task at a time.
- This means long-running tasks (e.g., loops, file reads) can block other code from running, which could freeze the application.

How Web APIs Help:
- Web APIs (like setTimeout, fetch, etc.) delegate time-consuming or blocking tasks to the browser or Node.js runtime.
- While the Web APIs handle these tasks in the background, JavaScript continues executing other code on the main thread, ensuring the application stays responsive.

Let's take a sample code for visualization:
```javascript
function log() {
    console.log("Hello World");
}

function call() {
    for(let i = 0; i < 5000000000; i++) {
        // Some time consuming task
    }
    console.log("5000000000");
}

setTimeout(log, 1000);
console.log("Hello World will be printed below after 1 sec");
console.log("Uh oh now Hello World will have to wait for the for loop");
call();
```

1. setTimeout(log, 1000) is encountered:
   - Delegated to the **Web API**, which starts the 1-second timer.

2. console.log("Hello World will be printed below after 1 sec") executes:
   - Immediately logs: "Hello World will be printed below after 1 sec"

3. console.log("Uh oh now Hello World will have to wait for the for loop") executes:
   - Immediately logs: "Uh oh now Hello World will have to wait for the for loop"

4. call() function starts:
   - A **blocking for loop** runs for a long time, occupying the **Call Stack**.
   - Once complete, logs: "5000000000"

5. Timer for setTimeout expires:
   - The log function is moved to the **Callback Queue** *(The log function was scheduled to execute after 1 second, but since it was delegated to the Web API, when the timer expired, it had to wait in the Callback Queue because the Call Stack was occupied by the blocking call function)* but cannot run because the **Call Stack** is still busy with the call function.

6. Event Loop clears the Callback Queue:
   - After call() finishes, the log function is moved to the **Call Stack** by the **Event Loop** and executed, logging: "Hello World"

## File Handling (fs module)

To work with the files we need an inbuilt package called fs (file system).

The file system module allows you to work with the file systems in your computer.

To import this built in module we need to implement a function called require().

Syntax:
```javascript
const fs = require('fs');
```

Now when we want to read the file we use the function readFileSync() function with the file name that we want to read inside its parameter.

The syntax looks like:
```javascript
const fileContents = fs.readFileSync('random.txt');
```

Now let's say we create a txt file and write some random lines there and try to read that file:
```javascript
const fs = require('fs');
const fileContents = fs.readFileSync('a.txt');
console.log(fileContents);
```

We see that the output that we are getting is hexadecimal values representing the text data in its raw binary form (like a coded message).

Now to get a readable text (decoded message) we have to pass "utf-8" as the second parameter of the readFileSync() function.

So, after making the necessary changes we get a readable text that we wrote in the txt file:
```javascript
const fs = require('fs');
const fileContents = fs.readFileSync('a.txt', 'utf-8');
console.log(fileContents);
```

We can also print the content of our file in another way without assigning the content into a variable. By adding a 3rd parameter to the readFile() function.
```javascript
const fs = require('fs');
fs.readFile('a.txt', 'utf-8', function(err, data) {
    console.log(data);
});
```

Now, we have to keep in mind that the readFileSync() uses a synchronous approach to handle files (means that js will read the files until all the contents are read before moving on to the next function). If the file content is really large it will block the main thread reducing optimization.

So, to delegate the tasks we use the readFile() function of the fs object, which handles asynchronous tasks.

The below code represents the asynchronous working of the readFile() function:
```javascript
const fs = require('fs');

console.log("First");

// Synchronous
const fileContents = fs.readFileSync('a.txt', 'utf-8');
console.log(fileContents);

console.log("Second");

// Asynchronous
fs.readFile('a.txt', 'utf-8', function(error, data) {
    console.log(data);
});

console.log("Third");
```

The working flow here looks like:

Console logs "First":
- console.log("First") is added to the Call Stack.
- It executes immediately and prints: First.
- The Call Stack is now empty.

Reading the file synchronously (fs.readFileSync):
- fs.readFileSync is added to the Call Stack.
- The main thread blocks while the file is read.
- Once the file is read, console.log(fileContents) is added to the Call Stack.
- It prints the file content (Hello 100xDevs).
- The Call Stack clears.

Console logs "Second":
- console.log("Second") is added to the Call Stack.
- It executes immediately and prints: Second.
- The Call Stack is now empty.

Delegating the asynchronous file read (fs.readFile):
- fs.readFile is added to the Call Stack.
- The file read operation is delegated to the Web API, and the function exits.
- The Call Stack is now empty.

Console logs "Third":
- console.log("Third") is added to the Call Stack.
- It executes immediately and prints: Third.
- The Call Stack is now empty.

Web API completes the file read:
- The Web API completes reading the file.
- The callback function (function (error, data) { ... }) is moved to the Callback Queue.

Event Loop moves the callback to the Call Stack:
- The Event Loop checks that the Call Stack is empty.
- It moves the callback function from the Callback Queue to the Call Stack.
- Inside the callback, it checks for errors and executes console.log(data).
- It prints: Hello 100xDevs.
- The Call Stack is now empty again.

Taking another example of a Custom Asynchronous File Reader with Callbacks in Node.js:
```javascript
const fs = require('fs');

function kiratsReadFile(cb) {
    fs.readFile("a.txt", "utf-8", function(err, data) {
        if(err) {
            console.log("error reading file");
        } else {
            cb(data);
        }
    });
}

function onDone(data) {
    console.log(data);
}

kiratsReadFile(onDone);
```

The typical workflow here is:

1. kiratsReadFile(onDone) is called and pushed onto the **Call Stack**.

2. Inside kiratsReadFile, fs.readFile("a.txt", "utf-8", callback) is invoked.
   - fs.readFile is pushed onto the **Call Stack**.
   - fs.readFile is recognized as an asynchronous function, so it delegates the file-reading task to the **Web API**.
   - The callback (function(err, data)) is registered for execution after the file reading completes.
   - fs.readFile is popped off the **Call Stack**, and the Call Stack is now empty.

3. The **Web API** starts reading a.txt. During this time, the **Event Loop** monitors the Call Stack and Callback Queue.

4. The onDone function is defined but not yet executed.

5. Once the file reading is complete, the **Web API** sends the callback (function(err, data)) to the **Callback Queue** along with the file's contents.

6. The **Event Loop** notices that the **Call Stack** is empty and pushes the callback from the **Callback Queue** onto the **Call Stack**. *(Here's the catch if there was another function running on the call stack the event loop would have put the fs.readFile in the callback queue until all the sync functions are executed).*

7. The callback function (function(err, data)) is executed:
   - It first checks for errors (if (err) block).
   - If no error exists, it calls cb(data) (where cb is onDone).

8. The onDone(data) function is pushed onto the **Call Stack**.

9. Inside onDone, console.log(data) logs the content of a.txt to the console.

10. Once the log operation completes, onDone is popped off the **Call Stack**, followed by the callback function.

11. The program completes execution. The **Call Stack** is now empty, and no further tasks remain in the **Callback Queue** or **Web API**.

## Promises

A promise is a promise of code execution. The code either executes or fails, notifying the user in both the cases.

The syntax of creating a Promise is:
```javascript
let promise = new Promise (function (resolve, reject){
    <code block>
});
```

resolve and reject are two callbacks provided by JavaScript itself:
- resolve(value): If the job is finished successfully
- reject(error): If the job fails

The promise object returned by the new Promise constructor has the 'state' and 'result' property.

'state': Initially pending then changes to either "fulfilled" when resolve is called or "rejected" when reject is called

'result': Initially undefined, then changes to the value if resolved or changes to error when rejected.

Let's take an example:
```javascript
setTimeout(() => {
    console.log("Hello Four");
}, 0);

console.log("Hello One");

const p = Promise.resolve();
p.then(() => {
    console.log("Hello Three");
});

console.log("Hello Two");
```

The execution sequence happens like this:

1. Synchronous code runs first: "Hello One" and "Hello Two" get logged immediately

2. Even though setTimeout has a delay of 0ms:
   - It gets sent to Web APIs
   - Then its callback gets moved to the Callback Queue (macrotask queue)

3. The Promise's .then() handler goes into the Microtask Queue

4. When the call stack is empty:
   - The event loop checks the Microtask Queue FIRST
   - All microtasks (including Promise callbacks) must complete before moving on
   - So "Hello Three" gets logged

5. Only after ALL microtasks are done:
   - The event loop checks the Callback Queue
   - The setTimeout callback finally runs, logging "Hello Four"

This is why even with a 0ms timeout, "Hello Four" always comes last. Microtasks (Promises, queueMicrotask, etc.) have priority over macrotasks (setTimeout, setInterval, etc.).

**.then():** primarily handles the successful case (when promise is resolved) and can optimally handle errors as a second argument

**.catch():** is specifically for handling errors (rejected promises)

The example that we studied in the Custom Asynchronous File Reader with Callbacks in Node.js, was somewhat an ugly way of creating a Custom Asynchronous.

The cleaner way is to create promises:
```javascript
function kiratsReadFile() {
    return new Promise(function(resolve) {
        fs.readFile("a.txt", "utf-8", function(err, data) {
            resolve(data);
        });
    })
}

function onDone(data) {
    console.log(data);
}

kiratsReadFile().then(onDone);
```

Here,

1. The kiratsReadFile() function is called.
   - A Promise is created and begins execution.
   - Inside it, the fs.readFile() function is called to read the file asynchronously.

2. The fs.readFile() operation is delegated to the Web API for processing (since it is an asynchronous task), and kiratsReadFile() finishes its execution, returning a Promise.
   - At this point, the kiratsReadFile() function is removed from the Call Stack.

3. While the Web API is handling the file read operation in the background, the program continues executing any remaining synchronous code.
   - In this case, there's no additional synchronous code after calling kiratsReadFile() *(so, the callstack remains empty).*

4. Once the file reading is complete, the Web API prepares the callback function (function(err, data)) with the file's data and signals the Promise to resolve by calling resolve(data).

5. When the resolve(data) is called, the .then(onDone) handler is added to the Microtask Queue.
   - Promises always use the Microtask Queue to prioritize execution once the Call Stack is empty.

6. The Event Loop checks if the Call Stack is empty.
   - Since it is, the Event Loop moves the .then(onDone) task from the Microtask Queue to the Call Stack for execution.

7. Inside the .then(onDone) task, the onDone(data) function is executed.
   - This logs the content of the file to the console using console.log(data).

8. After logging the file's content, the program finishes execution as there is nothing left to process.
