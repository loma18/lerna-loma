var package1 = require('package-demo1');
function unit(a, b) {
    console.log('unit:', a * b);
    return a * b;
}

function useDemo1() {
    var sum = package1.add(2, 3);
    console.log('sum:', sum);
}

useDemo1();

module.exports = { unit }