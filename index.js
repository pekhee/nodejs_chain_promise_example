var Q = require("q");
var exec = require("child_process").exec;
exec = Q.nbind(exec);

var Sleeper = function(time) {
    this.promise = exec("sleep " + time + " && echo salam chetori " + time);
}

var s1 = new Sleeper(5);

s1.promise.then(function(d) {
    console.log("s1: ", d);
    return new Sleeper(3).promise;
}).done(function(d) {
    console.log("s2: ", d);
});
