'use strict';

var Type        = require("../Type"),
    Exception   = require("../Exception/Exception");

/**
 *
 * Test if value is an object
 *
 * @throws {Exception}
 *
 * @param {*} val
 * @return {Object}
 *
 */
var Obj = function(val){

    var v = Type.isObject(val);

    if(!v){
        throw new Exception("VALIDATION_TYPE", { value: Type.of(val), expected: Type.of({}) });
    }

    return val;

};

module.exports = Obj;
