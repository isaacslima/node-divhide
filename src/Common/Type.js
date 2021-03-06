'use strict';

var Internal = {};

/**
 *
 * The regular expression format
 *
 * @type {RegExp}
 *
 */
Internal.RegExpFormat = /^\/.*\/(\w*)$/;



var Type = {};

/*
 * Get the type of the value
 * Possible values are: undefined, object, array, number, string
 *
 * @param{obj}
 * @return{string}
 *
 */
Type.of = function (obj) {

    var t = typeof obj;

    if(t == "object" && obj instanceof Array){
        return "array";
    }
    else if(t == "object" && typeof(obj) == "boolean"){
        return "boolean";
    }

    return t;
};


/*
 * Checks if the given value is an array
 *
 * @param{value} value to check
 * @return True|False
 *
 */
Type.isArray = function (value) {

    return (value instanceof Array);

};


/*
 * Checks if the given value is an array
 *
 * @param{value} value to check
 * @return True|False
 *
 */
Type.isBoolean = function (value) {

    return typeof(value) === "boolean";

};


/*
 * Checks if the given value is an array
 *
 * @param{value} value to check
 * @return True|False
 *
 */
Type.isFunction = function (value) {

    return typeof(value) === "function";

};


/*
 * Checks if the given value is a string
 *
 * @param{value} value to check
 * @return True|False
 *
 */
Type.isString = function (value) {

    return typeof(value) === "string" ||
           value instanceof String;         /// support to custom String declarations

};


/*
 * Checks if the given value is an object
 *
 * @param{value} value to check
 * @return True|False
 *
 */
Type.isObject = function (value) {

    // null or undefined values are objects, but we don't care
    /* jshint -W041 */
    if(value == null) return false;
    if(Type.isArray(value)) return false;

    return typeof(value) === "object";

};

/**
 * Checks if the given value is a regular expression
 *
 * @param  {*}          value
 * @return {Boolean}
 */
Type.isRegExp = function (value) {

    return (value instanceof RegExp);

};

/**
 * Is value on the regexp string format
 *
 * @param  {*}          value
 * @return {Boolean}
 *
 */
Type.isRegExpStr = function (value) {

    if(!Type.isString(value)){
        return false;
    }

    return !!Internal.RegExpFormat.exec(value);

};

/*
 * Checks if the given value is a number
 *
 * @param{value} value to check
 * @return True|False
 *
 */
Type.isNumber = function (value) {

    var type = typeof(value);
    if(type != "number" && type != "string"){
        return false;
    }

    /// empty strings are equal to 0
    if(type == "string" && !value){
        return false;
    }

    value = Number(value);
    return !isNaN(value);

};


/*
 * Test if the value is defined or not
 *
 * @param {void} value
 *
 * @return {Boolean}
 */
Type.isDefined = function(value){

    /* jshint -W041 */
    if(value != null){
        return true;
    }

    return false;

};

/**
 *
 * Test if value is instanceOf 'fn'
 *
 * @param {*} value
 * @param {*} fn
 * 
 * @return {Boolean}
 * 
 */
Type.instanceOf = function(value, fn){

    /// take care of javascript quirks first!
    
    if(Type.isString(value) && fn == String){
        return true;
    }
    else if(Type.isNumber(value) && fn == Number){
        return true;   
    }
    else if(Type.isBoolean(value) && fn == Boolean){
        return true;
    }

    return (value instanceof fn);
    
};

/**
 *
 * Tests if the value is Empty
 *
 * @param  {*}  value
 *
 * @return {Boolean}
 *
 */
Type.isEmpty = function(value){

    if( !Type.isDefined(value) ){

        return true;
    }

    if( Type.isString(value) ){

        return value === "";
    }

    if( Type.isObject(value) || Type.isArray(value) ){

        for (var key in value) {
            // cancel iteration because it has some data
            return false;
        }

        return true;

    }

    return false;

};


module.exports = Type;
