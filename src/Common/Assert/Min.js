'use strict';

var _           = require("lodash"),
    Type        = require("../Type"),
    Safe        = require("../Safe"),
    Exception   = require("../Exception/Exception");

/**
 *
 * Test the min length of any kind of object
 *
 * @throws {Exception}
 *
 * @param {*} val
 * @return {*}
 *
 */
var Min = function(val, min){

    min = Safe.number(min);
    var length = Safe.length(val);

    if(length < min){
        throw new Exception("VALIDATION_MIN", { value: min });
    }

    return val;

};

module.exports = Min;
