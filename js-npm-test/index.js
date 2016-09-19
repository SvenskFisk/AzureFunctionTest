var _ = require("underscore");

module.exports = function (context, input) {
    context.log('Node.js manually triggered function called with input:', input);
    context.done();

    var values = [1,2,3];
    _(values).map(value => context.log(value + 10));
    
};