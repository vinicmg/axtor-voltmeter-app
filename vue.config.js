// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */

module.exports = {
    pluginOptions: {
        electronBuilder: {
            externals: ["serialport"],
        },
    },
}