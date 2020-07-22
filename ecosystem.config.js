/* eslint-disable prettier/prettier */
module.exports = {
    apps: [{
        name: 'monuments-app',
        exec_mode: 'cluster',
        instances: 'max', // Or a number of instances
        script: './node_modules/nuxt/bin/nuxt.js',
        args: 'start',
    }, ],
}