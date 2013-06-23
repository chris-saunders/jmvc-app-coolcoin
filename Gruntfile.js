module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    watch: {
      files: ['**/*'],
      options: {
        livereload: true
      },
    },
    jshint: {
      files: ['*.js']
    },
    jasmine: {
      all: {
        src: 'steal?coolcoin/',
        options: {
          specs: 'test/jasmine-standalone-1.3.1/spec/*Spec.js',
          helpers: 'test/jasmine-standalone-1.3.1/spec/*Helper.js',
        }
      },
      sample: {
        src: 'test/jasmine-standalone-1.3.1/src/**/*.js',
        options: {
          specs: 'test/jasmine-standalone-1.3.1/spec/*Spec.js',
          helpers: 'test/jasmine-standalone-1.3.1/spec/*Helper.js',
        }
      }
    },
    connect: {
      server: {
        options: {
          port: 8000,
          base: '../'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  // Default task(s).
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('test', ['jasmine:all']);
  grunt.registerTask('travis', ['jshint', 'jasmine:all']);

};
