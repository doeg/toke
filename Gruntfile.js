module.exports = function(grunt) {

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-babel');

  grunt.initConfig({

    babel: {
      options: {
        sourceMap: true,
        experimental: true
      },

      dist: {
        files: [{
          src: ["lib/**/*.js", "src/**/*.js"],
          dest: "./build/",
          expand: true
        }]
      }
    },

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
        files: ['Gruntfile.js', '*.js', 'lib/**/*.js', 'src/**/*.js', 'test/**/*.js'],
        tasks: ['test', 'go']
      }
    }
  });

  grunt.registerTask('default', 'watch');

  grunt.registerTask('test', ['mochaTest']);

  grunt.registerTask('build', ['babel']);

  grunt.registerTask('go', 'generate randoms', ['build', 'random']);

  grunt.registerTask('random', 'generate randoms', function() {
    var n = 5;
    var Toke = require("./build/src/toke");

    var toke = new Toke();
    for (var i = 0; i < n; i++) {
      console.log(toke.mk("{NP} {VP}"));
    }
  });
}
