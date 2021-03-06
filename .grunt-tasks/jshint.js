
module.exports = {

    /**
     * Code jshint config
     *
     * @type {Object}
     *
     */
    code: {

        src: [
            './*.js',
            './*.json',
            'src/**/*.js'
        ],

        options: {

            ignores: [
                'src/**/*JasmineSpec.js',
                'src/**/*MochaSpec.js'
            ],

            globalstrict: true,
            predef: [
                "require",
                "module"
            ]

        }

    },

    /**
     *
     * Spec jshint config
     *
     * @type {Object}
     */
    spec: {

        src: [
            'src/**/*JasmineSpec.js',
            'src/**/*MochaSpec.js'
        ],

        options: {

            globalstrict: true,
            predef: [
                "require",
                "_",
                "Divhide",
                "describe",
                "jasmine",
                "beforeEach",
                "it",
                "expect",
                "window"
            ],

            "-W064": true

        }

    },



};