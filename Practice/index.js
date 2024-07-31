"use strict";
const message = "Hello World!";
// Accessing the property 'toLowerCase'
// on 'message' and then calling it
message.toLowerCase();
// Calling 'message'
// message(); // message is not a function // this expression is not callable.
function fn(x) {
    function flip(x) {
        console.log(x);
    }
    return x.flip(20); // x.flip is not a function
}
fn(4);
