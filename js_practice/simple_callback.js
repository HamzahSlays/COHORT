//understanding callbacks using a simple code
function log1()
{
    console.log("Hello World 1");
}
function log2()
{
    console.log("Hello World 2")
}
function call(fn)
{
    fn();
}
call(log2);