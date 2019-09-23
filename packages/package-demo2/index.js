var package1 = require('package-demo1');
var lodash = require('lodash');
function unit(a, b) {
    console.log('unit:', a * b);
    var c = lodash.join([a, b]);
    console.log('c:', c);
    return a * b;
}
function useDemo1() {
    var sum = package1.add(2, 3, 4);
    console.log('sum:', sum);
}

useDemo1();

module.exports = { unit }