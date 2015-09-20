module.exports = function(grunt) {

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.initConfig({

    mochaTest: {
      test: {
        options: {
          growl: true,
          reporter: "min",
          require: ["babel/register"]
        },
        src: ['test/**/*.js']
      }
    },

    watch: {
      js: {
        options: {
          spawn: true,
          interrupt: true,
          debounceDelay: 250,
        },
        files: ['Gruntfile.js', '*.js', 'src/**/*.js', 'test/**/*.js'],
        tasks: ['test', 'go']
      }
    }
  });

  grunt.registerTask('default', 'test');
  grunt.registerTask('test', ['mochaTest']);
  grunt.registerTask('go', 'goes', function() {
    console.log("going...");
  });
}
