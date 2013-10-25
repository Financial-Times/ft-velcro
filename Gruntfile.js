module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
          docs: {
            options: {
              style: 'expanded'
            },
            files: {
                './static/css/docs.css': './src/main.scss'
            }
          }
        },
        copy: {
          polyfills: {
            src: "./bower_components/grid-module/polyfills/boxsizing.htc",
            dest: "./static/polyfills/boxsizing.htc"
          }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['sass', 'copy']);

};