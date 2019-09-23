var package2 = require('package-demo2');
// var _ = require('lodash');
function add1(a, b, c) {
    // var d = _.join(a, b, c);
    // console.log('d:', d);
    package2.unit(4, 6);
    return a + b + c;
}
add1(1, 2, 3);

module.exports = { add1 }