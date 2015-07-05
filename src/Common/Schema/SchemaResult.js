"use strict";

var Safe                = require("../Safe"),
    Type                = require("../Type"),
    Assert              = require("../Assert"),
    ExceptionList       = require("../Exception/ExceptionList"),
    Types               = require("./Types"),
    SchemaResultNode    = require("./SchemaResultNode");

/**
 *
 * @class
 * Stores the result of a schema evaluation. It will keep reference to 
 * the global structure and the evaluation tree as well.
 *
 * @param {*} schema
 * @param {*} value
 *
 *
 */
var SchemaResult = function(schema, value){

    /// validate schema
    Assert.instanceOf(Types.SchemaDefinition)
        .assert(schema);
    
    /// make sure its a value
    value = Safe.value(value);
    
    /**
     *
     * Top-down global error tracking
     * 
     * @type {ExceptionList}
     * 
     */
    var errors = new ExceptionList();

    /**
     *
     * Hierarchical evaluation reference node
     * 
     * @type {SchemaResultNode}
     * 
     */
    var node = new SchemaResultNode(schema);
    
    /**
     *
     * SchemaResult API
     * 
     * @type {Object}
     * 
     */
    var self = {

        /// TODO
        errors: errors,

        /**
         *
         * Get the value result.
         * 
         * @return {*}
         * 
         */
        getValue: function(){
            return value;
        },

        /**
         *
         * Set the value of the given index.
         * 
         * @param {*} value
         * @param {Object} options
         *
         */
        setValue: function(val, options) {

            /// normalize val
            val = Safe.value(val);

            /// normalize options
            options = Safe.object(options);
            options.index   = Safe.value(options.index, null);

            if(options.index !== null){
                value[options.index] = val;
            }
            else {
                value = val;
            }

        }

    };

    /// expose module as 'Typed' SchemaResult instance
    return new Types.SchemaResult(self);

};

module.exports = SchemaResult;
